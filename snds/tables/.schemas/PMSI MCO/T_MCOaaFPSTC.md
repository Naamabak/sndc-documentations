## Schéma

- Titre : ACE DMI en sus
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaaFASTC](/tables/T_MCOaaFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaFPSTC.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`DEL_DAT_ENT`|nombre entier|Délai par rapport à la date d&#x27;entrée||
`ETA_NUM`|chaîne de caractères|Numéro FINESS e-PMSI||
`ETA_NUM_GEO`|chaîne de caractères|Numéro FINESS géographique||
`FAC_MNT`|nombre réel|Montant total facturé||
`LPP_COD`|chaîne de caractères|Code référence LPP||
`LPP_PRI_UNI`|nombre réel|Prix d&#x27;achat unitaire||
`LPP_PU_DEV`|nombre réel|Tarif référence LPP ou Prix Unitaire sur devis||
`LPP_QUA`|nombre entier|Quantité||
`MNT_UNI_ECA`|nombre réel|Montant unitaire de l&#x27;écart indemnisable||
`SEQ_NUM`|chaîne de caractères|N° séquentiel||
`TIP_PRS_IDE`|nombre entier|Code référence LPP (format numérique)||
`TOT_MNT_ECA`|nombre réel|Montant total de l&#x27;écart indemnisable||
`TYP_ART`|chaîne de caractères|Type d&#x27;enregistrement||
`EXE_SOI_DTD`|date|Date des soins||
`EXE_SOI_AMD`|chaîne de caractères|||
`ENT_ANN`|chaîne de caractères|Année début de séjour||
`ENT_MOI`|date|Mois de début de séjour||
`NUM_FAC`|chaîne de caractères|N° Facture séquentiel||
`RSF_TYP`|chaîne de caractères|Type de format RSF (1 : ancien, 2 : nouveau)||

