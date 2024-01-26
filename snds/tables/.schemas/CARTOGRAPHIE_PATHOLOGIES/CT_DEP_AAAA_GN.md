## Schéma

- Titre : Table dépenses de la cartographie des pathologies pour l'année AAAA et l'algorithme N
<br />
- Clé(s) étrangère(s) : <br />
`ID_CARTO` => table [CT_IDE_AAAA_GN](/tables/CT_IDE_AAAA_GN) [ `ID_CARTO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/CARTOGRAPHIE_PATHOLOGIES/CT_DEP_AAAA_GN.json"  
    arget="_blank" rel="noopener noreferrer">> Éditer le schéma</a>
    <OutboundLink />
</div>
<br />

Nom|Type|Description|Propriétés
-|-|-|-
`AGE`|nombre entier|Age du bénéficiaire||
`ASS_AAH_TOP`|nombre entier|Bénéficiaire de l&#x27;allocation adulte handicapé||
`BEN_ACS_TOP`|nombre entier|Bénéficiaire de l&#x27;aide à la complémentaire santé||
`BEN_ALD_TOP`|nombre entier|Bénéficiaire d&#x27;une exonération du ticket modérateur au titre d&#x27;une affection de longue durée||
`BEN_DCD_AME`|chaîne de caractères|Année et mois de décès du bénéficiaire||
`BEN_DCD_DTE`|nombre entier|Date de décès du bénéficiaire||
`BEN_NAI_ANN`|chaîne de caractères|Année de naissance du bénéficiaire||
`BEN_SEX_COD`|nombre entier|Sexe du bénéficiaire||
`C2S`|nombre entier|Bénéficiaire de la complémentaire santé solidaire||
`CLA_AGE_5`|chaîne de caractères|Classes d&#x27;âge du bénéficiaire (quinquennales)||
`CLA_AGE_CT`|chaîne de caractères|Classes d&#x27;âge du bénéficiaire (cartographie)||
`CMU`|nombre entier|Bénéficiaire de la Couverture Maladie Universelle complémentaire||
`DCD_3112`|nombre entier|Bénéficiaire décédé au 31 décembre de l&#x27;année N||
`DEP_DGF_ACE_BSE`|nombre entier|Actes et consultations externes MCO secteur public remboursables||
`DEP_DGF_ACE_MNT`|nombre entier|Actes et consultations externes MCO secteur public remboursés||
`DEP_DGF_HAD_BSE`|nombre entier|Hospitalisations en HAD secteur public remboursables||
`DEP_DGF_HAD_MNT`|nombre entier|Hospitalisations en HAD secteur public remboursées||
`DEP_DGF_MCOSEJOUR_BSE`|nombre entier|Hospitalisations séjour MCO secteur public remboursables||
`DEP_DGF_MCOSEJOUR_MNT`|nombre entier|Hospitalisations séjour MCO secteur public remboursées||
`DEP_DGF_MCOSUS_BSE`|nombre entier|Hospitalisations liste en sus MCO secteur public remboursables||
`DEP_DGF_MCOSUS_MNT`|nombre entier|Hospitalisations liste en sus MCO secteur public remboursées||
`DEP_DGF_PSY_BSE`|nombre entier|Hospitalisations en psychiatrie secteur public remboursables||
`DEP_DGF_PSY_MNT`|nombre entier|Hospitalisations en psychiatrie secteur public remboursées||
`DEP_DGF_SSR_BSE`|nombre entier|Hospitalisations en SSR secteur public remboursables||
`DEP_DGF_SSR_MNT`|nombre entier|Hospitalisations en SSR secteur public remboursées||
`DEP_IJMALATMP_BSE`|nombre entier|Indemnités journalières maladie et AT/MP remboursables||
`DEP_IJMALATMP_MNT`|nombre entier|Indemnités journalières maladie et AT/MP remboursées||
`DEP_IJMATER_BSE`|nombre entier|Indemnités journalières maternité et autres prestations remboursables||
`DEP_IJMATER_MNT`|nombre entier|Indemnités journalières maternité et autres prestations remboursées||
`DEP_INVALID_BSE`|nombre entier|Prestations d&#x27;invalidité remboursables||
`DEP_INVALID_MNT`|nombre entier|Prestations d&#x27;invalidité remboursées||
`DEP_OQN_HAD_BSE`|nombre entier|Hospitalisations en HAD secteur privé remboursables||
`DEP_OQN_HAD_MNT`|nombre entier|Hospitalisations en HAD secteur privé remboursées||
`DEP_OQN_MCOSEJOUR_BSE`|nombre entier|Hospitalisations séjour MCO secteur privé remboursables||
`DEP_OQN_MCOSEJOUR_MNT`|nombre entier|Hospitalisations séjour MCO secteur privé remboursées||
`DEP_OQN_MCOSUS_BSE`|nombre entier|Hospitalisations liste en sus MCO secteur privé remboursables||
`DEP_OQN_MCOSUS_MNT`|nombre entier|Hospitalisations liste en sus MCO secteur privé remboursées||
`DEP_OQN_PSY_BSE`|nombre entier|Hospitalisations en psychiatrie secteur privé remboursables||
`DEP_OQN_PSY_MNT`|nombre entier|Hospitalisations en psychiatrie secteur privé remboursées||
`DEP_OQN_SSR_BSE`|nombre entier|Hospitalisations en SSR secteur privé remboursables||
`DEP_OQN_SSR_MNT`|nombre entier|Hospitalisations en SSR secteur privé remboursées||
`DEP_SDV_AUTRES_BSE`|nombre entier|Autres dépenses de soins de ville remboursables||
`DEP_SDV_AUTRES_MNT`|nombre entier|Autres dépenses de soins de ville remboursés||
`DEP_SDV_AUTRESAUXIL_BSE`|nombre entier|Soins d&#x27;autres paramédicaux remboursables||
`DEP_SDV_AUTRESAUXIL_MNT`|nombre entier|Soins d&#x27;autres paramédicaux remboursés||
`DEP_SDV_BIO_BSE`|nombre entier|Biologie remboursable||
`DEP_SDV_BIO_MNT`|nombre entier|Biologie remboursée||
`DEP_SDV_HONODENT_BSE`|nombre entier|Soins dentaires remboursables||
`DEP_SDV_HONODENT_MNT`|nombre entier|Soins dentaires remboursés||
`DEP_SDV_HONOGEN_BSE`|nombre entier|Soins de généralistes remboursables||
`DEP_SDV_HONOGEN_MNT`|nombre entier|Soins de généralistes remboursés||
`DEP_SDV_HONOSPE_BSE`|nombre entier|Soins autres spécialistes remboursables||
`DEP_SDV_HONOSPE_MNT`|nombre entier|Soins autres spécialistes remboursés||
`DEP_SDV_INFIRMIER_BSE`|nombre entier|Soins infirmiers remboursables||
`DEP_SDV_INFIRMIER_MNT`|nombre entier|Soins infirmiers remboursés||
`DEP_SDV_KINE_BSE`|nombre entier|Soins de kinésithérapie remboursables||
`DEP_SDV_KINE_MNT`|nombre entier|Soins de kinésithérapie remboursés||
`DEP_SDV_LPP_BSE`|nombre entier|Autres produits de santé remboursables||
`DEP_SDV_LPP_MNT`|nombre entier|Autres produits de santé remboursés||
`DEP_SDV_PHARMACIE_BSE`|nombre entier|Médicaments remboursables||
`DEP_SDV_PHARMACIE_MNT`|nombre entier|Médicaments remboursés||
`DEP_SDV_SAGEFEMME_BSE`|nombre entier|Soins de sages-femmes remboursables||
`DEP_SDV_SAGEFEMME_MNT`|nombre entier|Soins de sages-femmes remboursés||
`DEP_SDV_TRANSPORT_BSE`|nombre entier|Transports remboursables||
`DEP_SDV_TRANSPORT_MNT`|nombre entier|Transports remboursés||
`DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`ID_CARTO`|chaîne de caractères|Identifiant bénéficiaire cartographie||
`NEW_COD_REG`|chaîne de caractères|Région de résidence du bénéficiaire (nouveau codage)||
`OLD_COD_REG`|chaîne de caractères|Région de résidence du bénéficiaire (ancien codage)||
`PETIT_REGIME`|chaîne de caractères|Petit régime MSA au 31 décembre de l&#x27;année N||
`PETIT_RGM_AUT_RGM`|nombre entier|Au moins une consommation au titre dans un autre petit régime (MSA) dans l&#x27;année||
`PETIT_RGM_EXP_AGR`|nombre entier|Au moins une consommation en tant qu&#x27;exploitant agricole (MSA) dans l&#x27;année||
`PETIT_RGM_SAL_AGR`|nombre entier|Au moins une consommation en tant que salarié agricole (MSA) dans l&#x27;année||
`QUINT_DEFA`|nombre entier|Quintile de défavorisation de 2015||
`REGIME`|chaîne de caractères|Régime du bénéficiaire au 31 décembre de l&#x27;année N||
`RGM_BDF`|nombre entier|Au moins une consommation au régime de la Banque de France dans l&#x27;année||
`RGM_BORDEAUX`|nombre entier|Au moins une consommation au régime du Port autonome de Bordeaux dans l&#x27;année||
`RGM_CCI`|nombre entier|Au moins une consommation au régime des Chambres de commerce et d&#x27;industrie dans l&#x27;année||
`RGM_CULTES`|nombre entier|Au moins une consommation au régime des cultes dans l&#x27;année||
`RGM_INCONNU`|nombre entier|Au moins une consommation dans un régime inconnu dans l&#x27;année||
`RGM_MARINS`|nombre entier|Au moins une consommation au régime des marins dans l&#x27;année||
`RGM_MILITAIRES`|nombre entier|Au moins une consommation au régime des militaires dans l&#x27;année||
`RGM_MINES`|nombre entier|Au moins une consommation au régime des mines dans l&#x27;année||
`RGM_MSA`|nombre entier|Au moins une consommation à la MSA dans l&#x27;année||
`RGM_NOTAIRES`|nombre entier|Au moins une consommation au régime des notaires dans l&#x27;année||
`RGM_RATP`|nombre entier|Au moins une consommation au régime de la RATP dans l&#x27;année||
`RGM_RG`|nombre entier|Au moins une consommation au RG dans l&#x27;année||
`RGM_RG_SLM`|nombre entier|Au moins une consommation PMSI RG ou SLM (indéterminé) dans l&#x27;année||
`RGM_RG_SLM_2`|nombre entier|Au moins une consommation RG ou SLM dans l&#x27;année||
`RGM_RSA`|nombre entier|Au moins une consommation au RSI dans l&#x27;année||
`RGM_SLM`|nombre entier|Au moins une consommation dans une SLM dans l&#x27;année||
`RGM_SNCF`|nombre entier|Au moins une consommation au régime de la SNCF dans l&#x27;année||
`SOURCE`|chaîne de caractères|Source de provenance du bénéficiaire||
`TOP_IND`|nombre entier|Travailleur indépendant||
`TOP_MT`|nombre entier|Médecin traitant au 31 décembre de l&#x27;année N||
`TOT_DEP_BSE`|nombre entier|Total des dépenses remboursables||
`TOT_DEP_HOP_BSE`|nombre entier|Total hospitalisations (tous secteurs) remboursables||
`TOT_DEP_HOP_MNT`|nombre entier|Total hospitalisations (tous secteurs) remboursées||
`TOT_DEP_MNT`|nombre entier|Total des dépenses remboursées||
`TOT_DEP_PRESESPECE_BSE`|nombre entier|Total prestations en espèces remboursables||
`TOT_DEP_PRESESPECE_MNT`|nombre entier|Total prestations en espèces remboursées||
`TOT_DEP_SDV_BSE`|nombre entier|Total soins de ville remboursables||
`TOT_DEP_SDV_MNT`|nombre entier|Total soins de ville remboursés||
`VERSION`|chaîne de caractères|Version||

