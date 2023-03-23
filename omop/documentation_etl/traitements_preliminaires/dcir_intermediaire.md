# **Traitement préliminaire des tables du DCIR** 
<!-- SPDX-License-Identifier: MPL-2.0 -->

Afin d’éviter de faire systématiquement la jointure entre la table des
prestations **ER\_PRS\_F**, une table affinée **ER\_XXX\_F**, on
effectue un prétraitement des tables du DCIR utilisées en remplaçant les
9 clés de jointure par la variable dcir\_key\_id, et en ne sélectionnant
que les variables utiles.

On ajoute également une clé permettant d’identifier une visite de façon
unique dans le DCIR, *dcir\_visit\_id*, construite à partir de 11
variables. En outre, lors de ce pré-traitement, on prend en compte les
régularisations, c’est à dire qu’une même prestation peut comporter
plusieurs lignes, typiquement :

-   une ligne erronée

-   une ligne qui annule la première ligne

-   une ligne de correction

Pour ce faire :

-   On joint la table affinée avec ER\_PRS\_F en ne récupérant que les
   variables d’intérêt

-   On somme la variable de quantité en groupant par :

    -   ben\_nir\_psa,

    -   ben\_rng\_gem,

    -   exe\_soi\_dtd,

    -   ben\_res\_dpt,

    -   org\_aff\_ben,

    -   pse\_spe\_cod,

    -   psp\_spe\_cod

    -   variable quantité de la table affinées

    -   code acte, médicament, etc de la table affinée

-   On indexe sur la nouvelle variable dcir\_visit\_id

-   On filtre en ne prenant que les actes dont la quantité est positive

NB : Pour ER\_CAM\_F, la quantité se trouve dans ER\_PRS\_F

## **\_ER\_PRS\_F**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 10%" />
<col style="width: 30%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th>ben_nir_psa</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>exe_soi_dtd</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>exe_soi_dtf</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>prs_nat_ref</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pfs_exe_num</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pse_spe_cod</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pse_act_nat</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>psp_spe_cod</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>psp_act_nat</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pre_pre_dtd</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>prs_act_qte</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>cpl_maj_top</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_key_id</th>
<th>Calculé</th>
<th>hachage des 9 clés de jointure du DCIR</th>
<th><em>dpn_qlf</em> &lt;&gt; ‘71’ et <em>prs_dpn_qlp</em> &lt;&gt; ‘71’
(on retire les lignes transmises pour information et ne font pas l’objet
d’un remboursement)</th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th>Calculé</th>
<th><p>hachage(ben_nir_psa, ben_rng_gem,</p>
<p>etb_pre_fin,</p>
<p>exe_soi_dtd,</p>
<p>exe_soi_amd,</p>
<p>exe_soi_dtf,</p>
<p>prs_nat_ref,</p>
<p>pfs_exe_num,</p>
<p>pfs_pre_num,</p>
<p>org_cle_new)</p></th>
<th></th>
</tr>
<tr class="odd">
<th>prs_pai_mnt</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>bse_rem_mnt</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>cpl_rem_mnt</th>
<th>ER_PRS_F</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **\_ER\_ETE\_F**

