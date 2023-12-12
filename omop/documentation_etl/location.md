# Table LOCATION
<!-- SPDX-License-Identifier: MPL-2.0 -->

### Description

La table LOCATION contient les informations sur la localisation physique
ou l\'adresse des personnes et des sites de soins.

### Commentaires généraux

-   Il y a 4 types de localisation dans cette table :

    -   La localisation des **<u>personnes,</u>** repérée par la
        commune de résidence, représentée par le code commune INSEE à 5
        chiffres.

    -   La localisation des **<u>établissements</u>** et des
        **<u>pharmacies</u>** dans le DCIR , repérés par leur
        numéro FINESS

    -   La localisation géographique des **<u>établissements de soin dans
        le PMSI</u>**, repérés par leur numéro FINESS
        géographique le cas échéant

    -   Les **<u>départements français</u>** (qui identifient à
        une échelle plus vaste les entités juridiques identifiées dans
        le PMSI)

-   Les données de facturation des hôpitaux privés, ainsi que les ACE
    des hôpitaux publics remontent à la fois dans le PMSI et dans le
    DCIR. Afin de conserver les données cliniques du PMSI pour les
    établissements privés et publics, les données des hôpitaux privés et
    celles des ACE des hôpitaux publics ont été retirées du DCIR. On les
    identifie dans la table **\_ER_ETE_F** grâce à leur catégorie,
    renseignée dans la variable *ete_cat_cod*, complétée avec la
    nomenclature IR_CET_V. (cf sous partie concernant le DCIR).

