# Table PROVIDER
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

La table PROVIDER contient une liste de prestataires de soins de santé
identifiés de manière unique. Il s'agit de personnes qui fournissent des
soins de santé pratiqués aux patients, comme les médecins, les
infirmières, les sages-femmes, les kinésithérapeutes, etc.

De nombreuses données sources ne distinguent pas les prestataires
individuels et institutionnels. La table PROVIDER contient les
prestataires individuels. Si la source, au lieu d'identifier les
prestataires individuels de manière unique, ne fournit que des
informations limitées, comme des enregistrements de prestataires
spécialisés, génériques ou "regroupés", la table PROVIDER en donne la
liste.

## Commentaires généraux

-   Le SNDS contient le numéro du professionnel exécutant, mais aucune
   information qui corresponde à ce numéro (nom, prénom, spécialité,
   etc). La table PROVIDER sert donc ici uniquement à répertorier les
   spécialités des prestataires de santé.

-   Dans la table PROVIDER, un professionnel de santé est identifié par
   la concaténation des variables *pfs_spe_cod* et *pfs_act_nat.*Un
   seul sur les deux étant rempli dans la table ER_PRS_F, on aura
   soit ‘0\_*ps_act_nat’*, soit ‘*ps_spe_cod*\_0’.

-   Les spécialités médicales ont été alignées vers les concepts
   standards d’OMOP-CDM associés.

## Tables et variables utilisées dans le SNDS

-   **Nomenclature IR_SPE_V**

    -   *pfs_spe_cod*

-   **Nomenclature IR_ACT_V**

    -   *pfs_act_nat*

-   **Fichier de correspondance spécialités ↔ OMOP**

    -   *conceptId*

    -   *sourceCode*

### *Variables du format OMOP-CDM remplies*


| **Variable**               | **Règles**                                                                      | **Type**    | **Clé primaire** | **Clé étrangère** | **Table de la clé étrangère** |
|-------------|---------------------------------|-------|------|-------|--------|
| **provider_id\***          | Identifiant unique du professionnel de santé.                                   | integer     | Oui              | Non               |                               |
| **specialty_concept_id**   | Concept standard codant la spécialité du professionnel de santé.                | integer     | Non              | Oui               | CONCEPT                       |
| **provider_source_value**  | Identifiant du professionnel de santé dans les données source.                  | varchar(50) | Non              | Non               |                               |
| **specialty_source_value** | Concept codant la spécialité du professionnel de santé dans les données source. | varchar(50) | Non              | Non               |                               |

## Règles de transformation

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 39%" />
<col style="width: 21%" />
<col style="width: 21%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variables</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
</tr>
<tr class="odd">
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
</tr>
<tr class="odd">
<th><strong>provider_id*</strong></th>
<th>hash(provider_source_value)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>specialty_source_value</strong></th>
<th><ul>
<li>
<p><em>psf_spe_cod</em> de <strong>IR_SPE_V</strong></p>
</li>
<li>
<p><em>psf_act_nat</em> de <strong>IR_ACT_NAT</strong></p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>specialty_concept_id</strong></th>
<th><ul>
<li>
<p><em>conceptId</em> du <strong>fichier de correspondance</strong></p>
</li>
</ul></th>
<th><p><strong>IR_SPE_V</strong></p>
<p><em>pfs_spe_cod</em></p>
<p>UNION</p>
<p><strong>IR_ACT_V</strong></p>
<p><em>pfs_act_nat</em></p></th>
<th><p><strong>fichier de correspondance</strong></p>
<p><em>sourceCode</em></p>
<p>UNION</p>
<p><strong>fichier de correspondance</strong></p>
<p><em>sourceCode</em></p></th>
</tr>
<tr class="odd">
<th><strong>provider_source_value</strong></th>
<th><ul>
<li>
<p><em>pfs_spe_cod ||</em> ‘_0’ (<strong>IR_SPE_V)</strong></p>
</li>
<li>
<p><em>‘0_’ || pfs_act_nat</em> (<strong>IR_ACT_V)</strong></p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
