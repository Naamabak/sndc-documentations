# Traitement préliminaire des tables du DCIR 
<!-- SPDX-License-Identifier: MPL-2.0 -->

Afin d'éviter de faire systématiquement la jointure entre la table des
prestations **ER\_PRS_F**, une table affinée **ER_XXX_F**, on effectue un
prétraitement des tables du DCIR utilisées en remplaçant les 9 clés de
jointure par la variable dcir_key_id, et en ne sélectionnant que les
variables utiles. On ajoute également une clé permettant d'identifier
une visite de façon unique dans le DCIR, *dcir_visit_id*, construite à
partir de 11 variables. En outre, lors de ce pré-traitement, on prend en
compte les régularisations, c'est à dire qu'une même prestation peut
comporter plusieurs lignes, typiquement :

-   une ligne erronée
-   une ligne qui annule la première ligne
-   une ligne de correction

Pour ce faire :

-   On joint la table affinée avec ER_PRS_F en ne récupérant que les
    variables d'intérêt
-   On somme la variable de quantité en groupant par :
    -   ben_nir_psa,
    -   ben_rng_gem,
    -   exe_soi_dtd,
    -   ben_res_dpt,
    -   org_aff_ben,
    -   pse_spe_cod,
    -   psp_spe_cod
    -   variable quantité de la table affinées
    -   code acte, médicament, etc de la table affinée

-   On indexe sur la nouvelle variable dcir_visit_id
-   On filtre en ne prenant que les actes dont la quantité est positive

NB : Pour ER_CAM_F, la quantité se trouve dans ER_PRS_F

## \_ER\_PRS\_F

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 10%" />
<col style="width: 30%" />
<col style="width: 47%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="even">
<td>ben_nir_psa</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>exe_soi_dtd</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>exe_soi_dtf</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>prs_nat_ref</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>pfs_exe_num</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pse_spe_cod</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>pse_act_nat</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>psp_spe_cod</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>psp_act_nat</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pre_pre_dtd</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>prs_act_qte</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>cpl_maj_top</td>
<td>ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dcir_key_id</td>
<td>Calculé</td>
<td>hachage des 9 clés de jointure du DCIR</td>
<td><em>dpn_qlf</em> &lt;&gt; ‘71’ et <em>prs_dpn_qlp</em> &lt;&gt; ‘71’
(on retire les lignes transmises pour information et ne font pas l’objet
d’un remboursement)</td>
</tr>
<tr class="even">
<td>dcir_visit_id</td>
<td>Calculé</td>
<td><p>hachage(ben_nir_psa, ben_rng_gem,</p>
<p>COALESCE(etb_exe_fin, etb_pre_fin, ‘0’),</p>
<p>exe_soi_dtd,</p>
<p>exe_soi_amd,</p>
<p>exe_soi_dtf,</p>
<p>prs_nat_ref,</p>
<p>pfs_exe_num,</p>
<p>pfs_pre_num,</p>
<p>org_cle_new)</p></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_exe_fin</td>
<td>ER_ETE_F</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

## \_ER\_ETE\_F

Certaines prestations de la table **ER_ETE_F** concernent les actes et
consultations externes des hôpitaux publics, on retire ces prestations
avec le filtre *ete_ind_taa* \<\> 1.

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 11%" />
<col style="width: 68%" />
<col style="width: 7%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable</strong></td>
<td><strong>Table d’origine</strong></td>
<td><strong>Description</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="even">
<td>etb_exe_fin</td>
<td>ER_ETE_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>ete_cat_cod</td>
<td>ER_ETE_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>etb_cat_rg1</td>
<td>IR_CET_V</td>
<td>Joindre <strong>ET_ETE_F</strong> avec <strong>IR_CET_V</strong> sur
<em>ete_cat_cod = etb_cat_cod</em></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>ben_nir_psa</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>prs_nat_ref</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pse_spe_cod</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>pse_act_nat</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>exe_soi_dtd</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>exe_soi_dtf</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dcir_visit_id</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>prs_nat_ref</td>
<td><strong>_ER_PRS_F</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>quantity</td>
<td>calculé</td>
<td><p>Régularisation : somme des quantités associées à une même visite
:</p>
<p>SUM(<em>prs_act_qte</em>)</p></td>
<td></td>
</tr>
</tbody>
</table>

## \_ER\_PHA\_F

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 10%" />
<col style="width: 63%" />
<col style="width: 12%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="even">
<td>pha_prs_c13</td>
<td>ER_PHA_F</td>
<td></td>
<td>pha_prs_c13!= 0</td>
</tr>
<tr class="odd">
<td>quantity</td>
<td>calculé</td>
<td><p>Nombre de doses (pilules, gouttes, etc.) administrées à une
personne.</p>
<p>Calculé à partir de <em>pha_upc_nbr</em> et <em>pha_act_qsn (Le
calcul des quantités est réalisé dans une macro (drug_cases) détaillée
dans la partie Macros)</em></p>
<p>Pour obtenir <em>pha_dos_unt_dses →</em> joindre
<strong>ER_PHA_F</strong> à <strong>IR_PHA_R</strong> sur
<em>pha_prs_c13 = pha_cip_c13</em></p></td>
<td></td>
</tr>
<tr class="even">
<td>pha_dos_uni</td>
<td>IR_PHA_R</td>
<td>unité du médicament</td>
<td></td>
</tr>
<tr class="odd">
<td>psp_spe_cod</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>psp_act_nat</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pre_pre_dtd</td>
<td>_ER_PRS_F</td>
<td>Date de dispensation en pharmacie si elle existe, sinon date de
prescription du médicament : COALESCE<em>(exe_soi_dtd,</em>
<em>pre_pre_dtd</em> )</td>
<td></td>
</tr>
<tr class="odd">
<td>dcir_visit_id</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### Code utilisé pour calculer la variable quantity :

