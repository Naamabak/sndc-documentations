# Table VISIT_OCCURRENCE
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

Cette table contient les événements qui se produisent lorsqu’une
personne interagit avec le système de santé pendant une certaine
période. Par exemple lorsqu’un patient se rend dans un établissement de
soins de santé ou bien lorsqu’un personnel médical se rend chez un
patient, ou bien lors d’une téléconsultation ou encore lorsque la visite
est de courte durée ou donne lieu à une hospitalisation.

La table VISIT_OCCURRENCE contient les durées pendant lesquelles une
personne reçoit sans interruption des actes médicaux d'un ou de
plusieurs prestataires dans un lieu de soins. Les visites sont classées
en plusieurs catégories : soins ambulatoires, hospitalisation, urgences
et soins de longue durée. Les personnes peuvent passer de l'un à l'autre
de ces milieux au cours d'un séjour/traitements.

Le concept de visite est décrit par des concepts dans le domaine des
visites, qui forment une structure hiérarchique. Les concepts possibles
dans le format OMOP-CDM sont :

-   [Inpatient
   visit](https://athena.ohdsi.org/search-terms/terms/9201)
   (Visite de patient hospitalisé) Concept_ID = 9201 : Personne se
   rendant à l'hôpital, sur un site de soins, occupant un lit, pour
   une durée de plus d'une journée, avec des médecins et d'autres
   prestataires disponibles en permanence pour fournir un service 24
   heures sur 24

-   [Emergency Room
   Visit](https://athena.ohdsi.org/search-terms/terms/9203)
   (Visite de la salle d’urgence) Concept_ID = 9203 : Personne qui se
   rend dans un établissement de soins de santé spécialisé dans le
   traitement des urgences, sur un site de soins, dans un délai d'un
   jour, avec des médecins et des prestataires disponibles en
   permanence pour fournir un service 24 heures sur 24

-   [Emergency Room and inpatient
   visit](https://athena.ohdsi.org/search-terms/terms/262) (Salle
   d'urgence et visite des patients hospitalisés) Concept_ID = 262 :
   Personne qui se rend aux urgences, puis est hospitalisée, lorsque
   le service des urgences fait partie de l'hôpital et que la
   transition entre les urgences et les autres services de l'hôpital
   n'est pas définie.

-   [Non-hospital institution
   visit](https://athena.ohdsi.org/search-terms/terms/42898160)
   (Visite d'un établissement non hospitalier) Concept_ID = 42898160
   : Personne se rendant dans un établissement spécialisé pour des
   raisons de santé, sur un site de soins, sans médecin mais avec la
   présence possible d'autres prestataires de soins, en permanence,
   pour fournir un service 24 heures sur 24

-   [Outpatient
   visit](https://athena.ohdsi.org/search-terms/terms/9202)
   (Visite ambulatoire) Concept_ID = 9202: Personne qui se rend dans
   un établissement de soins ambulatoires spécialisé, dans un site de
   soins, dans un délai d'un jour, sans lit, avec des médecins ou des
   prestataires de services médicaux qui fournissent des services
   pendant la visite

-   [Home
   visit](https://athena.ohdsi.org/search-terms/terms/581476)
   (Visite à domicile) Concept_ID = 581476: Prestataire visitant une
   personne, sans site de soins, dans un délai d'un jour, fournissant
   un service

-   [Telehealth
   visit](https://athena.ohdsi.org/search-terms/terms/5083)
   (Visite en téléconsultation) Concept_ID = 5083: Le patient
   s'engage avec le fournisseur par le biais des médias de
   communication

-   [Pharmacy
   visit](https://athena.ohdsi.org/search-terms/terms/581458)
   (Visite en pharmacie) Concept_ID = 581458 : Personne qui se rend à
   la pharmacie pour délivrer un médicament, sur un site de soins,
   dans la journée

-   [Laboratory
   Visit](https://athena.ohdsi.org/search-terms/terms/32036)
   (Visite du laboratoire) Concept_ID = 32036 : Visite d'un patient
   dans un établissement spécialisé, sur un site de soins, dans un
   délai d'un jour, en vue d'une analyse biologique.

-   [Ambulance
   Visit](https://athena.ohdsi.org/search-terms/terms/581478)
   (Visite en ambulance) Concpet_ID = 581478 : Personne utilisant un
   service de transport dans le but d'effectuer l'une des autres
   visites, sans site de soins, dans un délai d'un jour,
   éventuellement avec des prestataires accompagnant la visite et
   fournissant le service.

-   [Case Management
   Visit](https://athena.ohdsi.org/search-terms/terms/38004193) :
   Visite de gestion de cas Concept_ID = 38004193 : Personne en
   contact avec le système de soins de santé, sans site de soins,
   dans un délai d'un jour, sans prestataire, à des fins
   administratives

 La durée de la visite, ou "durée du séjour", est définie comme suit :
 visit_end_date - visit_start_date. Pour toutes les visites, cette durée
 est inférieure à 1 jour, sauf pour les visites de patients
 hospitalisés (inpatient visit) et les visites d'établissements non
 hospitaliers (Non-hospital institution Visits). Le CDM contient
 également la table VISIT_DETAIL dans laquelle sont stockées des
 informations supplémentaires sur la visite, par exemple les transferts
 entre unités lors d'une visite de patient hospitalisé.

## Commentaires généraux

-   Pour le PMSI, on retient deux types de visite :

    -   Visites avec hospitalisation (au moins 1 nuit) : **tables C** du
       PMSI. Le concept_id associé est “9201 : inpatient visit”

    -   Visites sans hospitalisation (le patient ne reste pas pour une
       nuit) : tables ACE (Actes et Consultations Externes, voir la
       [<u>documentation
       SNDS</u>](../../snds/fiches/actes_consult_externes.md))
       du PMSI. Le concept_id associé est “9202 : outpatient visit”.

-   Pour le DCIR, il n’y a pas de “inpatient_visit”. En effet, les
   séjours hospitaliers des établissements publics remontent à la
   fois dans le PMSI et le DCIR, on les retire donc du DCIR pour
   éviter les doublons. Pour distinguer les visites en pharmacie, en
   laboratoire et en ville (outpatient), on utilise le code de
   prestation de référence
   ([<u>prs_nat_ref</u>](../../snds/fiches/prestation.md)),
   et leur correspondance avec les trois concept_id : “9202 :
   outpatient visit”, “581458 : pharmacy visit” et “32036 :
   laboratory visit”. .

-   Comme pour les tables LOCATION et CARE_SITE, on retire les
   établissements de **\_ER_ETE_F** pour lesquels ( *etb_cat_rg1* \>
   1203 ET *ete_cat_cod* ) OU ( *ete_cat_cod* ∊ \[362 ; 422 \] ) (cf
   partie
   [**<u>LOCATION</u>**](location.md))

-   On traite séparément les visites qui remontent des établissements de
   santé **(ER_ETE_F)** et les autres (**ER_PRS_F** dont on a enlevé
   les lignes qui sont dans **ER_ETE_F**).

## Tables et variables utilisées dans le SNDS

**Tables du PMSI :**

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 24%" />
<col style="width: 25%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li>
<p><strong>T_MCOaaC</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_HADaaC</strong></p>

<ul>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rhad_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_HADaaC</strong></p>

<ul>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rhad_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_MCOaaCSTC</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>seq_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_std</em></p>
</li>
</ul></li>
</ul></th>
</tr>
<tr class="odd">
<th><ul>
<li>
<p><strong>C_MCO_C_FT</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rsa_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_SSRaaC</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>rha_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_RIPaaC</strong></p>

<ul>
<li>
<p><em>eta_num_epmsi</em></p>
</li>
<li>
<p><em>rip_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>T_SSRaaCSTC</strong></p>

<ul>
<li>
<p><em>eta_num</em></p>
</li>
<li>
<p><em>seq_num</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
</ul></li>
</ul></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

**Tables du DCIR :**

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 24%" />
<col style="width: 25%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li>
<p><strong>_ER_ETE_F</strong></p>

<ul>
<li>
<p><em>ben_nir_psa</em></p>
</li>
<li>
<p><em>etb_pre_fin</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
<li>
<p><em>pse_spe_cod</em></p>
</li>
<li>
<p><em>pse_act_nat</em></p>
</li>
<li>
<p><em>dcir_visit_id</em></p>
</li>
<li>
<p><em>dcir_visit_key</em></p>
</li>
</ul></li>
</ul></th>
<th><ul>
<li>
<p><strong>_ER_PRS_F</strong></p>

<ul>
<li>
<p><em>ben_nir_psa</em></p>
</li>
<li>
<p><em>etb_pre_fin</em></p>
</li>
<li>
<p><em>exe_soi_dtd</em></p>
</li>
<li>
<p><em>exe_soi_dtf</em></p>
</li>
<li>
<p><em>pse_spe_cod</em></p>
</li>
<li>
<p><em>pse_act_nat</em></p>
</li>
<li>
<p><em>dcir_visit_id</em></p>
</li>
<li>
<p><em>dcir_visit_key</em></p>
</li>
</ul></li>
</ul></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

-   [<u>Fichier de correspondance prs_nat_ref --\>
   OMOP</u>](/files/correspondance_prs_nat_ref_omop.xlsx)

    -   *prs_nat_ref*

    -   *mapped_omop*

-   Nomenclature IR_CET_V:

    -   *etb_cat_cod*

    -   *etb_cat_rg1*

## Variables au format OMOP utilisées

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 47%" />
<col style="width: 9%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variables</strong></th>
<th><strong>Description</strong></th>
<th><strong>Type</strong></th>
<th><strong>Clé primaire</strong></th>
<th><strong>Clé étrangère</strong></th>
<th><strong>Table de la clé étrangère</strong></th>
</tr>
<tr class="odd">
<th><strong>visit_occurrence_id*</strong></th>
<th><p>Ce champ permet d’identifier de manière unique une interaction
entre un patient et le système de santé.</p>
<p>Cet identifiant est utilisé par les autres tables du CDM pour
associer des évènements à une visite.</p></th>
<th>integer</th>
<th>Oui</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th></th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>PERSON</th>
</tr>
<tr class="odd">
<th><strong>visit_concept_id*</strong></th>
<th><p>Ce champ contient un concept id qui représnete le type de visite,
comme les patients hospitalisés au moins une nuit (inpatient) ou les
visites en ambulatoire (outpatient).</p>
<p>Tous les concepts de ce champ sont standards et appartiennent au
domaine Visit.</p></th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
<tr class="odd">
<th><strong>visit_start_date*</strong></th>
<th><p>Pour les séjours (inpatient visits), la date de début est
généralement la date d’admission.</p>
<p>Pour les visites en ambulatoire, la date de début et la date de fin
sont égales.</p></th>
<th>date</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_start_datetime</strong></th>
<th></th>
<th>datetime</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_end_date*</strong></th>
<th>Pour les séjours (inpatient visits), la date de fin est généralement
la date de sortie.</th>
<th>date</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_end_datetime</strong></th>
<th></th>
<th>datetime</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_type_concept_id*</strong></th>
<th>Ce champ est utilisé pour comprendre la provenance de
l’enregistrement des données concernant la visite (provenance des
données)</th>
<th>Integer</th>
<th>Non</th>
<th>Oui</th>
<th>CONCEPT</th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>Il n’y a qu’un seul professionnel de santé par visite et le document
de l’ETL doit clairement définir comment il est choisi (traitant,
prescripteur, etc). S’il y a plusieurs professionnels de santé qui
interviennent au cours d’une visite, ils peuvent être pris en compte
dans les tables évènements (CONDITION_OCCURRENCE, PROCEDURE_OCCURRENCE,
etc.) ou dans la table VISIT_DETAIL.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>PROVIDER</th>
</tr>
<tr class="odd">
<th><strong>care_site_id</strong></th>
<th>Ce champ indique dans quel centre de soin a eu lieu la visite.</th>
<th>integer</th>
<th>Non</th>
<th>Oui</th>
<th>CARE_SITE</th>
</tr>
<tr class="odd">
<th><strong>visit_source_value</strong></th>
<th>Ce champ contient la valeur des données source qui indique le type
de visite dont il s’agit (séjour, ambulatoire, urgence, etc.)</th>
<th>varchar(50)</th>
<th>Non</th>
<th>Non</th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## PMSI Inpatient visit

### Commentaires généraux

-   Dans cette partie, on traite le cas des hospitalisations.

-   Les **tables C** désignent les tables **T_MCOaaC, T_RIPaaC,
   T_HADaaC, T_SSRaaC, C_MCO_C\_FT.**

-   On sélectionne uniquement les séjours valides, c’est-à-dire pour
   lesquels la date de début d’exécution des soins (*exe_soi_dtd)*
   est renseignée.

-   On supprime les séjours avec [<u>codes retours
   erronés</u>](../../snds/fiches/requete_type_pmsi_mco.md),
   c’est-à-dire qu’on garde les lignes pour lesquelles les codes
   retours valent 0 (*nir_ret, nai_ret, sex_ret, sej_ret, fho_ret,
   pms_ret, dat_ret, coh_nai_ret, coh_sex_ret* des **tables C**)

### *Règles de transformation*

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 45%" />
<col style="width: 23%" />
<col style="width: 15%" />
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
<th><strong>visit_occurrence_id*</strong></th>
<th>hash (visit_source_value)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de la table PERSON</th>
<th><p><strong>Tables C</strong></p>
<p><em>nir_ano_17</em></p></th>
<th><p>PERSON</p>
<p>person_source_value</p></th>
</tr>
<tr class="odd">
<th><strong>visit_concept_id*</strong></th>
<th>9201</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_start_date*</strong></th>
<th><em>exe_soi_dtd</em> des <strong>tables C</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_start_datetime</strong></th>
<th>visit_start_date + ‘00:00:0000’</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_end_date*</strong></th>
<th><em>exe_soi_dtf</em> des <strong>tables C</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_end_datetime</strong></th>
<th>visit_end_date + ‘00:00:0000’</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_type_concept_id*</strong></th>
<th>32810</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>0</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>care_site_id</strong></th>
<th>care_site_id de la table CARE_SITE</th>
<th><p><strong>T_MCOaaC et C_MCO_C_FT</strong></p>
<p><em>eta_num</em></p>
<p><strong>T_RIPaaC et T_HADaaC</strong></p>
<p><em>eta_num_epmsi</em></p></th>
<th><p>CARE_SITE</p>
<p><em>care_site_source_value</em></p>
<p>CARE_SITE</p>
<p><em>care_site_source_value</em></p></th>
</tr>
<tr class="odd">
<th><strong>visit_source_value</strong></th>
<th><ul>
<li>
<p><strong>T_MCOaaC</strong>: ‘mcoaa’ || ‘_ ‘ || <em>eta_num</em> || ‘_
‘ || <em>rsa_num</em></p>
</li>
</ul>
<ul>
<li>
<p><strong>T_SSRaaC</strong>: ‘ssraa’ || ‘_ ‘ || <em>eta_num</em> || ‘_
‘ || <em>rha_num</em></p>
</li>
<li>
<p><strong>T_HADaaC</strong> : ‘hadaa’ || ‘_ ‘ || <em>eta_num_epmsi</em>
|| ‘_ ‘ || <em>rhad_num</em></p>
</li>
<li>
<p><strong>T_RIPaaC</strong> : ‘ripaa’ || ‘_ ‘ || <em>eta_num_epmsi</em>
|| ‘_ ‘ || <em>rip_num</em></p>
</li>
<li>
<p><strong>C_MCO_C_FT</strong>: ‘mcoft’ || ‘_’ || <em>eta_num</em> ||
‘_’ || <em>rsa_num</em></p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>


## PMSI Outpatient visit

### Commentaires généraux

-   Dans cette partie, on traite les actes et consultations externes
   (ACE).

-   Les **tables CSTC** désignent les tables **T_MCOaaCSTC** et
   **T_SSRaaCSTC**

-   On sélectionne uniquement les séjours valides, c’est-à-dire pour
   lesquels la date de début d’exécution des soins (*exe_soi_dtd)*
   est renseignée.

-   On supprime les séjours avec [<u>codes retours
   erronés</u>](../../snds/fiches/requete_type_pmsi_mco.md),
   c’est-à-dire qu’on garde les lignes pour lesquelles les codes
   retours valent 0 (*nir_ret, nai_ret, sex_ret, ias_ret,
   ent_dat_ret* des **tables CSTC**)

### Règles de transformation

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 42%" />
<col style="width: 27%" />
<col style="width: 14%" />
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
<th><strong>visit_occurrence_id*</strong></th>
<th>hash (visit_source_value)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>person_id*</strong></th>
<th>person_id de la table PERSON</th>
<th><p><strong>Tables CSTC</strong></p>
<p><em>nir_ano_17</em></p></th>
<th><p>PERSON</p>
<p>person_source_value</p></th>
</tr>
<tr class="odd">
<th><strong>visit_concept_id*</strong></th>
<th>9202</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_start_date*</strong></th>
<th><em>exe_soi_dtd</em> des <strong>tables CSTC</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_start_datetime</strong></th>
<th>visit_start_date + ‘00:00:0000’</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_end_date*</strong></th>
<th><em>exe_soi_dtf</em> des <strong>tables CSTC</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_end_datetime</strong></th>
<th>visit_end_date + ‘00:00:0000’</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>visit_type_concept_id*</strong></th>
<th>32810</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>provider_id</strong></th>
<th>0</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th><strong>care_site_id</strong></th>
<th>care_site_id de la table CARE_SITE</th>
<th><p><strong>T_MCOaaC, C_MCO_C_FT,</strong> et
<strong>T_SSRaaC</strong></p>
<p><em>eta_num</em></p>
<p><strong>T_RIPaaC</strong> et <strong>T_HADaaC</strong></p>
<p><em>eta_num_epmsi</em></p></th>
<th><p>CARE_SITE</p>
<p><em>care_site_source_value</em></p></th>
</tr>
<tr class="odd">
<th><strong>visit_source_value</strong></th>
<th><ul>
<li>
<p><strong>T_MCOaaCSTC</strong>: ‘mcoaaace’ || ‘_ ‘ || <em>eta_num</em>
|| ‘_ ‘ || <em>seq_num</em></p>
</li>
</ul>
<ul>
<li>
<p><strong>T_SSRaaCSTC</strong>: ‘ssraaace’ || ‘_ ‘ || <em>eta_num</em>
|| ‘_ ‘ || <em>seq_num</em></p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## DCIR_ER_ETE_F

### Commentaires généraux

-   Dans cette partie, on traite les visites en établissement de santé
   (**\_ER_ETE_F)**.

-   Comme pour les tables LOCATION et CARE_SITE, on retire les
   établissements de **\_ER_ETE_F** pour lesquels ( *etb_cat_rg1* \>
   1203 ET *ete_cat_cod* ) OU ( *ete_cat_cod* ∊ \[362 ; 422 \] ) (cf
   partie
   [**LOCATION</u>]()

### Règles de transformation

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 36%" />
<col style="width: 19%" />
<col style="width: 16%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr class="header">
<th rowspan="2"><strong>Variable</strong></th>
<th rowspan="2"><strong>Règles</strong></th>
<th colspan="2"><strong>Jointure</strong></th>
<th rowspan="2"><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th><strong>Gauche</strong></th>
<th><strong>Droite</strong></th>
</tr>
<tr class="odd">
<th>visit_occurrence_id*</th>
<th>hash (visit_source_value)</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>person_id*</th>
<th>person_id de la table PERSON</th>
<th><p><strong>_ER_ETE_F</strong></p>
<p><em>ben_nir_psa</em></p></th>
<th><p>PERSON</p>
<p>person_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_concept_id*</th>
<th><ul>
<li>
<p>Si <em>prs_nat_ref</em> de <strong>_ER_ETE_F</strong> existe dans
<strong>correspondance_prs_nat_ref_omop</strong>,
<em>mapped_omop</em></p>
</li>
<li>
<p>Sinon 9202</p>
</li>
</ul></th>
<th><p><strong>_ER_ETE_F</strong></p>
<p><em>prs_nat_ref</em></p></th>
<th><p><strong>correspondance_prs_</strong></p>
<p><strong>nat_ref_omop</strong></p>
<p><em>prs_nat_ref</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_start_date*</th>
<th><em>exe_soi_dtd</em> de <strong>_ER_ETE_F</strong></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_start_datetime</th>
<th>visit_start_date + ‘00:00:0000’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_end_date*</th>
<th><em>exe_soi_dtf</em> de <strong>_ER_ETE_F</strong> si rempli, sinon
<em>exe_soi_dtd</em></th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_end_datetime</th>
<th>visit_end_date + ‘00:00:0000’</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_type_concept_id*</th>
<th>32810</th>
<th></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>provider_id</th>
<th>provider_id de PROVIDER</th>
<th><p><strong>_ER_ETE_F</strong></p>
<p><em>pse_spe_cod || ‘_’ || pse_act_nat</em></p></th>
<th><p>PROVIDER</p>
<p>provider_source_value</p></th>
<th></th>
</tr>
<tr class="odd">
<th>care_site_id</th>
<th>care_site_id de CARE_SITE</th>
<th><p><strong>_ER_ETE_F</strong></p>
<p><em>etb_pre_fin</em></p></th>
<th><p>CARE_SITE</p>
<p>care_site_source_value</p></th>
<th><em>etb_pre_fin != null</em></th>
</tr>
<tr class="odd">
<th>visit_source_value</th>
<th><p>‘dciraa’ || ‘_’ || <em>etb_pre_fin</em> || ‘_’ ||
<em>dcir_visit_id</em></p>
<p>(avec <em>etb_pre_fin</em> et <em>dcir_visit_id</em> de
<strong>_ER_ETE_F</strong> et ‘aa’ désignant l’année de la
visite</p></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>


## DCIR _ER_PRS_F sans ER_ETE_F

### Commentaires généraux

Dans cette partie, sont concernées les visites de **\_ER_PRS_F** qui ne sont pas dans **\_ER_ETE_F** (elles ont déjà été prises en compte dans la partie précédente)

### Règles de transformation

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 40%" />
<col style="width: 19%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr class="header">
<th>
<p><strong>champ</strong></p>
</th>
<th>
<p><strong>Règles</strong></p>
</th>
<th>
<p><strong>Gauche</strong></p>
</th>
<th>
<p><strong>Droite</strong></p>
</th>
</tr>
<tr class="odd">
<th>visit_occurrence_id*</th>
<th>hash (visit_source_value)</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>person_id*</th>
<th>person_id de la table PERSON</th>
<th><p><strong>_ER_PRS_F</strong></p>
<p><em>ben_nir_psa</em></p></th>
<th><p>PERSON</p>
<p>person_source_value</p></th>
</tr>
<tr class="odd">
<th>visit_concept_id*</th>
<th><ul>
<li>
<p>Si <em>prs_nat_ref</em> de <strong>_ER_PRS_F</strong> existe dans
<strong>correspondance_pres_nat_ref_omop</strong>,
<em>mapped_omop</em></p>
</li>
<li>
<p>Sinon 9202</p>
</li>
</ul></th>
<th><p><strong>_ER_PRS_F</strong></p>
<p><em>prs_nat_ref</em></p></th>
<th><p><strong>correspondance_prs_nat_ref_omop</strong></p>
<p><em>prs_nat_ref</em></p></th>
</tr>
<tr class="odd">
<th>visit_start_date*</th>
<th><em>exe_soi_dtd</em> de <strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_start_datetime</th>
<th>visit_start_date + ‘00:00:0000’</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_end_date*</th>
<th><ul>
<li>
<p><em>exe_soi_dtf</em> de <strong>_ER_PRS_F</strong> si rempli,</p>
</li>
<li>
<p>sinon <em>exe_soi_dtd</em></p>
</li>
</ul></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_end_datetime</th>
<th>visit_end_date + ‘00:00:0000’</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>visit_type_concept_id*</th>
<th>32810</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>provider_id</th>
<th></th>
<th><p><strong>_ER_PRS_F</strong></p>
<p><em>pse_spe_cod || ‘_’ || pse_act_nat</em></p></th>
<th><p>PROVIDER</p>
<p>provider_source_value</p></th>
</tr>
<tr class="odd">
<th>care_site_id</th>
<th>care_site_id de CARE_SITE</th>
<th><p><strong>_ER_PRS_F</strong></p>
<p><em>etb_pre_fin</em></p></th>
<th><p>CARE_SITE</p>
<p>care_site_source_value</p></th>
</tr>
<tr class="odd">
<th>visit_source_value</th>
<th><p>‘dciraa’ || ‘_’ || <em>etb_pre_fin</em> || ‘_’ ||
<em>dcir_visit_id</em></p>
<p>(avec <em>etb_pre_fin</em> et <em>dcir_visit_id</em> de
<strong>_ER_PRS_F</strong> et ‘aa’ désignant l’année de la
visite</p></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
