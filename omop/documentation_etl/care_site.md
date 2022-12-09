# **Table CARE_SITE**
<!-- SPDX-License-Identifier: MPL-2.0 -->

### *Description*

 La table CARE_SITE contient une liste des unités institutionnelles
 (physiques ou organisationnelles) identifiées de manière unique où la
 prestation de soins de santé est pratiquée (bureaux, salles, hôpitaux,
 cliniques, etc.).

### *Commentaires généraux*

-   Il y a trois types de sites de soin dans cette table :

    -   **<u>Les établissements</u>** et **<u>les pharmacies</u>** dans
       le DCIR (finess8), ces éléments sont repris de la table
       LOCATION.

    -   La localisation géographique des **<u>établissements de soin
       dans le PMSI</u>** , ces éléments sont repris de la table
       LOCATION PMSI

    -   **<u>Les entités juridiques dans le PMSI</u>** (*eta_num* des
       tables E).

-   On reprend le fichier **correspondance_finess_codecom** utilisé pour
   la table LOCATION

### *Tables et variables utilisées dans le SNDS*

-   Fichier de correspondance **correspondance_finess_codecom**

    -   *rs* (raison sociale correspondant à l’et_finess)

    -   *et_finess* (finess géographique)

    -   *ej_finess* (finess juridique)

    -   *finess8* (finess sur 8 chiffres : finess géographique si
       existant, sinon finess juridique)

**Tables PMSI:**

-   **T_MCOaaE**

    -   *eta_num*

-   **T_HADaaE**

    -   *eta_num_epmsi*

-   **C_MCO_E\_FT**

    -   *eta_num*

-   **T_SSRaaE**

-   **T_RIPaaE**

    -   *eta_num*

**Tables DCIR:**

-   **ER_PHA_F**

    -   *etb_pre_fin*

-   **ER_ETE_F**

    -   *etb_exe_fin*

### *Variables du format OMOP remplies*

| **Variable**               | **Description**                                                                                                                             | **Type**     | **Clé primaire** | **Clé étrangère** | **Table de la clé étrangère** |
|-------------|--------------------------------|--------|------|-------|---------|
| **care_site_id\***         |                                                                                                                                             | integer      | Oui              | Non               |                               |
| **care_site_name**         | Nom du centre de soin tel qu’il apparaît dans les données source.                                                                           | varchar(255) | Non              | Non               |                               |
| **location_id**            | Champ location_id de la table LOCATION qui représente la localisation physique d’un centre de soin.                                         | integer      | Non              | Oui               | LOCATION                      |
| **care_site_source_value** | Identifiant d’un centre de soin tel qu’il apparaît dans les données source. Ce peut être un identifiant différent du nom du centre de soin. | varchar(50)  | Non              | Non               |                               |

## **CARE_SITE – PMSI**

La partie PMSI de la table CARE_SITE contient les établissements de soin
déjà identifiés dans LOCATION, ainsi que les entités juridiques.

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 42%" />
<col style="width: 18%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variables</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
</tr>
<tr class="odd">
<th>
<p><strong>Gauche</strong></p>
</th>
<th>
<p><strong>Droite</strong></p>
</th>
</tr>
<tr class="odd">
<th><strong>care_site_id*</strong></th>
<th>hash(care_site_source_value)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>care_site_name</strong></th>
<th><p>Établissements de soin :</p>
<p><em>rs</em> (raison sociale correspondant au finess géographique) de
<strong>correspondance_finess_comcode</strong></p></th>
<th><p>Finess géographiques &lt;--&gt;</p>
<p>(care_site_source_value)</p></th>
<th><p><strong>correspondance_finess_comcode</strong></p>
<p><em>Si rempli : et_finess</em></p>
<p><em>Sinon : ej_finess</em></p></th>
</tr>
<tr class="odd">
<th><p>Entités juridiques :</p>
<p><em>ej_rs</em> (raison sociale) de
<strong>correspondance_finess_comcode</strong></p></th>
<th>care_site_source_value</th>
<th><p><strong>correspondance_finess_comcode</strong></p>
<p><em>ej_finess</em></p></th>
</tr>
<tr class="odd">
<th><strong>location_id</strong></th>
<th>location_id de la table LOCATION (pour les entités juridiques,
location_id est NULL car elles ne sont pas répertoriées dans
LOCATION)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th rowspan="2"><strong>care_site_source_value</strong></th>
<th><p>Établissements de soin :</p>
<p>location_source_value de la table LOCATION</p></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><p>Entités juridiques :</p>
<p><em>eta_num</em> des tables <strong>t_mcoaaE, t_ssraaE, t_ripaaE,
t_hadaaE, c_mco_E_ft</strong> qui n’ont pas déjà été pris en compte dans
la table LOCATION</p></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **CARE_SITE – DCIR – Établissements dont les données ne remontent pas dans le PMSI**

-   Pour éviter un recouvrement des données du PMSI avec le DCIR, on
   sélectionne les établissements du DCIR à conserver selon leur
   catégorie : on garde les établissements pour lesquels
   : (*ete_cat_cod* ≠ 114 ET *etb_cat_rg1* \> 1203) (table
   **ER_ETE_F** et nomenclature **IR_CET_V**) OU (*ete_cat_cod* ∊
   (362, 442)).

-   On travaille sur les établissements privés commerciaux, c’est-à-dire
   ceux qui ont *etb_pre_fin* avec un numéro finess valide.

### *Règles de transformation*

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 39%" />
<col style="width: 20%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2">
<p><strong>Variables</strong></p>
</th>
<th rowspan="2">
<p><strong>Règles</strong></p>
</th>
<th colspan="2">
<p><strong>Jointure</strong></p>
</th>
</tr>
<tr class="odd">
<th>
<p><strong>Gauche</strong></p>
</th>
<th>
<p><strong>Droite</strong></p>
</th>
</tr>
<tr class="odd">
<th><strong>care_site_id*</strong></th>
<th>hash(care_site_source_value)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>care_site_name</strong></th>
<th><em>rs</em> (raison sociale) de
<strong>correspondance_finess_comcode</strong></th>
<th>care_site_source_value</th>
<th><p><strong>correspondance_finess_comcode</strong></p>
<p><em>finess8</em></p></th>
</tr>
<tr class="odd">
<th><strong>location_id</strong></th>
<th>location_id de LOCATION</th>
<th>care_site_source_value</th>
<th><p>LOCATION</p>
<p>location_source_value</p></th>
</tr>
<tr class="odd">
<th><strong>care_site_source_value</strong></th>
<th><p>location_source_value de la table LOCATION :</p>
<ul>
<li>
<p>Etablissements de soin : <em>etb_exe_fin</em> de
<strong>ER_ETE_F</strong></p>
</li>
<li>
<p>Pharmacies : <em>etb_pre_fin</em> de <strong>ER_PHA_F</strong></p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
