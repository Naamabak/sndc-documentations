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
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
</tr>
<tr class="odd">
<th>ben_nir_psa</th>
<th>IR_BEN_R</th>
<th></th>
</tr>
<tr class="odd">
<th>ben_sex_cod</th>
<th>IR_BEN_R</th>
<th></th>
</tr>
<tr class="odd">
<th>ben_nai_ann</th>
<th>IR_BEN_R</th>
<th></th>
</tr>
<tr class="odd">
<th>ben_nai_moi</th>
<th>IR_BEN_R</th>
<th></th>
</tr>
<tr class="odd">
<th>code_commune</th>
<th>IR_BEN_R</th>
<th><p>Code commune construit à partir de <em>ben_res_dpt</em> et
<em>ben_res_com</em>, et <em>org_aff_ben</em> en utilisant le script de
la <a
href="https://documentation-snds.health-data-hub.fr/fiches/localisation_geographique_beneficiaires.html#construction-de-la-localisation-dans-le-sniiram"><u>documentation
du SNDS</u></a></p>
<p>On sélectionne ensuite le code commune associé à la date de mise à
jour des données la plus récente (<em>ben_dte_maj</em>)</p></th>
</tr>
<tr class="odd">
<th>ben_dcd_dte</th>
<th>IR_BEN_R</th>
<th>Date de décès la plus récente renseignée dans la table (Remarque :
Si le patient est en vie, la date sera le 1er Janvier 1600)</th>
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
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
</tr>
<tr class="odd">
<th>ben_nir_psa</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
<tr class="odd">
<th>med_mtf_code</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
<tr class="odd">
<th>imb_etm_nat</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
<tr class="odd">
<th>imb_ald_dtd</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
<tr class="odd">
<th>imb_ald_dtf</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
<tr class="odd">
<th>ins_dte</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
<tr class="odd">
<th>upd_dte</th>
<th>IR_IMB_R</th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
