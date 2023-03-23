# **Table LOCATION**
<!-- SPDX-License-Identifier: MPL-2.0 -->

### *Description*

La table LOCATION contient les informations sur la localisation physique
ou l'adresse des personnes et des sites de soins.

### *Commentaires généraux*

-   Il y a 3 types de localisation dans cette table :

    -   La localisation des **<u>personnes,</u>** repérée par la commune
        de résidence, représentée par le code commune INSEE à 5
        chiffres.

    -   La localisation des **<u>établissements</u>** et des
        **pharmacies** dans le DCIR , repérés par leur numéro FINESS

    -   La localisation géographique des **<u>établissements de soin
        dans le PMSI</u>**, repérés par leur numéro FINESS géographique
        le cas échéant

-   Les données de facturation des hôpitaux publics remontent à la fois
    dans le PMSI et dans le DCIR. Afin de conserver les données
    cliniques du PMSI pour les établissements privés et publics, les
    données des hôpitaux publics ont été retirées du DCIR. On les
    identifie dans la table **\_ER_ETE_F** grâce à leur catégorie,
    renseignée dans la variable *ete_cat_cod*, complétée avec la
    nomenclature IR_CET_V. (cf sous partie concernant le DCIR).

-   Pour établir les correspondances entre FINESS sur huit caractères,
    géographique et juridique et les caractéristiques des établissements
    (adresse, raison sociale), nous utilisons le [<u>référentiel
    Finess</u>](https://www.data.gouv.fr/fr/datasets/referentiel-finess-t-finess/#resources)
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

    -   *ej_rs* : raison sociale de l'entité juridique

    -   *rs* : raison sociale de l’entité géographique

-   Pour établir les correspondances entre les codes communes INSEE, les
    codes de départements et les codes régions, nous utilisons le
    fichier “[<u>Communes
    existantes</u>](https://www.insee.fr/fr/information/4316069)”
    disponible sur le site de l’INSEE. Il est appelé
    **correspondance_region_departement** dans la suite.

-   /!\\ Dans le SNDS (variable *ben_res_dpt*), le code du département
    de la haute Corse (2B) et la Corse du sud (2A) ne sont pas
    distinguées : les deux sont codées 209 contrairement aux codes
    INSEE. On choisit donc de ne pas faire cette distinction dans la
    transformation. Dans les fichiers de correspondance, les “A” et “B”
    dans les codes corses sont remplacés par des “0”.

### *Tables et variables utilisées dans le SNDS*

-   Fichier de correspondance **correspondance_region_departement**

    -   *com_code*

    -   *code_region*


-   Fichier de correspondance **correspondance_finess_codecom**

    -   *et_finess (finess_geographique)*

    -   *finess8*

    -   *adresse*

    -   *lib_acheminement*

    -   com_code

Table Patients:

-   Modèle intermédiaire **\_IR_BEN_R**

    -   *code_commune*

Tables du PMSI:

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 24%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><p><strong>T_MCOaaE</strong></p>
<ul>
<li><p><em>eta_num</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>T_HADaaE</strong></p>
<ul>
<li><p><em>eta_num</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>T_SSRaaE</strong></p>
<ul>
<li><p><em>eta_num</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>T_RIPaaE</strong></p>
<ul>
<li><p><em>eta_num_epmsi</em></p></li>
</ul></li>
</ul></td>
</tr>
<tr class="even">
<td><ul>
<li><p><strong>T_MCOaaUM</strong></p>
<ul>
<li><p><em>eta_num_geo</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>T_HADaaB</strong></p>
<ul>
<li><p><em>eta_num_geo</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>T_SSRaaB</strong></p>
<ul>
<li><p><em>eta_num_geo</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>T_RIPaaC</strong></p>
<ul>
<li><p><em>eta_num_two</em></p></li>
</ul></li>
</ul></td>
</tr>
</tbody>
</table>

Tables du DCIR:

<table>
<colgroup>
<col style="width: 55%" />
<col style="width: 44%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><p><strong>Modèle intermédiaire de ER_ETE_F</strong></p>
<ul>
<li><p><em>etb_exe_fin</em></p></li>
<li><p><em>etb_cat_cod</em></p></li>
</ul></li>
</ul></td>
<td><ul>
<li><p><strong>Nomenclature IR_CET_V</strong></p>
<ul>
<li><p><em>ete_cat_cod</em></p></li>
<li><p><em>etb_cat_rg1</em></p></li>
</ul></li>
</ul></td>
</tr>
</tbody>
</table>

### *Variables du format OMOP-CDM remplies* 

|                       |             |                                                                                                                                       |                  |                   |                               |
|-----------|--------|-------------------------------|------|--------|---------|
| **Variable**          | **Type**    | **Description**                                                                                                                       | **Clé primaire** | **Clé étrangère** | **Table de la clé étrangère** |
| location_id\*         | integer     | Identifiant unique pour chaque lieu géographique.                                                                                     | Oui              | Non               |                               |
| address_1             | varchar(50) | Le champ d'adresse 1, généralement utilisé pour le nom de la rue, tel qu'il apparaît dans les données sources.                        | Non              | Non               |                               |
| city                  | varchar(50) | Nom de la ville tel qu'il apparaît dans les données sources.                                                                          | Non              | Non               |                               |
| state                 | varchar(2)  | Nom de l’état tel qu’il apparaît dans les données source                                                                              | Non              | Non               |                               |
| zip                   | varchar(9)  | Le code postal ou zip dans les règles officielles d’OMOP. Ici on a choisi de considérer le code commune                               | Non              | Non               |                               |
| county                | varchar(20) |                                                                                                                                       | Non              | Non               |                               |
| location_source_value | varchar(50) | Les informations textuelles qui sont utilisées pour identifier de manière unique le lieu tel qu'il apparaît dans les données sources. | Non              | Non               |                               |

## **Patients**

La localisation choisie est le code commune INSEE à 5 chiffres. Ce code
n’est pas indiqué tel quel dans le SNDS pour les patients. Il faut la
reconstituer en suivant [cette
méthode](../../snds/fiches/localisation_geographique_beneficiaires.md)
à partir des variables *ben_res_com, ben_res_dpt* et *org_aff_ben.* La
notion d’état (*state*) n’existant pas en France, nous avons choisi de
renseigner la région.


<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 39%" />
<col style="width: 22%" />
<col style="width: 21%" />
</colgroup>
<tbody>
<tr class="odd">
<td rowspan="2">
<p><strong>Variable</strong></p>
</td>
<td rowspan="2">
<p><strong>Règles</strong></p>
</td>
<td colspan="2">
<p><strong>Jointure</strong></p>
</td>
</tr>
<tr class="even">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="odd">
<td><strong>location_id*</strong></td>
<td>hash (location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>address_1</strong></td>
<td>Mettre Null</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>city</strong></td>
<td>Mettre Null</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>state</strong></td>
<td><em>code_region</em> de
<strong>correspondance_region_departement</strong></td>
<td><p><strong>_IR_BEN_R</strong></p>
<p><em>code_commune</em></p></td>
<td><p><strong>correspondance_region_departement</strong></p>
<p><em>com_code</em></p></td>
</tr>
<tr class="odd">
<td><strong>zip</strong></td>
<td><em>code_commune</em> de <strong>_IR_BEN_R</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>county</strong></td>
<td>2 premiers chiffres du code commune (variable zip)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>location_source_value</strong></td>
<td><em>code_commune</em> de <strong>_IR_BEN_R</strong></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>


## **Établissements de soin - PMSI**

### *Commentaires généraux*

Les localisations concernent les établissements géographiques et non les
entités juridiques.


<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 42%" />
<col style="width: 17%" />
<col style="width: 24%" />
</colgroup>
<tbody>
<tr class="odd">
<td rowspan="2">
<p><strong>Variable</strong></p>
</td>
<td rowspan="2">
<p><strong>Règles</strong></p>
</td>
<td colspan="2">
<p><strong>Jointure</strong></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Gauche</strong></p>
</td>
<td>
<p><strong>Droite</strong></p>
</td>
</tr>
<tr class="odd">
<td><strong>location_id*</strong></td>
<td>hash(location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>address_1</strong></td>
<td><em>adresse</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p>correspondance_finess_codecom</p>
<p><em>et_finess</em></p></td>
</tr>
<tr class="odd">
<td><strong>city</strong></td>
<td><em>lib_acheminement</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p>correspondance_finess_codecom</p>
<p><em>et_finess</em></p></td>
</tr>
<tr class="even">
<td><strong>state</strong></td>
<td><em>code_region</em> de
<strong>correspondance_region_departement</strong></td>
<td>location_source_value</td>
<td><p>correspondance_region_</p>
<p>departement</p>
<p><em>dpt_code</em></p></td>
</tr>
<tr class="odd">
<td><strong>zip</strong></td>
<td><em>com_code</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p>correspondance_finess_codecom</p>
<p><em>et_finess</em></p></td>
</tr>
<tr class="even">
<td><strong>county</strong></td>
<td>2 premiers chiffres de zip</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="4"><strong>location_source_value</strong></td>
<td>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_MCOaaUM</strong></td>
<td><p><strong>T_MCOaaE</strong></p>
<p><em>eta_num</em></p></td>
<td><p><strong>T_MCOaaUM</strong></p>
<p><em>eta_num</em></p></td>
</tr>
<tr class="even">
<td>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_SSRaaB</strong></td>
<td><p><strong>T_SSRaaE</strong></p>
<p><em>eta_num</em></p></td>
<td><p><strong>T_SSRaaB</strong></p>
<p><em>eta_num</em></p></td>
</tr>
<tr class="odd">
<td>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_HADaaB</strong></td>
<td><p><strong>T_HADaaE</strong></p>
<p><em>eta_num</em></p></td>
<td><p><strong>T_HADaaB</strong></p>
<p><em>eta_num_epmsi</em></p></td>
</tr>
<tr class="even">
<td>COALESCE(<em>eta_num_two, eta_num)</em> de
<strong>T_RIPaaC</strong></td>
<td><p><strong>T_RIPaaE</strong></p>
<p><em>eta_num</em></p></td>
<td><p><strong>T_RIPaaC</strong></p>
<p><em>eta_num_epmsi</em></p></td>
</tr>
</tbody>
</table>


## **Établissements de soin et pharmacies - DCIR** 

-   Certaines données sont présentes à la fois dans le PMSI et dans le
    DCIR. Il s’agit des données concernant les séjours hospitaliers.
    Pour éviter un recouvrement entre ces données, on retire du DCIR les
    établissements dont les données sont dans le PMSI.

On les identifie grâce à leur catégorie:

-   Joindre \_**ER_ETE_F** à gauche vers la nomenclature **IR_CET_V**
    sur *ete_cat_cod = etb_cat_cod*

-   Garder les établissements pour lesquels on a :

    -   ( *etb_cat_rg1* \> 1203 ET *ete_cat_cod* ≠ 114 ) OU (
        *ete_cat_cod* ∊ \[362 ; 422 \] )

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 39%" />
<col style="width: 20%" />
<col style="width: 24%" />
</colgroup>
<tbody>
<tr class="odd">
<td rowspan="2">
<p><strong>Variable</strong></p>
</td>
<td rowspan="2">
<p><strong>Règles</strong></p>
</td>
<td colspan="2">
<p><strong>Jointure</strong></p>
</td>
</tr>
<tr class="even">
<td>
<p><strong>Gauche</strong></p>
</td>
<td>
<p><strong>Droite</strong></p>
</td>
</tr>
<tr class="odd">
<td><strong>location_id*</strong></td>
<td>hash(location_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>address_1</strong></td>
<td><em>adresse</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="odd">
<td><strong>city</strong></td>
<td><em>lib_acheminement</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="even">
<td><strong>state</strong></td>
<td><em>code_region</em> de
<strong>correspondance_region_departement</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_region_departement</strong></p>
<p><em>com_code</em></p></td>
</tr>
<tr class="odd">
<td><strong>zip</strong></td>
<td><em>com_code</em> de
<strong>correspondance_finess_codecom</strong></td>
<td>location_source_value</td>
<td><p><strong>correspondance_finess_codecom</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="even">
<td><strong>county</strong></td>
<td>2 premiers chiffres de zip</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
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
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::

