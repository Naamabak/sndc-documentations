# **Traitement préliminaire des référentiels bénéficiaires**
<!-- SPDX-License-Identifier: MPL-2.0 -->

Le référentiel des bénéficiaires IR\_BEN\_R et le référentiel médicalisé
IR\_IMB\_R ont faitl’objet d’un certain nombre de pré-traitements avant
d’être utilisés. Notamment :

-   Dans la table IR\_BEN\_R :

    -   la reconstruction du code commune

    -   la sélection des informations du bénéficiaire recueillies lors
       de la dernière visite à un professionnel de santé (commune de
       résidence, date de décès)

-   Dans la table IR\_IMB\_R :

    -   la suppression des espaces de part et d’autre des codes CIM10

    -   le calcul de la date de début et de fin de pathologie

## **\_IR\_BEN\_R**

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 9%" />
<col style="width: 77%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr class="odd">
<td>ben_nir_psa</td>
<td>IR_BEN_R</td>
<td></td>
</tr>
<tr class="odd">
<td>ben_sex_cod</td>
<td>IR_BEN_R</td>
<td></td>
</tr>
<tr class="odd">
<td>ben_nai_ann</td>
<td>IR_BEN_R</td>
<td></td>
</tr>
<tr class="odd">
<td>ben_nai_moi</td>
<td>IR_BEN_R</td>
<td></td>
</tr>
<tr class="odd">
<td>code_commune</td>
<td>IR_BEN_R</td>
<td><p>Code commune construit à partir de <em>ben_res_dpt</em> et
<em>ben_res_com</em>, et <em>org_aff_ben</em> en utilisant le script de
la <a
href="https://documentation-snds.health-data-hub.fr/snds/fiches/localisation_geographique_beneficiaires.html#construction-de-la-localisation-dans-le-sniiram"><u>documentation
du SNDS</u></a></p>
<p>On sélectionne ensuite le code commune associé à la date de mise à
jour des données la plus récente (<em>ben_dte_maj</em>)</p></td>
</tr>
<tr class="odd">
<td>ben_dcd_dte</td>
<td>IR_BEN_R</td>
<td>Date de décès la plus récente renseignée dans la table (Remarque :
Si le patient est en vie, la date sera le 1er Janvier 1600)</td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **\_IR\_IMB\_R**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 10%" />
<col style="width: 77%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr class="odd">
<td>ben_nir_psa</td>
<td>IR_IMB_R</td>
<td></td>
</tr>
<tr class="odd">
<td>med_mtf_code</td>
<td>IR_IMB_R</td>
<td></td>
</tr>
<tr class="odd">
<td>imb_etm_nat</td>
<td>IR_IMB_R</td>
<td></td>
</tr>
<tr class="odd">
<td>imb_ald_dtd</td>
<td>IR_IMB_R</td>
<td>MIN(imb_ald_dtd) , premier enregistrement de la maladie</td>
</tr>
<tr class="odd">
<td>imb_ald_dtf</td>
<td>IR_IMB_R</td>
<td>MAX(imb_ald_dtf), date de validité de la prise en charge ALD/MT/Accident professionnel la plus récente 
</td>
</tr>
<tr class="odd">
<td>ins_dte</td>
<td>IR_IMB_R</td>
<td>MAX(ins_dte) date de saisie de l’information la plus récente</td>
</tr>
<tr class="odd">
<td>upd_dte</td>
<td>IR_IMB_R</td>
<td>MAX(upd_dte) date de mise à jour la plus récente
</td>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
