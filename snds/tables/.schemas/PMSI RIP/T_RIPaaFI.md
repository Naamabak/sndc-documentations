## Schéma


- Titre : interruption de sejour
<br />



- Clé(s) étrangère(s) : <br />

- **Champ(s) :** `ETA_NUM_EPMSI, RIP_NUM`
  => table `[T_RIPaaFB](tables/T_RIPaaFB)` [ `ETA_NUM_EPMSI`, `RIP_NUM` ]<br />

 
### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/applications-du-hdh/schema-snds/-/tree/master/schemas/T_RIPaaFI/T_RIPaaFI.json"
       target="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
</div>
<br />

Nom | Type | Description | Règle de gestion
-|-|-|-



`TYP_ART`| date |Type d'enregistrement||

`ETA_NUM_EPMSI`| date |Numéro FINESS de l’entité juridique||

`ETA_NUM_TWO`| date |Numéro FINESS de l’établissement (site géographique)||

`EXE_SOI_DTD`| date |Date début ||

`EXE_SOI_DTF`| date |Date fin||

`RIP_NUM`| date |Numéro séquentiel de séjour (idem RPSA)||

`FAC_NUM`| date |N° séquentiel de facture||

`DEL_DAT_ENT`| date |Délai par rapport à la date d'entrée||

`SEJ_FIN`| date |Nature d'interruption ou de fin de séjour||

`ETB_NUM`| date |Etablissement de transfert ou de retour ou lieu d'exécution de l'acte||

`ENT_MOI`| date |Mois de la date de début de séjour||

`ENT_ANN`| année |Année de la date de début de séjour||

`SOR_MOI`| date |Mois de la date de fin de séjour||

`SOR_ANN`| année |Année de la date de fin de séjour||

`SEJ_DUR`| date |Durée (Date de fin de séjour-date de début de séjour)||