Certaines prestations de la table **ER\_ETE\_F** concernent les actes et
consultations externes des hôpitaux publics, on retire ces prestations
avec le filtre *ete\_ind\_taa* &lt;&gt; 1.

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 11%" />
<col style="width: 68%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Table d’origine</strong></th>
<th><strong>Description</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th>etb_exe_fin</th>
<th>ER_ETE_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>ete_cat_cod</th>
<th>ER_ETE_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>prs_ppu_sec</th>
<th>ER_ETE_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_cat_rg1</th>
<th>IR_CET_V</th>
<th>Joindre <strong>ET_ETE_F</strong> avec <strong>IR_CET_V</strong> sur
<em>ete_cat_cod = etb_cat_cod</em></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>ben_nir_psa</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>prs_nat_ref</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pse_spe_cod</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pse_act_nat</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>exe_soi_dtd</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>exe_soi_dtf</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th><strong>_ER_PRS_F</strong></th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>quantity</th>
<th>calculé</th>
<th><p>Régularisation : somme des quantités associées à une même visite
:</p>
<p>SUM(<em>prs_act_qte</em>)</p></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **\_ER\_PHA\_F**

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 10%" />
<col style="width: 63%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th>pha_prs_c13</th>
<th>ER_PHA_F</th>
<th></th>
<th>pha_prs_c13!= 0</th>
</tr>
<tr class="odd">
<th>quantity</th>
<th>calculé</th>
<th><p>Nombre de doses (pilules, gouttes, etc.) administrées à une
personne.</p>
<p>Calculé à partir de <em>pha_unt_nbr_dses</em> et <em>pha_act_qsn (Le
calcul des quantités est réalisé dans une macro (drug_cases) détaillée
dans la partie Macros)</em></p>
<p>Pour obtenir <em>pha_dos_unt_dses →</em> joindre
<strong>ER_PHA_F</strong> à <strong>IR_PHA_R</strong> sur
<em>pha_prs_c13 = pha_cip_c13</em></p></th>
<th></th>
</tr>
<tr class="odd">
<th>psp_spe_cod</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>psp_act_nat</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pre_pre_dtd</th>
<th>_ER_PRS_F</th>
<th>Date de prescription du médicament si elle existe, sinon date de
dispensation en pharmacie : COALESCE(<em>pre_pre_dtd,
exe_soi_dtd</em>)</th>
<th></th>
</tr>
<tr class="odd">
<th>pfs_exe_num</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **\_ER\_UCD\_F**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 9%" />
<col style="width: 52%" />
<col style="width: 27%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th>ucd_ucd_cod</th>
<th>ER_UCD_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>ucd_dlv_nbr</th>
<th>ER_UCD_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>psp_spe_cod</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>psp_act_nat</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pse_spe_cod</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pre_pre_dtd</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pfs_exe_num</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_key_id</th>
<th>calculé</th>
<th>hachage des 9 clés de jointure du DCIR</th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>


## **\_ER\_BIO\_F**

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 12%" />
<col style="width: 50%" />
<col style="width: 27%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th>bio_prs_ide</th>
<th>ER_BIO_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>bio_act_qsn</th>
<th>ER_BIO_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pfs_exe_num</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>ben_nir_psa</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>exe_soi_dtd</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>quantity</th>
<th>calculé</th>
<th>SUM(<em>prs_act_qte</em>) de <strong>_ER_PRS_F</strong></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **\_ER\_CAM\_F** 

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 10%" />
<col style="width: 50%" />
<col style="width: 27%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Provenance</strong></th>
<th><strong>Description</strong></th>
<th><strong>Filtre</strong></th>
</tr>
<tr class="odd">
<th>cam_prs_ide</th>
<th>ER_CAM_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>pfs_exe_num</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>ben_nir_psa</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>exe_soi_dtd</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>quantity</th>
<th>calculé</th>
<th>SUM(<em>prs_act_qte</em>) avec <em>prs_act_qte</em> de
<strong>_ER_PRS_F</strong></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## **\_ER\_TIP\_F**

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 9%" />
<col style="width: 51%" />
<col style="width: 26%" />
</colgroup>
<thead>
<tr class="header">
<th>Variable</th>
<th>Provenance</th>
<th>Description</th>
<th>Filtre</th>
</tr>
<tr class="odd">
<th>tip_prs_ide</th>
<th>ER_TIP_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>tip_acl_dtd</th>
<th>ER_TIP_F</th>
<th>COALESCE(MAX(<em>tip_acl_dtd</em>), <em>exe_soi_dtd</em>))</th>
<th></th>
</tr>
<tr class="odd">
<th>tip_acl_dtf</th>
<th>ER_TIP_F</th>
<th>MAX(<em>tip_acl_dtf</em>)</th>
<th></th>
</tr>
<tr class="odd">
<th>tip_act_qsn</th>
<th>ER_TIP_F</th>
<th>sum(<em>tip_act_qsn</em>)</th>
<th></th>
</tr>
<tr class="odd">
<th>pfs_exe_num</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>etb_pre_fin</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>dcir_visit_id</th>
<th>_ER_PRS_F</th>
<th></th>
<th></th>
</tr>
<tr class="odd">
<th>quantity</th>
<th>calculé</th>
<th>SUM(tip_act_qsn</th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

::: tip Accéder au code source
Le code source est disponible sur le dépôt Gitlab [suivant](https://gitlab.com/healthdatahub/snds_omop)
:::