```sql

CASE
    WHEN pha_upc_nbr IS NULL -- Certaines doses de médicaments sont pas dans IR_PHA_R
    THEN SUM(a.pha_act_qsn) -- On garde le nombre de boites

    WHEN (POSITION('+' IN pha_upc_nbr) \> 0) -- Certains médicaments sont sous la forme 3 pilules + 5 sachets : il est impossible de savoir lequel garder
    THEN SUM(a.pha_act_qsn) -- On garde juste le nombre de boites

    WHEN (POSITION('/' IN pha_upc_nbr) = 0) -- doses de la forme "3 DOSES" ou "3", ce qui signifie que la boite contient 3 doses (solides ou liquides) et 3 doses solides.
    THEN

        (CASE
            WHEN (POSITION(' ' IN pha_upc_nbr) \> 0) -- Cas pour "3 doses"
            THEN CAST(SUBSTR(pha_upc_nbr, 0, POSITION(\' \' IN pha_upc_nbr)) AS INTEGER) \* SUM(a.pha_act_qsn) -- On suppose que la quantité vaut nombre de boites * 3

            ELSE -- Cas pour "3"
                pha_upc_nbr::integer * SUM(a.pha_act_qsn) -- La quantité est le nombre de boîtes * 3

        END)

    ELSE -- Lots de la forme 3 / 2 ML (la boîte contient 3 doses de 2 ML)
        CAST(SUBSTR(pha_upc_nbr, 0, POSITION('/' IN pha_upc_nbr)) AS INTEGER) * SUM(a.pha_act_qsn) -- on suppose que la quantité est nombre de boîtes * 3

    END quantity

```

## \_ER\_UCD\_F

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 9%" />
<col style="width: 52%" />
<col style="width: 27%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="even">
<td>ucd_ucd_cod</td>
<td>ER_UCD_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>quantity</td>
<td>calculé</td>
<td><p>Régularisation : somme des quantités associées à une même visite
:</p>
<p>SUM(<em>ucd_dlv_nbr * sign(prs_act_qte)</em>)</p></td>
<td></td>
</tr>
<tr class="even">
<td>psp_spe_cod</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>psp_act_nat</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pse_spe_cod</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pre_pre_dtd</td>
<td>_ER_PRS_F</td>
<td>Date de dispensation si elle existe, sinon date de prescription du
médicament : COALESCE<em>(exe_soi_dtd,</em> <em>pre_pre_dtd</em> )</td>
<td></td>
</tr>
<tr class="odd">
<td>dcir_visit_id</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dcir_key_id</td>
<td>calculé</td>
<td>hachage des 9 clés de jointure du DCIR</td>
<td></td>
</tr>
</tbody>
</table>

## \_ER\_BIO\_F

<table>
<colgroup>
<col style="width: 10%" />
<col style="width: 12%" />
<col style="width: 50%" />
<col style="width: 27%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="even">
<td>bio_prs_ide</td>
<td>ER_BIO_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>pfs_exe_num</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>ben_nir_psa</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>exe_soi_dtd</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>dcir_visit_id</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>quantity</td>
<td>calculé</td>
<td>SUM(<em>bio_act_qsn</em>) de <strong>_ER_BIO_F</strong></td>
<td></td>
</tr>
</tbody>
</table>

## \_ER\_CAM\_F 

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 10%" />
<col style="width: 50%" />
<col style="width: 27%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Variable</strong></td>
<td><strong>Provenance</strong></td>
<td><strong>Description</strong></td>
<td><strong>Filtre</strong></td>
</tr>
<tr class="even">
<td>cam_prs_ide</td>
<td>ER_CAM_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>ben_nir_psa</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>exe_soi_dtd</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dcir_visit_id</td>
<td>_ER_PRS_F</td>
<td></td>
<td><em>cpl_maj_top</em> &lt; 2</td>
</tr>
<tr class="odd">
<td>quantity</td>
<td>calculé</td>
<td>SUM(<em>prs_act_qte</em>) avec <em>prs_act_qte</em> de
<strong>_ER_PRS_F</strong></td>
<td></td>
</tr>
</tbody>
</table>

## \_ER\_TIP\_F

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 9%" />
<col style="width: 51%" />
<col style="width: 26%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Variable</td>
<td>Provenance</td>
<td>Description</td>
<td>Filtre</td>
</tr>
<tr class="even">
<td>tip_prs_ide</td>
<td>ER_TIP_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>tip_acl_dtd</td>
<td>ER_TIP_F</td>
<td>COALESCE(MAX(<em>tip_acl_dtd</em>), <em>exe_soi_dtd</em>))</td>
<td></td>
</tr>
<tr class="even">
<td>tip_acl_dtf</td>
<td>ER_TIP_F</td>
<td>MAX(<em>tip_acl_dtf</em>)</td>
<td></td>
</tr>
<tr class="odd">
<td>tip_act_qsn</td>
<td>ER_TIP_F</td>
<td>sum(<em>tip_act_qsn</em>)</td>
<td></td>
</tr>
<tr class="even">
<td>tip_prs_typ</td>
<td>ER_TIP_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>etb_pre_fin</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>dcir_visit_id</td>
<td>_ER_PRS_F</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>quantity</td>
<td>calculé</td>
<td>SUM(tip_act_qsn) de <strong>ER_TIP_F</strong></td>
<td></td>
</tr>
</tbody>
</table>