-   Pour établir les correspondances entre FINESS sur huit caractères,
    géographique et juridique et les caractéristiques des établissements
    (adresse, raison sociale), nous utilisons le [référentiel
    Finess](https://www.data.gouv.fr/fr/datasets/referentiel-finess-t-finess/#resources)
    disponible sur data.gouv. Ce fichier sera appelé
    **correspondance_finess_codecom** dans les suite. Il contient
    notamment :
    -   *ej_finess* : finess juridique, équivalent de *eta_num* dans le
        SNDS - PMSI
    -   *et_finess* : finess géographique, équivalent de *eta_num_geo*
        dans le SNDS -PMSI
    -   *finess8* : finess juridique sur 8 chiffres comme renseigné dans
        le SNDS - DCIR (*etb_pre_fin, etb_exe_fin*)
    -   *code_postal*
    -   *com_code* : code commune
    -   *lib_acheminement* : équivalent ville
    -   *adresse*
    -   *ej_rs* : raison sociale de l\'entité juridique
    -   *rs* : raison sociale de l'entité géographique

-   Pour établir les correspondances entre les codes communes INSEE, les
    codes de départements et les codes régions, nous utilisons le
    fichier
    "[communes-2023](https://www.insee.fr/fr/information/4316069)"
    disponible sur le site de l'INSEE dans la section 'Communes'. De
    même, le fichier "departements-2023" (section 'Départements')
    procure la correspondance entre un code département, son libellé et
    le code de la région à laquelle il appartient.

-   /!\\ Dans le SNDS (variable *ben_res_dpt*), le code du département
    de la haute Corse (2B) et la Corse du sud (2A) ne sont pas
    distinguées : les deux sont codées 209 contrairement aux codes
    INSEE. On choisit donc de ne pas faire cette distinction dans la
    transformation. Dans les fichiers de correspondance, les "A" et "B"
    dans les codes corses sont remplacés par des "0".

### Tables et variables utilisées dans le SND
#### Tables et variables communes aux parties DCIR et PMSI

-   Fichier de correspondance [**communes-2023**](/files/v_commune_2023.csv)
    -   *Reg*
    -   *Com*
-   Fichier de correspondance **departements-2023**
    -   *Reg*
    -   *Dep*
-   Fichier de correspondance **correspondance_finess_codecom**
    -   *et_finess (finess_geographique)*
    -   *finess8*
    -   *adresse*
    -   *lib_acheminement*
    -   com_code

#### Tables et variables spécifiques pour les adresses des patients

-   Modèle intermédiaire **\_IR_BEN_R**
    -   *code_commune*

### Variables du format OMOP-CDM remplies 

<table style="width:100%;">
<colgroup>
<col style="width: 15%" />
<col style="width: 10%" />
<col style="width: 46%" />
<col style="width: 6%" />
<col style="width: 9%" />
<col style="width: 11%" />
</colgroup>
<tdead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Type</strong></td>
<td><strong>Description</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td>location_id*</td>
<td>integer</td>
<td>Identifiant unique pour chaque lieu géographique.</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td>address_1</td>
<td>varchar(50)</td>
<td>Le champ d'adresse 1, généralement utilisé pour le nom de la rue,
tel qu'il apparaît dans les données sources.</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td>city</td>
<td>varchar(50)</td>
<td>Nom de la ville tel qu'il apparaît dans les données sources.</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td>state</td>
<td>varchar(2)</td>
<td>Nom de l’état tel qu’il apparaît dans les données source</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td>zip</td>
<td>varchar(9)</td>
<td>Le code postal ou zip dans les règles officielles d’OMOP. Ici on a
choisi de considérer le code commune</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td>county</td>
<td>varchar(20)</td>
<td></td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td>location_source_value</td>
<td>varchar(50)</td>
<td>Les informations textuelles qui sont utilisées pour identifier de
manière unique le lieu tel qu'il apparaît dans les données sources.</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

## Patients

La localisation choisie est le code commune INSEE à 5 chiffres. Ce code
n'est pas indiqué tel quel dans le SNDS pour les patients. Il faut la
reconstituer en suivant [cette
méthode](../../snds/fiches/localisation_geographique_beneficiaires.md#construction-de-la-localisation-dans-le-sniiram)
à partir des variables *ben_res_com, ben_res_dpt* et *org_aff_ben.* La
notion d'état (*state*) n'existant pas en France, nous avons choisi de
renseigner la région.

### Règles de Transformation

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 39%" />
<col style="width: 22%" />
<col style="width: 21%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variable</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>location_id*</strong></td>
<td>hash (location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>address_1</strong></td>
<td>Mettre Null</td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>city</strong></td>
<td>Mettre Null</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>state</strong></td>
<td><em>Reg</em> de <strong>communes-2023</strong></td>
<td><p><strong>_IR_BEN_R</strong></p>
<p><em>code_commune</em></p></td>
<td><p><strong>communes-2023</strong></p>
<p><em>Com</em></p></td>
</tr>
<tr class="header">
<td><strong>zip</strong></td>
<td><em>code_commune</em> de <strong>_IR_BEN_R</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>county</strong></td>
<td>2 premiers chiffres du code commune (variable zip)</td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>location_source_value</strong></td>
<td><em>code_commune</em> de <strong>_IR_BEN_R</strong></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>


## Établissements de soin - PMSI

### Commentaires généraux

-   La localisation des établissements géographiques est leur adresse
    physique précise (précision : numéro de rue)

### Tables et variables du SNDS utilisées

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tdead>
<tr class="header">
<td><p><strong>T_MCOaaUM</strong></p>
<ul>
<li>eta_num_geo</li>
</ul></td>
<td><p><strong>T_HADaaB</strong></p>
<ul>
<li>eta_num_geo</li>
<li>eta_num</li>
</ul></td>
<td><p><strong>T_SSRaaB</strong></p>
<ul>
<li>eta_num_geo</li>
<li>eta_num</li>
</ul></td>
<td><p><strong>T_RIPaaC</strong></p>
<ul>
<li>eta_num_two</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 38%" />
<col style="width: 20%" />
<col style="width: 24%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variable</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td>
<p><strong>Gauche</strong></p>
</td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>location_id*</strong></td>
<td>hash(location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>address_1</strong></td>
<td><em>adresse</em> de
<strong>correspondance_finess_codecom</strong></td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>et_finess</em></p></td>
</tr>
<tr class="header">
<td><strong>city</strong></td>
<td><em>lib_acheminement</em> de
<strong>correspondance_finess_codecom</strong></td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>et_finess</em></p></td>
</tr>
<tr class="odd">
<td><strong>state</strong></td>
<td><em>Reg</em> de <strong>communes-2023</strong></td>
<td>STR(location_source_value, 1,2)</td>
<td><p><strong>communes-2023</strong></p>
<p><em>Dep</em></p></td>
</tr>
<tr class="header">
<td><strong>zip</strong></td>
<td><em>com_code</em> de
<strong>correspondance_finess_codecom</strong></td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
<td><p>correspondance_finess_codecom</p>
<p><em>et_finess</em></p></td>
</tr>
<tr class="odd">
<td><strong>county</strong></td>
<td>2 premiers chiffres de zip</td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="4"><strong>location_source_value</strong></td>
<td>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_MCOaaUM</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_SSRaaB</strong></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td>COALESCE(<em>eta_num_geo, eta_num_epmsi)</em> de
<strong>T_HADaaB</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>COALESCE(<em>eta_num_two, eta_num)</em> de
<strong>T_RIPaaC</strong></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

## Départements

-   La localisation des entités juridiques est définie comme le
    département français dans lequel elles se situent.

### Règles de transformation

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 42%" />
<col style="width: 17%" />
<col style="width: 24%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variable</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td>
<p><strong>Gauche</strong></p>
</td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>location_id*</strong></td>
<td>hash(location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>address_1</strong></td>
<td><em>libelle</em> de <strong>departements-2023</strong></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>city</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>state</strong></td>
<td><em>Reg</em> de <strong>departements-2023</strong></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>zip</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>county</strong></td>
<td><em>Dep</em> de <strong>departements-2023</strong></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td rowspan="4"><strong>location_source_value</strong></td>
<td rowspan="4"><em>Dep</em> de <strong>departements-2023</strong></td>
<td rowspan="4"></td>
<td rowspan="4"></td>
</tr>
<tr class="odd">
</tr>
<tr class="header">
</tr>
<tr class="odd">
</tr>
</tdead>
<tbody>
</tbody>
</table>

## Établissements de soin et pharmacies - DCIR 

### Commentaires généraux

-   Les données des séjours hospitaliers remontent à la fois dans le
    DCIR et le PMSI. (Données des hôpitaux privés et les ACE des
    hôpitaux publics). Pour éviter un recouvrement entre ces données, on
    retire du DCIR les établissements dont les données sont dans le
    PMSI.

On les identifie grâce à leur catégorie:

-   Joindre \_**ER_ETE_F** à gauche vers la nomenclature **IR_CET_V**
    sur *ete_cat_cod = etb_cat_cod*

-   Garder les établissements pour lesquels on a :

    -   ( *etb_cat_rg1* \> 1203 ET *ete_cat_cod* ≠ 114 ) OU (
        *ete_cat_cod* ∊ (362 ; 422 ) )

### Tables et variables utilisées dans le SNDS

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 44%" />
</colgroup>
<tdead>
<tr class="header">
<td><p><strong>Modèle intermédiaire de ER_ETE_F</strong></p>
<ul>
<li>etb_exe_fin</li>
<li>etb_cat_cod</li>
</ul></td>
<td><p><strong>Nomenclature IR_CET_V</strong></p>
<ul>
<li>ete_cat_cod</li>
<li>etb_cat_rg1</li>
</ul></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>

### Règles de transformation

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 39%" />
<col style="width: 20%" />
<col style="width: 24%" />
</colgroup>
<tdead>
<tr class="header">
<td rowspan="2"><strong>Variable</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>location_id*</strong></td>
<td>hash(location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>address_1</strong></td>
<td><em>adresse</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="header">
<td><strong>city</strong></td>
<td><em>lib_acheminement</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="odd">
<td><strong>state</strong></td>
<td><em>Reg</em> de <strong>communes-2023</strong></td>
<td>location_source_value</td>
<td><p><strong>communes-2023</strong></p>
<p><em>Com</em></p></td>
</tr>
<tr class="header">
<td><strong>zip</strong></td>
<td><em>com_code</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="odd">
<td><strong>county</strong></td>
<td>2 premiers chiffres de zip</td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>location_source_value</strong></td>
<td><ul>
<li><p>Etablissements de <strong>ER_ETE_F</strong> :
<em>etb_exe_fin</em></p></li>
<li><p>Pharmacies de <strong>ER_PHA_F</strong> :
<em>etb_pre_fin</em></p></li>
</ul></td>
<td></td>
<td></td>
</tr>
</tdead>
<tbody>
</tbody>
</table>
