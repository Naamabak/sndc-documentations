## Schéma

- Titre : Table pathologies de la cartographie des pathologies pour l'année AAAA et l'algorithme N
<br />
- Clé(s) étrangère(s) : <br />
`ID_CARTO` => table [CT_IDE_AAAA_GN](/tables/CT_IDE_AAAA_GN) [ `ID_CARTO` ]<br />

### Liste des variables
<br />
<div>
    <a href="https://gitlab.com/healthdatahub/schema-snds/edit/master/schemas/CARTOGRAPHIE_PATHOLOGIES/CT_IND_AAAA_GN.json"  
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
`DPT`|chaîne de caractères|Département de résidence du bénéficiaire||
`ID_CARTO`|chaîne de caractères|Identifiant bénéficiaire cartographie||
`NEW_COD_REG`|chaîne de caractères|Région de résidence du bénéficiaire (nouveau codage)||
`OLD_COD_REG`|chaîne de caractères|Région de résidence du bénéficiaire (ancien codage)||
`PETIT_REGIME`|chaîne de caractères|Petit régime MSA au 31 décembre de l&#x27;année N||
`PETIT_RGM_AUT_AGR`|nombre entier|Au moins une consommation au titre dans un autre petit régime (MSA) dans l&#x27;année||
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
`RGM_RSI`|nombre entier|Au moins une consommation au RSI dans l&#x27;année||
`RGM_SLM`|nombre entier|Au moins une consommation dans une SLM dans l&#x27;année||
`RGM_SNCF`|nombre entier|Au moins une consommation au régime de la SNCF dans l&#x27;année||
`SOURCE`|chaîne de caractères|Source de provenance du bénéficiaire||
`SUP_ABPCOIR_IND_NNEXCLU`|nombre entier|Maladies respiratoires chroniques (avec ou sans mucoviscidose)||
`SUP_ACORTI_MED`|nombre entier|Traitement corticoide (hors pathologies, traitements, maternité ou hospitalisations)||
`SUP_ACORTI_MED_NNEXCLU`|nombre entier|Traitement corticoide (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`SUP_AINS_MED`|nombre entier|Traitement AINS (hors pathologies, traitements, maternité ou hospitalisations)||
`SUP_AINS_MED_NNEXCLU`|nombre entier|Traitement AINS (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`SUP_ALDAUTR_0_IND`|nombre entier|Autres affections de longue durée non retrouvées ou non ventilées||
`SUP_ALDAUTR_10_IND`|nombre entier|Autres affections de longue durée pour hémoglobinopathies, hémolyses chroniques constitutionnelles et acquises sévères||
`SUP_ALDAUTR_19_IND`|nombre entier|Autres affections de longue durée pour néphropathie chronique grave et syndrome néphrotique primitif (hors IRCT)||
`SUP_ALDAUTR_2_IND`|nombre entier|Autres affections de longue durée pour insuffisances médullaires et autres cytopénies chroniques||
`SUP_ALDAUTR_23_IND`|nombre entier|Autres affections de longue durée pour affections psychiatriques (anomalies chromosomiques)||
`SUP_ALDAUTR_26_IND`|nombre entier|Autres affections de longue durée pour scoliose structurale évolutive||
`SUP_ALDAUTR_29_IND`|nombre entier|Autres affections de longue durée pour tuberculose active, lèpre||
`SUP_ALDAUTR_30_IND`|nombre entier|Autres affections de longue durée pour tumeurs à évolution imprévisible ou inconnue||
`SUP_ALDAUTR_31_IND`|nombre entier|Autres affections de longue durée hors liste (31)||
`SUP_ALDAUTR_32_IND`|nombre entier|Autres affections de longue durée pour polypathologie (32)||
`SUP_ALDAUTR_4_IND`|nombre entier|Autres affections de longue durée pour bilharziose compliquée||
`SUP_ANTALG_MED`|nombre entier|Traitement antalgique (hors pathologies, traitements, maternité ou hospitalisations)||
`SUP_ANTALG_MED_NNEXCLU`|nombre entier|Traitement antalgique (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`SUP_ARTHROS_MED`|nombre entier|Traitement antalgique ou anti-inflammatoire (hors pathologies, traitements, maternité ou hospitalisations)||
`SUP_ARTHROS_MED_NNEXCLU`|nombre entier|Traitement antalgique ou anti-inflammatoire (avec ou sans pathologies, traitements, maternité ou hospitalisations)||
`SUP_CAN_CAT`|nombre entier|Cancers||
`SUP_CANACT_CAT`|nombre entier|Cancers actifs||
`SUP_CANAUTR_CAT`|nombre entier|Autres cancers||
`SUP_CANCOLO_CAT`|nombre entier|Cancer colorectal||
`SUP_CANPOUM_CAT`|nombre entier|Cancer du poumon||
`SUP_CANPROS_CAT`|nombre entier|Cancer de la prostate||
`SUP_CANSEIF_CAT`|nombre entier|Cancer du sein de la femme||
`SUP_CANSUR_CAT`|nombre entier|Cancers sous surveillance||
`SUP_CV_CAT`|nombre entier|Maladies cardioneurovasculaires||
`SUP_CVAIG_CAT`|nombre entier|Maladies cardioneurovasculaires aigues||
`SUP_CVAVC_CAT`|nombre entier|Accident vasculaire cérébral||
`SUP_CVCHR_CAT`|nombre entier|Maladies cardioneurovasculaires chroniques||
`SUP_CVIC_CAT`|nombre entier|Insuffisance cardiaque||
`SUP_CVIDMCOR_CAT`|nombre entier|Maladie coronaire||
`SUP_FAGLP1_IND`|nombre entier|Diabète traité par agoniste du GLP-1||
`SUP_FANTIHTA_MED_NNEXCLU`|nombre entier|Traitements antihypertenseurs (avec ou sans pathologies)||
`SUP_FHYPOLI_MED_NNEXCLU`|nombre entier|Traitements hypolipémiants (avec ou sans pathologies)||
`SUP_FINSUL_IND`|nombre entier|Diabète insulino-traité||
`SUP_FRV_CAT`|nombre entier|Traitements du risque vasculaire (hors pathologies)||
`SUP_FRV_CAT_NNEXCLU`|nombre entier|Traitements du risque vasculaire (avec ou sans pathologies)||
`SUP_FRVDIAB_CAT`|nombre entier|Diabète (avec ou sans pathologies) ou traitements du risque vasculaire (hors pathologies)||
`SUP_HFOI_IND`|nombre entier|Maladies du foie (hors mucoviscidose)||
`SUP_HFOIPAN_IND_NNEXCLU`|nombre entier|Maladies du foie ou du pancréas (avec ou sans mucoviscidose)||
`SUP_HOSPIT_PONCT`|nombre entier|Hospitalisations ponctuelles (avec ou sans pathologies, traitements ou maternité)||
`SUP_HOSPIT_PONCT_EXCLU`|nombre entier|Hospitalisations ponctuelles (hors pathologies, traitements ou maternité)||
`SUP_HPAN_IND`|nombre entier|Maladies du pancréas (hors mucoviscidose)||
`SUP_HVHC_CAT`|nombre entier|hépatite C chronique||
`SUP_HVHC_CHR`|nombre entier|hépatite C chronique ou guérie ||
`SUP_INFLAM_CAT`|nombre entier|Maladies inflammatoires chroniques||
`SUP_INFRARVIH_CAT`|nombre entier|Maladies inflammatoires ou rares ou VIH ou SIDA||
`SUP_IRHEMOP_IND_EXCLU`|nombre entier|Hémophilie||
`SUP_IRTRHEMOSEV_IND`|nombre entier|Autres troubles de l&#x27;hémostase graves||
`SUP_MATERNI_IND_EXCLU`|nombre entier|Maternité (hors pathologies et traitements)||
`SUP_NDEMALZ_IND`|nombre entier|Maladie d&#x27;Alzheimer||
`SUP_NDEMAUT_IND`|nombre entier|Autres démences||
`SUP_NDEMPAR_CAT`|nombre entier|Maladies dégénératives (démences et Parkinson)||
`SUP_NEUDEG_CAT`|nombre entier|Maladies neurologiques ou dégénératives||
`SUP_NEURO_CAT`|nombre entier|Maladies neurologiques||
`SUP_PADDALC_IND`|nombre entier|Troubles addictifs liés à l&#x27;utilisation d&#x27;alcool||
`SUP_PADDAUT_IND`|nombre entier|Troubles addictifs (hormis ceux liés à l&#x27;utilisation d&#x27;alcool, du tabac et du cannabis)||
`SUP_PADDCAN_IND`|nombre entier|Troubles addictifs liés à l&#x27;utilisation du cannabis||
`SUP_PADDTAB_IND`|nombre entier|Troubles addictifs liés à l&#x27;utilisation du tabac||
`SUP_PANTIDE_MED_NNEXCLU`|nombre entier|Traitements antidépresseurs ou régulateurs de l&#x27;humeur (avec ou sans pathologies)||
`SUP_PANXIOL_MED_NNEXCLU`|nombre entier|Traitements anxiolytiques (avec ou sans pathologies)||
`SUP_PATHO_CAT_EXCLU`|nombre entier|Au moins une pathologie||
`SUP_PATHO_CAT_NNEXCLU`|nombre entier|Au moins une pathologie ou traitement||
`SUP_PATMAT_CAT`|nombre entier|Au moins une pathologie, traitement ou maternité||
`SUP_PATMATHOS_CAT`|nombre entier|Au moins une pathologie, traitement, maternité ou hospitalisation||
`SUP_PETIT_CONSO`|nombre entier|Pas de pathologies, traitements, maternité ou hospitalisations||
`SUP_PETIT_CONSO_EXCLU`|nombre entier|Pas de pathologies, traitements, maternité, hospitalisations ou traitement antalgique ou anti-inflammatoire||
`SUP_PHYPNOT_MED_NNEXCLU`|nombre entier|Traitements hypnotiques (avec ou sans pathologies)||
`SUP_PNEUROL_MED_NNEXCLU`|nombre entier|Traitements neuroleptiques (avec ou sans pathologies)||
`SUP_POPTOT_CAT`|nombre entier|Total consommants tous régimes||
`SUP_PSY_CAT`|nombre entier|Maladies psychiatriques ou psychotropes||
`SUP_PSYMED_CAT`|nombre entier|Traitements psychotropes (hors pathologies)||
`SUP_PSYMED_CAT_NNEXCLU`|nombre entier|Traitements psychotropes (avec ou sans pathologies)||
`SUP_PSYPAT_CAT`|nombre entier|Maladies psychiatriques||
`SUP_PTRBIPO_IND`|nombre entier|Troubles maniaques et bipolaires||
`SUP_PTRDHUM_IND`|nombre entier|Dépression et autres troubles de l&#x27;humeur||
`SUP_PTRNEVR_IND`|nombre entier|Troubles névrotiques liés au stress et somatoformes||
`SUP_RARES_CAT`|nombre entier|Maladies rares||
`SUP_RDIACOU_IND`|nombre entier|Dialyse courte||
`SUP_RDIAPER_IND`|nombre entier|Dialyse péritonéale chronique||
`SUP_RHEMDIA_IND`|nombre entier|Hémodialyse chronique||
`SUP_RIRCT_CAT`|nombre entier|Insuffisance rénale chronique terminale||
`TOP_ABPCOIR_IND`|nombre entier|Maladies respiratoires chroniques (hors mucoviscidose)||
`TOP_ALDAUTR_IND`|nombre entier|Autres affections de longue durée (dont 31 et 32)||
`TOP_CANAUTR_ACT`|nombre entier|Autres cancers actifs||
`TOP_CANAUTR_SUR`|nombre entier|Autres cancers sous surveillance||
`TOP_CANCOLO_ACT`|nombre entier|Cancer colorectal actif||
`TOP_CANCOLO_SUR`|nombre entier|Cancer colorectal sous surveillance||
`TOP_CANPOUM_ACT`|nombre entier|Cancer du poumon actif||
`TOP_CANPOUM_SUR`|nombre entier|Cancer du poumon sous surveillance||
`TOP_CANPROS_ACT`|nombre entier|Cancer de la prostate actif||
`TOP_CANPROS_SUR`|nombre entier|Cancer de la prostate sous surveillance||
`TOP_CANSEIF_ACT`|nombre entier|Cancer du sein de la femme actif||
`TOP_CANSEIF_SUR`|nombre entier|Cancer du sein de la femme sous surveillance||
`TOP_CVAOMI_IND`|nombre entier|Artériopathie oblitérante du membre inférieur||
`TOP_CVAUTRE_IND`|nombre entier|Autres affections cardiovasculaires||
`TOP_CVAVC_AIG`|nombre entier|Accident vasculaire cérébral aigu||
`TOP_CVAVC_SEQ`|nombre entier|Séquelle d&#x27;accident vasculaire cérébral||
`TOP_CVCORON_CHR`|nombre entier|Maladie coronaire chronique||
`TOP_CVEMBOL_AIG`|nombre entier|Embolie pulmonaire aiguë||
`TOP_CVIC_AIG`|nombre entier|Insuffisance cardiaque aiguë||
`TOP_CVIC_CHR`|nombre entier|Insuffisance cardiaque chronique||
`TOP_CVIDM_AIG`|nombre entier|Syndrome coronaire aigu||
`TOP_CVTRRYC_IND`|nombre entier|Troubles du rythme ou de la conduction cardiaque||
`TOP_CVVALVE_IND`|nombre entier|Maladie valvulaire||
`TOP_FANTIHTA_MED`|nombre entier|Traitements antihypertenseurs (hors pathologies)||
`TOP_FDIABET_IND`|nombre entier|Diabète||
`TOP_FHYPOLI_MED`|nombre entier|Traitements hypolipémiants (hors pathologies)||
`TOP_HFOIPAN_IND`|nombre entier|Maladies du foie ou du pancréas (hors mucoviscidose)||
`TOP_IND`|nombre entier|Travailleur indépendant||
`TOP_IRAUTRE_IND`|nombre entier|Autres maladies inflammatoires chroniques||
`TOP_IRCRRCH_IND`|nombre entier|Maladies inflammatoires chroniques intestinales||
`TOP_IRHEMOP_IND`|nombre entier|Hémophilie ou troubles de l&#x27;hémostase graves||
`TOP_IRMMHER_IND`|nombre entier|Maladies métaboliques héréditaires ou amylose||
`TOP_IRMUCO_IND`|nombre entier|Mucoviscidose||
`TOP_IRPOLYA_IND`|nombre entier|Polyarthrite rhumatoïde et maladies apparentées||
`TOP_IRSPONA_IND`|nombre entier|Spondylarthrite ankylosante et maladies apparentées||
`TOP_IRVIH_IND`|nombre entier|VIH ou SIDA||
`TOP_MATERNI_IND`|nombre entier|Maternité (avec ou sans pathologies)||
`TOP_MT`|nombre entier|Médecin traitant au 31 décembre de l&#x27;année N||
`TOP_NAUTRES_IND`|nombre entier|Autres affections neurologiques||
`TOP_NDEMENC_IND`|nombre entier|Démences (dont maladie d&#x27;Alzheimer)||
`TOP_NEPILEP_IND`|nombre entier|Epilepsie||
`TOP_NMYOMYA_IND`|nombre entier|Myopathie ou myasthénie||
`TOP_NPARAPL_IND`|nombre entier|Paraplégie||
`TOP_NPARKIN_IND`|nombre entier|Maladie de Parkinson||
`TOP_NSEPLAQ_IND`|nombre entier|Sclérose en plaques||
`TOP_PADDICT_IND`|nombre entier|Troubles addictifs||
`TOP_PANTIDE_MED`|nombre entier|Traitements antidépresseurs ou régulateurs de l&#x27;humeur (hors pathologies)||
`TOP_PANXIOL_MED`|nombre entier|Traitements anxiolytiques (hors pathologies)||
`TOP_PDEPNEV_IND`|nombre entier|Troubles névrotiques et de l&#x27;humeur||
`TOP_PHYPNOT_MED`|nombre entier|Traitements hypnotiques (hors pathologies)||
`TOP_PNEUROL_MED`|nombre entier|Traitements neuroleptiques (hors pathologies)||
`TOP_PRETARD_IND`|nombre entier|Déficience mentale||
`TOP_PSYAUTR_IND`|nombre entier|Autres troubles psychiatriques||
`TOP_PSYCHOS_IND`|nombre entier|Troubles psychotiques||
`TOP_PTRENFA_IND`|nombre entier|Troubles psychiatriques ayant débuté dans l&#x27;enfance||
`TOP_RDIALYSE_IND`|nombre entier|Dialyse chronique||
`TOP_RTRANS_AIG`|nombre entier|Transplantation rénale||
`TOP_RTRANS_CHR`|nombre entier|Suivi de transplantation rénale||
`VERSION`|chaîne de caractères|Version||

