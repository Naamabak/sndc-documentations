# CMU Complémentaire
<!-- SPDX-License-Identifier: MPL-2.0 -->

La [Protection Universelle Maladie (PUMa)](https://www.ameli.fr/assure/droits-demarches/principes/protection-universelle-maladie) 
garantit désormais à toute personne qui travaille ou réside en France un droit à la prise en charge des frais de santé (remboursements des frais de santé hors prestations en espèces) sans démarche particulière à accomplir.

Par conséquent, la couverture maladie universelle de base (CMU) n'a plus de raison d'être et est supprimée. 
En revanche, la [CMU complémentaire](https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante/cmu-complementaire) (CMU-C) continue d'exister. 
Elle permet aux assurés à qui elle est attribuée de bénéficier d'une mutuelle gratuite pour le remboursement de leurs frais de santé.

Les dépenses de santé des "cmucistes" sont prises en charge à hauteur de 100 % des tarifs de la sécurité sociale. 
Aucun dépassement d'honoraires ne peut être facturé sauf en cas d'exigence particulière de la part du bénéficiaire.
En cas d'hospitalisation, le forfait journalier est pris en charge sans limitation de durée. 
De plus, la CMU-C inclut des forfaits de prise en charge pour les soins dentaires, les lunettes, les prothèses auditives, etc. [^1].

Cette population est spécifique en termes d'âge avec une surreprésentation des jeunes. 
Les cmucistes étant en moyenne très jeunes, on les trouve souvent moins malade,  mais à classe d'âge identique ils le sont souvent plus.

## Description des tables et variables d'intérêt
### Variables de la table des prestations ER\_PRS\_F

**BEN_CMU_TOP** : La variable BEN_CMU_TOP permet d'identifier les cmucistesau au moment des soins. 

Le top CMU-C est positionné à 1 lorsque le type de contrat cmu est égal à 89 (bénéficiaire de la CMU complémentaire), sinon il est positionné à zéro. 

Lorsque le patient est en ALD, le top CMU-C est forcé à 0 pour les prestations liquidées en rapport avec son ALD (celle-ci est prioritaire), et prend la valeur 1 pour les prestations liquidées non en rapport avec l'ALD.

::: warning Attention
La modalité 2 de `BEN_CMU_TOP` est codée par le régime agricole pour signaler des prestations en espèces et les prestations non individualisées. 
:::


**Ainsi, si l'on veut savoir si une prestation est exonérée au titre de la CMU-C, le ben_cmu_top suffit. Par contre, si l'on a besoin de recenser la population cmu-c, il faut utiliser la table IR_ORC_R (présentée ci-après).**

**BEN_CMU_ORG** : La CMU-C gérée par le régime général pour le compte de l'état est identifiable par le ben_cmu_top = 1 et le numéro d'organisme complémentaire ben_cmu_org = 075689893. 
Pour la CMU-C gérée par les organismes privés (mutuelles, assurances, sociétés de prévoyance), l'information est transmise si il y a télétransmission entre la caisse qui gère le régime obligatoire et l'organisme qui gère la CMU-C.

### Table des affiliations IR\_ORC\_R
**[IR\_ORC\_R](../tables/DCIR_DCIRS/IR_ORC_R.md)** : Table des affiliations à un organisme d'assurance maladie complémentaire 

Cette table recense les affiliations des bénéficiaires du régime général et des 12 organismes infogérés par ce régime [^2] sur la période du SNIIRAM (à partir du 1er janvier 2013 actuellement), que ces bénéficiaires soient consommants ou non.

Elle couvre tous les types de contrats complémentaires, dont la CMU complémentaire. La valeur 89 de la variable **ben_cta_typ**  correspond à la CMU complémentaire.

Cette table peut donc être utilisée pour recenser la population CMU complémentaire pendant la période du SNIIRAM (voir code ci-après). Tous les bénéficiaires de cette table figurent également dans le référentiel ir_ben_r, dès qu'un individu est éliminé de la table ir_ben_r, il l'est également de la table ir_orc_r car il n'est plus considéré comme affilié à la sécurité sociale.

## Exemple de code pour recenser les CMU-C en 2017 à l'aide de la table IR\_ORC\_R

### SQL ORACLE
```sql
PROC SQL;
    %connectora;
    CREATE TABLE orauser.cmuc as select * from connection to oracle (
        SELECT DISTINCT ben_idt_ano
        FROM ir_orc_r
        WHERE ben_cta_typ=89
        AND mll_cta_ds < to_date ('20180101','YYYYMMDD')
        AND (mll_cta_dsf > to_date('20170101','YYYYMMDD') OR mll_cta_dsf is null));
    disconnect from oracle;
QUIT;
```

### SQL SAS
```sas
PROC SQL;
    CREATE TABLE cmuc AS
    SELECT DISTINCT ben_idt_ano
    FROM oravue.ir_orc_r
    WHERE ben_cta_typ=89
    AND mll_cta_dsd < '01Jan2018:0:0:0'dt
    AND (mll_cta_dsf > '01Jan2017:0:0:0'dt OR mll_cta_dsf is null)
    ;
QUIT;
```

## Recommandations et précautions

Pour l’utilisation de la CMU-C comme indicateur de la précarité, il est nécessaire d’exclure les personnes âgées de 60 ans et plus dans les analyses. En effet, l’Allocation de solidarité aux personnes âgées (ASPA, ex : minmum vieillesse) se substitue généralement à la CMU-C à partir de 60 ans. 

Il ne faut pas essayer de retrouver les cmucistes en fonction de la base de remboursement. 
Avec la condition `abs(PRS_PAI_MNT) = abs(BSE_REM_BSE)` on peut en effet retrouver des prestations qui sont sans lien avec la CMU-C : les paires gratuites en optique, le dépistage, une exonération au titre d'une ALD, ainsi que tout autre motif d'exonération prioritaire par rapport à la CMU-C.

De plus, une partie des prestations CMU-C ne remplit pas ce critère. 
En effet, les cmucistes qui consultent un médecin hors résidence ou sans passer par le médecin traitant se voient pénaliser au même titre que les autres bénéficiaires de l'assurance maladie. 
De plus, en cas d'exigence particulière du bénéficiaire, des dépassements d'honoraire peuvent être facturés au cmuciste.

Lorsqu'une personne a été topée comme bénéficiaire de la CMU-C (ben_ cmu_top=1) une fois dans l'année, il est préférable de considérer cette personne comme cmuciste toute l'année. 
En effet, comme évoqué précédemment, lorsque le patient est en ALD, le top CMU-c est forcé à 0 pour les prestations liquidées en rapport avec son ALD (car celle-ci est prioritaire).

Néanmoins, pour recenser la population CMU complémentaire de manière exhaustive, la méthode la plus efficace consiste à utiliser la table IR_ORC_R.

## Références

::: tip Crédit
Le contenu original de cette fiche provient du document [2018-07-25_DREES-ARS_Cmu-c_MPL-2.0.docx](../files/DREES/2018-07-25_DREES-ARS_Cmu-c_MPL-2.0.docx) rédigé par Kristel JACQUIER & Céline LEROY.
:::

[^1]: Les cmucistes bénéficient également d'une dispense d'avance des frais

[^2]: La mutuelle générale LMG, la mutuelle générale de la police MGP, MFP service MFPS, la mutuelle nationale des hospitaliers MNH, Harmonie fonction publique HFP, la mutuelle des étudiants LMDE (depuis janvier 2017), la caisse d'assurance maladie des industries électriques et gazières CAMIEG, la mutuelle du ministère de l'intérieur Intériale, l'établissement national des invalides de la marine ENIM, la caisse nationale de sécurité sociale des mines CANSSM (depuis octobre 2016), la caisse de retraite et de prévoyance des clercs et employés de notaires CRPCEN, la caisse d'assurance vieillesse et maladie des cultes CAVIMAC.