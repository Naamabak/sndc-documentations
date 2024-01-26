## Schéma

- Titre : Fichier donnant toutes les erreurs détectées par la fonction groupage (LEG)
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM_EPMSI`, `RHAD_NUM` => table [T_HADaaB](/tables/T_HADaaB) [ `ETA_NUM_EPMSI`, `RHAD_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20HAD/T_HADaaLEG.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM_EPMSI`|chaîne de caractères|N° FINESS e-PMSI||
`MOI`|date|Mois période||
`ANN`|chaîne de caractères|Année période||
`RHAD_NUM`|chaîne de caractères|N° séquentiel de séjour d&#x27;HAD/ N° séquentiel d&#x27;entrée||
`FAC_NUM`|chaîne de caractères|N° séquentiel de facture||
`SEQ_NUM`|chaîne de caractères|Numéro de la séquence dans le séjour||
`SSEQ_NUM`|chaîne de caractères|Numéro de sous-séquence||
`COD_ERR`|chaîne de caractères|Code retour||

