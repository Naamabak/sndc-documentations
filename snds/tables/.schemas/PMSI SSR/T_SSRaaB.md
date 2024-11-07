### Schéma


- Titre : Description du Séjour
<br />


- Clé primaire : <br />`ETA_NUM`, `RHA_NUM`, `RHS_NUM`<br />


- Clé(s) étrangère(s) : <br />
`ETA_NUM, RHA_NUM`=> table [T_SSRaaC](/tables/T_SSRaaC)[ `ETA_NUM`, `RHA_NUM` ]<br />

 
### Liste des variables

Nom | Type | Description | Règle de gestion
-|-|-|-
`ETA_NUM`| chaîne de caractères |N° FINESS d'inscription e-PMSI||
`RHA_VER`| chaîne de caractères |N° version du format du RHA||
`GEN_VER`| chaîne de caractères |N° version de GENRHA||
`GRC_VER`| chaîne de caractères |Version de groupage Etablissement||
`GRC_GME`| chaîne de caractères |Groupage GME Etablissement||
`GRC_RET`| chaîne de caractères |Code retour GME Etablissement||
`AGE_JOU`| nombre entier |Age en jours||
`COD_POST`| chaîne de caractères |Code postal||
`NUM_ANO_UM`| nombre entier |Numéro séquentiel de l'UM||
`NUM_SEM_RHS`| nombre entier |Numéro de semaine calendaire||
`ANN_SEM_RHS`| nombre entier |Année de semaine calendaire||
`GRC_TOP_ERR`| chaîne de caractères |Indicateur d’erreur GME Etablissement||
`GRG_VER`| chaîne de caractères |Version de groupage GENRHA||
`GRG_GME`| chaîne de caractères |Groupage GME GENRHA||
`GRG_RET`| chaîne de caractères |Code retour GME GENRHA||
`GRG_TOP_ERR`| chaîne de caractères |Indicateur d’erreur GME GENRHA||
`TYP_GEN_RHA`| chaîne de caractères |Type de génération automatique du RHA||
`RHA_NUM`| chaîne de caractères |N° Séquentiel du séjour||
`RHS_NUM`| chaîne de caractères |Numéro séquentiel du RHS||
`AGE_ANN`| année |Age||
`COD_SEX`| chaîne de caractères |Sexe||
`BDI_COD`| chaîne de caractères |Code géographique de résidence||
`BDI_DEP`| chaîne de caractères |Code département de résidence||
`RHS_ANT_SEJ_ENT`| nombre entier |Antériorité du RHS par rapport à l'entrée dans le séjour||
`HOS_TYP_UM`| chaîne de caractères |Type d’hospitalisation UM||
`AUT_TYP_UM`| chaîne de caractères |Type d'autorisation d’UM||
`ETA_NUM_GEO`| chaîne de caractères |N° FINESS géographique||
`ENT_MOD`| chaîne de caractères |Mode d’entrée UM||
`ENT_PRV`| chaîne de caractères |Provenance||
`SOR_MOD`| chaîne de caractères |Mode de sortie UM||
`ZON_VAL`| chaîne de caractères |Zone de valorisation||
`SCOR_RR`| nombre entier |Score RR spécialisé||
`PHY_DEP`| nombre entier |Dépendance physique||
`PHY_MAX_DEP`| nombre entier |Dépendance physique maximale||
`COG_DEP`| nombre entier |Dépendance cognitive||
`COG_MAX_DEP`| nombre entier |Dépendance cognitive maximale||
`SOR_DES`| chaîne de caractères |Destination ||
`DEB_SEM`| chaîne de caractères |Semaine de début de séjour SSR||
`DEB_FIN`| chaîne de caractères |Semaine de fin de séjour SSR||
`SEJ_ANT`| nombre entier |Antériorité du RHS par rapport à l'entrée dans l'UM||
`MOI_ANN`| année |Mois Année du RHS||
`JP_HWE`| chaîne de caractères |Jours de présence hors week-end||
`JP_WE`| chaîne de caractères |Jours de présence en week-end||
`ANC_CHI`| nombre entier |Ancienneté de la date chirurgicale||
`FP_PEC`| chaîne de caractères |Finalité principale de prise en charge||
`MOR_PRP`| chaîne de caractères |Manifestation morbide principale||
`ETL_AFF`| chaîne de caractères |Affection étiologique||
`HAB_DEP`| chaîne de caractères |Dépendance à l’habillage ou à la toilette||
`DPL_DEP`| chaîne de caractères |Dépendance au déplacement||
`ALI_DEP`| chaîne de caractères |Dépendance à l’alimentation||
`CON_DEP`| chaîne de caractères |Dépendance à la continence||
`CPT_DEP`| chaîne de caractères |Dépendance au comportement||
`REL_DEP`| chaîne de caractères |Dépendance à la relation||
`NBR_DGN`| nombre entier |Nombre de diagnostics associés dans ce RHS (n1)||
`NBR_CSARR`| nombre entier |Nombre d'actes CSARR dans ce RHS (n2)||
`NBR_CCAM`| nombre entier |Nombre d'actes CCAM dans ce RHS (n3)||
`REHOS_PRJ_THP`| chaîne de caractères |Poursuite du même projet thérapeutique||
`GMT_NUM`| chaîne de caractères |GMT||
`EXB_TOP`| chaîne de caractères |Indicateur d'appartenance à la zone basse||
`EXB_NBJ`| nombre entier |Nombre de journées du supplément zone basse||
`EXH_NBJ`| nombre entier |Nombre de journées en zone haute||
`LIT_DEDIE`| chaîne de caractères |Lit identifié soins palliatifs (LISP)||
`SCORE_RR`| nombre entier |Score RR||
`TYP_US`| chaîne de caractères |Type unité spécifique||
`POST_DEP`| chaîne de caractères |Code postal||
`ACT_TYP`| chaîne de caractères |Type d’activité||
`APP_ADP`| nombre entier |Adaptation d’appareillage||
`ASS_DGN_1`| chaîne de caractères |Diagnostic associé n° 1||
`ASS_DGN_2`| chaîne de caractères |Diagnostic associé n° 2||
`ASS_DGN_3`| chaîne de caractères |Diagnostic associé n° 3||
`ASS_DGN_4`| chaîne de caractères |Diagnostic associé n° 4||
`ASS_DGN_5`| chaîne de caractères |Diagnostic associé n° 5||
`ASS_DGN_6`| chaîne de caractères |Diagnostic associé n° 6||
`ASS_DGN_7`| chaîne de caractères |Diagnostic associé n° 7||
`ASS_DGN_8`| chaîne de caractères |Diagnostic associé n° 8||
`ASS_DGN_9`| chaîne de caractères |Diagnostic associé n° 9||
`ASS_DGN_10`| chaîne de caractères |Diagnostic associé n° 10||
`ASS_DGN_11`| chaîne de caractères |Diagnostic associé n° 11||
`ASS_DGN_12`| chaîne de caractères |Diagnostic associé n° 12||
`ASS_DGN_13`| chaîne de caractères |Diagnostic associé n° 13||
`ASS_DGN_14`| chaîne de caractères |Diagnostic associé n° 14||
`ASS_DGN_15`| chaîne de caractères |Diagnostic associé n° 15||
`ASS_DGN_16`| chaîne de caractères |Diagnostic associé n° 16||
`ASS_DGN_17`| chaîne de caractères |Diagnostic associé n° 17||
`ASS_DGN_18`| chaîne de caractères |Diagnostic associé n° 18||
`ASS_DGN_19`| chaîne de caractères |Diagnostic associé n° 19||
`ASS_DGN_20`| chaîne de caractères |Diagnostic associé n° 20||
`BAL`| nombre entier |Balnéothérapie||
`BIL`| nombre entier |Bilans||
`CAR_RSP_RED`| nombre entier |Rééducation cardio-respiratoire||
`COL_RED`| nombre entier |Rééducation collective||
`FR_UTL`| chaîne de caractères |Utilisation d’un fauteuil roulant||
`GRC_CMC`| chaîne de caractères |CMC de l'établissement||
`GRC_GHJ`| chaîne de caractères |GHJ de l'établissement||
`GRG_CMC`| chaîne de caractères |CMC du GENRHA||
`GRG_GHJ`| chaîne de caractères |GHJ du GENRHA||
`MEC_RED`| nombre entier |Rééducation mécanique||
`NBR_ACT`| nombre entier |Nombre d’actes (n) médicaux||
`NBR_CCAR`| nombre entier |Nombre d'actes CdARR dans ce RHS (n2)||
`NEU_PSY_RED`| nombre entier |Rééducation neuro-psychologique||
`NUT_RED`| nombre entier |Rééducation nutritionnelle||
`PHY`| nombre entier |Physiothérapie||
`REI_RED`| nombre entier |Réadaptation-réinsertion||
`RHS_NBR_IVA`| chaîne de caractères |Nombre total de points IVA  du RHS||
`SEN_MOT_RED`| nombre entier |Rééducation sensori-motrice||
`URO_SPH_RED`| nombre entier |Rééducation uro-sphinctérienne||
`MOI_ANN_SOR_SEJ`| date |Mois/ Année de sortie du séjour||