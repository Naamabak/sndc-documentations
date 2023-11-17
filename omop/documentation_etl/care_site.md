# Table CARE_SITE
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

La table CARE_SITE contient une liste des unités institutionnelles
(physiques ou organisationnelles) identifiées de manière unique où la
prestation de soins de santé est pratiquée (bureaux, salles, hôpitaux,
cliniques, etc.).

## Commentaires généraux

-   Il y a quatre types de sites de soin dans cette table :

    -   **<u>Les établissements</u>** et **<u>les
        pharmacies</u>** dans le DCIR (finess8), ces éléments
        sont repris de la table LOCATION.

    -   **<u>Les établissements de soin dans le PMSI</u>** , ces
        éléments sont repris de la table LOCATION PMSI.

    -   **<u>Les entités juridiques dans le PMSI</u>** (*eta_num*
        des tables E).

    -   **<u>Les unités médicales du PMSI :</u>**

        -   **Pour le MCO** : une unité médicale est identifiée par son
            type et l'établissement de soin auquel elle appartient

        -   **Pour le SSR** : une unité médicale est identifiée
            **uniquement** par son type

-   On reprend le fichier **correspondance_finess_codecom** utilisé pour
    la table LOCATION

## Tables et variables utilisées dans le SNDS

-   Fichier de correspondance **correspondance_finess_codecom**
    -   *rs* (raison sociale correspondant à l'et_finess)
    -   *et_finess* (finess géographique)
    -   *ej_finess* (finess juridique)
    -   *finess8* (finess sur 8 chiffres : finess géographique si
        existant, sinon finess juridique)

## Tables et variables utilisées dans le modèle OMOP

**LOCATION**
-   location_source_value
-   location_id

## Variables du format OMOP remplies

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 46%" />
<col style="width: 9%" />
<col style="width: 7%" />
<col style="width: 8%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Description</strong></td>
<td><strong>Type</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td><strong>care_site_id*</strong></td>
<td></td>
<td>integer</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>care_site_name</strong></td>
<td>Nom du centre de soin tel qu’il apparaît dans les données
source.</td>
<td>varchar(255)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="odd">
<td><strong>location_id</strong></td>
<td>Champ location_id de la table LOCATION qui représente la
localisation physique d’un centre de soin.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>LOCATION</td>
</tr>
<tr class="header">
<td><strong>care_site_source_value</strong></td>
<td>Identifiant d’un centre de soin tel qu’il apparaît dans les données
source. Ce peut être un identifiant différent du nom du centre de
soin.</td>
<td>varchar(50)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## CARE_SITE -- PMSI 

La partie PMSI de la table CARE_SITE contient les établissements de soin
déjà identifiés dans LOCATION, les entités juridiques ainsi que les
unités médicales pour les champs du SSR et du MCO.

### Tables et variables utilisées dans le SNDS

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 15%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr class="header">
<td><p><strong>T_MCOaaUM</strong></p>
<ul>
<li>eta_num</li>
<li>eta_num_geo</li>
</ul></td>
<td><p><strong>T_HADaaB</strong></p>
<ul>
<li>eta_num_epmsi</li>
</ul></td>
<td><p><strong>T_SSRaaB</strong></p>
<ul>
<li>eta_num_geo</li>
</ul></td>
<td><p><strong>T_RIPaaC</strong></p>
<ul>
<li>eta_num</li>
</ul></td>
<td><p><strong>Liste des unités médicales du SSR
nomenclature_uf</strong></p>
<ul>
<li>type_um_pmsi</li>
<li>type_autorisation</li>
</ul></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Établissements de soin et entités juridiques - Règles de transformation

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 41%" />
<col style="width: 19%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>care_site_id*</strong></td>
<td>hash(care_site_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>care_site_name</strong></td>
<td><p><u>Établissements de soin :</u></p>
<p><em>rs</em> (raison sociale correspondant au finess géographique) de
<strong>correspondance_finess_comcode</strong></p></td>
<td><p>Finess géographiques ↔︎</p>
<p>(care_site_source_value)</p></td>
<td><p><strong>correspondance_finess_comcode</strong></p>
<p><em>Si rempli : et_finess</em></p>
<p><em>Sinon : ej_finess</em></p></td>
</tr>
<tr class="header">
<td><p><u>Entités juridiques :</u></p>
<p><em>ej_rs</em> (raison sociale) de
<strong>correspondance_finess_comcode</strong></p></td>
<td>care_site_source_value</td>
<td><p><strong>correspondance_finess_comcode</strong></p>
<p><em>ej_finess</em></p></td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>location_id</strong></td>
<td><p><u>Etablissements de soin:</u> <em>(La localisation d’un
établissement de soin est l’adresse physique de
l’établissement)</em></p>
<p>location_id de la table LOCATION</p></td>
<td>care_site_source_value</td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
</tr>
<tr class="header">
<td><p><u>Entités juridiques:</u> <em>(La localisation d’une entité
juridique est le département)</em></p>
<p>location_id de la table LOCATION</p></td>
<td><p><em>SUBSTR(</em>care_site_source_value<em>, 1, 2)</em></p>
<p><em>(Remarque : Les deux premiers chiffres du finess constituent le
code du département)</em></p></td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>care_site_source_value</strong></td>
<td><p><u>Établissements de soin :</u></p>
<p>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_MCOaaUM</strong></p>
<p>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_SSRaaB</strong></p>
<p>COALESCE(<em>eta_num_geo, eta_num)</em> de
<strong>T_HADaaB</strong></p>
<p>COALESCE(<em>eta_num_two, eta_num)</em> de
<strong>T_RIPaaC</strong></p></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><p><u>Entités juridiques :</u></p>
<ul>
<li><p>Tables <strong>T_MCOaaB, T_SSRaaB :</strong>
<em>eta_num</em></p></li>
<li><p>Tables <strong>T_HADaaB :</strong>
<em>eta_num_epmsi</em></p></li>
</ul>
<p>qui n’ont pas déjà été pris en compte dans la table LOCATION</p></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Unités médicales - Règles de transformation

Les passages en unité médicale sont renseignés dans les tables
**T_MCOaaUM** et **T_SSRaa**.

Une unité médicale est définie par la concaténation du numéro finess
géographique de l'établissement et du type d'unité médicale.


<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 40%" />
<col style="width: 20%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>care_site_id*</strong></td>
<td>hash(care_site_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>care_site_name</strong></td>
<td><p><strong>MCO</strong> :</p>
<p><em>rs</em> (raison sociale correspondant au finess géographique) de
<strong>correspondance_finess_comcode</strong></p></td>
<td><p>Finess géographiques ↔︎</p>
<p>(care_site_source_value)</p></td>
<td><p><strong>correspondance_finess_comcode</strong></p>
<p><em>Si rempli : et_finess</em></p>
<p><em>Sinon : ej_finess</em></p></td>
</tr>
<tr class="header">
<td><strong>SSR :</strong> <em>type_autorisation</em> de
<strong>correspondance_um_uf</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td rowspan="2"><strong>location_id</strong></td>
<td>location_id de LOCATION</td>
<td><p><strong>T_MCOaaUM</strong></p>
<p><em>COALESCE(eta_num_geo, eta_num)</em></p></td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
</tr>
<tr class="header">
<td><strong>SSR</strong> : NULL</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>place_of_service_</strong></p>
<p><strong>concept_id</strong></p></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>care_site_source_value</strong></td>
<td><p><strong>MCO :</strong> <em>‘eta_num_geo’ || _ ||
‘aut_typ1_um’</em> de <strong>T_MCOaaUM</strong></p>
<p><strong>SSR :</strong> <em>‘aut_typ_um’</em> de
<strong>T_SSRaaB</strong></p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>place_of_service_</strong></p>
<p><strong>source_value</strong></p></td>
<td><p><strong>MCO :</strong> <em>aut_typ1_um</em></p>
<p><strong>SSR :</strong> <em>aut_typ_um</em> de
<strong>T_SSRaaB</strong></p></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## CARE_SITE -- DCIR -- Établissements dont les données ne remontent pas dans le PMSI

-   Pour éviter un recouvrement des données du PMSI avec le DCIR, on
    sélectionne les établissements du DCIR à conserver selon leur
    catégorie : on garde les établissements pour lesquels
    : (*ete_cat_cod* ≠ 114 ET *etb_cat_rg1* \> 1203) (table **ER_ETE_F**
    et nomenclature **IR_CET_V**) OU (*ete_cat_cod* ∊ (362, 442))

-   On travaille sur les établissements privés commerciaux, c'est-à-dire
    ceux qui ont *etb_pre_fin* avec un numéro finess valide

### Tables et variables utilisées 

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<td><p><strong>ER_PHA_F</strong></p>
<ul>
<li><p><em>etb_pre_fin</em></p></li>
</ul></td>
<td><p><strong>ER_ETE_F</strong></p>
<ul>
<li><p><em>etb_exe_fin</em></p></li>
</ul></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 39%" />
<col style="width: 20%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>care_site_id*</strong></td>
<td>hash(care_site_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>care_site_name</strong></td>
<td><em>rs</em> (raison sociale) de
<strong>correspondance_finess_comcode</strong></td>
<td>care_site_source_value</td>
<td><p><strong>correspondance_finess_comcode</strong></p>
<p><em>finess8</em></p></td>
</tr>
<tr class="header">
<td><strong>location_id</strong></td>
<td>location_id de LOCATION</td>
<td>care_site_source_value</td>
<td><p>LOCATION</p>
<p>location_source_value</p></td>
</tr>
<tr class="odd">
<td><strong>care_site_source_value</strong></td>
<td><p>location_source_value de la table LOCATION :</p>
<ul>
<li><p>Etablissements de soin : <em>etb_exe_fin</em> de
<strong>ER_ETE_F</strong></p></li>
<li><p>Pharmacies : <em>etb_pre_fin</em> de
<strong>ER_PHA_F</strong></p></li>
</ul></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
