## Schéma


- Titre : Valorisation des séjours
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM, RHA_NUM`
  => table `[T_SSRaaB](tables/T_SSRaaB)` [ `ETA_NUM`, `RHA_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_SSRaaVALO/T_SSRaaVALO.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`TYP_HOS`| chaîne de caractères |Type d’hospitalisation||

`ETA_NUM`| chaîne de caractères |Finess||

`RHA_NUM`| chaîne de caractères |N° séquentiel du séjour||

`RHS_NUM`| chaîne de caractères |N° séquentiel de RHS||

`TYP_GEN_RHA`| chaîne de caractères |Type de génération du RHA||

`VER_CLAS`| chaîne de caractères |Version de la classification||

`GRG_GME`| chaîne de caractères |Numéro du GME||

`GMT_NUM`| chaîne de caractères |Numéro du GMT||

`VALO`| chaîne de caractères |Indicateur de valorisation||

`ENT_MOD`| chaîne de caractères |Mode d’entrée du SSRHA||

`SUI_TYP`| chaîne de caractères |Type de suite||

`COEFGEO`| nombre entier |Coefficient Géographique||

`COEFSPE`| nombre entier |Coefficient de spécialisation||

`COEFPRUD`| nombre entier |Coefficient Prudentiel||

`COEFHONO`| nombre entier |Coefficient honoraires||

`COEFTRANS`| nombre entier |Coefficient Transition||

`FRACDMA`| nombre entier |Fraction de la DMA||

`TXREMB`| nombre entier |Taux de remboursement||

`MAJO_PEDIA`| chaîne de caractères |Indicateur de l’application de la majoration en pédiatrie||

`ZON_VAL_HC`| chaîne de caractères |Zone de valorisation du SSRHA en HC||

`NV_Article51`| chaîne de caractères |Séjour relevant de l’expérimentation Article 51||

`PRE_JOU_NBR`| nombre entier |Nombre de journées de présence||

`VAL_JOU_NBR`| nombre entier |Nombre de journées de présence dans la Fonction Groupage||

`EXB_NBJ`| nombre entier |Nombre de suppléments journaliers en zone basse||

`EXH_NBJ`| nombre entier |Nombre de suppléments journaliers en zone haute||

`DMA_BR`| nombre entier |Dotation Modulée à l’Activité en Base de Remboursement||

`DMA_BR_PRUD`| nombre entier |Dotation Modulée à l’Activité en Base de Remboursement avec Coefficient Prudentiel||

`DMA_AM`| nombre entier |Dotation Modulée à l’Activité Assurance Maladie||

`MNT_AM_RSF`| nombre entier |Montant Assurance Maladie issu des RSFA (parties B et C)||

`TOP_SEJ_SUP30J`| chaîne de caractères |Indicateur des séjours de plus de 30 jours||

`AGE_ANN`| année |||

`NV_ATTENTE_DTS`| chaîne de caractères |Séjour en attente des droits du patient (motif de non valorisation)||

`NV_CHAIN`| chaîne de caractères |Problème de chainage fusion des fichiers (motif de non valorisation)||

`NV_CM90`| chaîne de caractères |Groupage en CM 90 (motif de non valorisation)||

`NV_NONCLOS`| chaîne de caractères |Séjour en HC < 70j (motif de non valorisation)||

`NV_NONFACTAM`| chaîne de caractères |Séjour non facturable à l’Assurance Maladie (motif de non valorisation)||

`NV_PIE`| chaîne de caractères |Prestation interétablissements (motif de non valorisation)||

`NV_TXREMB_ABS`| chaîne de caractères |Taux de remboursement absent ou > 100 (motif de non valorisation)||

`NV_VAR_ANO`| chaîne de caractères |Problème de codage des variables bloquantes du fichier ANO (motif de non valoris||

`TYP_ETA_NUM`| chaîne de caractères |Finess PMSI hors réforme||

`TYP_VALO`| chaîne de caractères |ype de valorisation du séjour||
