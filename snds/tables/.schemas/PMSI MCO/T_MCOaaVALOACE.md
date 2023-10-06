## Schéma

- Titre : Valorisation des actes et consultations externes
<br />
- Clé(s) étrangère(s) : <br />
`ETA_NUM`, `SEQ_NUM` => table [T_MCOaaFASTC](/tables/T_MCOaaFASTC) [ `ETA_NUM`, `SEQ_NUM` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/PMSI%20MCO/T_MCOaaVALOACE.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`ETA_NUM`|chaîne de caractères|n°finess de l&#x27;établissement||
`fides`|chaîne de caractères|Variable &quot;valorisé par fides&quot; du RAFAEL-A||
`fides_ovalide`|chaîne de caractères|Indicateur (calculé par OVALIDE) servant à la valorisation FIDES||
`mnt_br`|nombre réel|Montant Base de remboursement total||
`mnt_br_atu`|nombre réel|Montant Base de remboursement ATU||
`mnt_br_ccam`|nombre réel|Montant Base de remboursement CCAM||
`mnt_br_dia`|nombre réel|Montant Base de remboursement Alternative à la dialyse en centre||
`mnt_br_dm_ext`|nombre réel|Montant Base de remboursement DM externe||
`mnt_br_ffm`|nombre réel|Montant Base de remboursement FFM||
`mnt_br_ftn`|nombre réel|Montant Base de remboursement FTN||
`MNT_BR_MED_EXT`|nombre réel|Montant Base de remboursement Médicaments externe||
`mnt_br_ngap`|nombre réel|Montant Base de remboursement NGAP||
`mnt_br_se`|nombre réel|Montant Base de remboursement SE||
`MNT_RAC`|nombre réel|Montant remboursable par l&#x27;organisme complémentaire (AMC)||
`mnt_remb`|nombre réel|Montant Remboursé AM  total, y compris factures FIDES||
`mnt_remb_atu`|nombre réel|Montant Remboursé AM ATU, y compris factures FIDES||
`mnt_remb_ccam`|nombre réel|Montant Remboursé AM CCAM, y compris factures FIDES||
`mnt_remb_dia`|nombre réel|Montant Remboursé AM Alternative à la dialyse en centre, y compris factures FIDES||
`mnt_remb_dm_ext`|nombre réel|Montant Remboursé AM DM externe, y compris factures FIDES||
`mnt_remb_ffm`|nombre réel|Montant Remboursé AM FFM, y compris factures FIDES||
`mnt_remb_ftn`|nombre réel|Montant Remboursé AM FTN, y compris factures FIDES||
`MNT_REMB_MED_EXT`|nombre réel|Montant Remboursé AM  Médicaments externe||
`mnt_remb_ngap`|nombre réel|Montant Remboursé AM NGAP, y compris factures FIDES||
`mnt_remb_se`|nombre réel|Montant Remboursé AM SE, y compris factures FIDES||
`mnt_val`|nombre réel|Montant AM effectivement valorisé par OVALIDE||
`mnt_val_atu`|nombre réel|Montant AM effectivement valorisé par OVALIDE ATU||
`mnt_val_ccam`|nombre réel|Montant AM effectivement valorisé par OVALIDE CCAM||
`mnt_val_dia`|nombre réel|Montant AM effectivement valorisé par OVALIDE Alternative à la dialyse en centre||
`mnt_val_dm_ext`|nombre réel|Montant AM effectivement valorisé par OVALIDE DM externe||
`mnt_val_ffm`|nombre réel|Montant AM effectivement valorisé par OVALIDE FFM||
`mnt_val_ftn`|nombre réel|Montant AM effectivement valorisé par OVALIDE FTN||
`MNT_VAL_MED_EXT`|nombre réel|Montant AM effectivement valorisé par OVALIDE Médicaments externe||
`mnt_val_ngap`|nombre réel|Montant AM effectivement valorisé par OVALIDE NGAP||
`MNT_VAL_PI`|nombre réel|Montant AM effectivement valorisé par OVALIDE PI||
`mnt_val_se`|nombre réel|Montant AM effectivement valorisé par OVALIDE SE||
`nbligne`|nombre entier|Nb lignes de la facture||
`NON_SEJ_FAC_AM`|chaîne de caractères|Variable &quot;Motif de non facturation à l&#x27;assurance maladie&quot; du RAFAEL-A||
`SEJ_FAC_AM`|chaîne de caractères|Variable &quot;Séjour facturable à l&#x27;assurance maladie&quot; du RAFAEL-A||
`SEQ_NUM`|chaîne de caractères|n°  de facture séquentiel||
`valo`|chaîne de caractères|Type de valorisation du séjour||
`TOP_TMF`|chaîne de caractères|tmf||
`pf18`|chaîne de caractères|Participation forfaitaire 18 euros déduite sur la facture||
`MNT_BR_PI`|nombre réel|Montant Base de remboursement Prestations Intermédiares||
`MNT_REMB_PI`|nombre réel|Montant Remboursé AM Prestations Intermédiares||
`MNT_BR_I04`|nombre réel|Montant Base de remboursement Forfait Innovation I04||
`MNT_REMB_I04`|nombre réel|Montant Remboursé AM Forfait Innovation I04||
`MNT_VAL_I04`|nombre réel|Montant AM effectivement valorisé par OVALIDE Forfait Innovation I04||
`MNT_BR_MOP`|nombre entier|||
`MNT_REMB_MOP`|nombre entier|||
`MNT_VAL_MOP`|nombre entier|||
