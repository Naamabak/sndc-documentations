# Table PROVIDER
<!-- SPDX-License-Identifier: MPL-2.0 -->

## Description

La table PROVIDER contient une liste de prestataires de soins de santé
identifiés de manière unique. Il s\'agit de personnes qui fournissent
des soins de santé pratiqués aux patients, comme les médecins, les
infirmières, les sages-femmes, les kinésithérapeutes, etc.

De nombreuses données sources ne distinguent pas les prestataires
individuels et institutionnels. La table PROVIDER contient les
prestataires individuels. Si la source, au lieu d\'identifier les
prestataires individuels de manière unique, ne fournit que des
informations limitées, comme des enregistrements de prestataires
spécialisés, génériques ou \"regroupés\", la table PROVIDER en donne la
liste.

## Commentaires généraux

-   Le SNDS contient le numéro du professionnel exécutant, mais aucune
    information qui corresponde à ce numéro (nom, prénom, spécialité,
    etc). La table PROVIDER sert donc ici uniquement à répertorier les
    spécialités des prestataires de santé.

-   Les spécialités médicales ont été alignées vers les concepts
    standards d'OMOP-CDM associés.

## Tables et variables utilisées dans le SNDS

-   **Nomenclature IR_SPE_V**
    -   *pfs_spe_cod*
-   **Nomenclature IR_ACT_V**
    -   *pfs_act_nat*
-   **Fichier de correspondance spécialités ↔ OMOP**
    -   *conceptId*
    -   *sourceCode*

## Variables du format OMOP-CDM remplies

<table style="width:100%;">
<colgroup>
<col style="width: 17%" />
<col style="width: 48%" />
<col style="width: 8%" />
<col style="width: 7%" />
<col style="width: 7%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr class="header">
<td><strong>Variable</strong></td>
<td><strong>Règles</strong></td>
<td><strong>Type</strong></td>
<td><strong>Clé primaire</strong></td>
<td><strong>Clé étrangère</strong></td>
<td><strong>Table de la clé étrangère</strong></td>
</tr>
<tr class="odd">
<td><strong>provider_id*</strong></td>
<td>Identifiant unique du professionnel de santé.</td>
<td>integer</td>
<td>Oui</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>specialty_concept_id</strong></td>
<td>Concept standard codant la spécialité du professionnel de
santé.</td>
<td>integer</td>
<td>Non</td>
<td>Oui</td>
<td>CONCEPT</td>
</tr>
<tr class="odd">
<td><strong>provider_source_value</strong></td>
<td>Identifiant du professionnel de santé dans les données source.</td>
<td>varchar(50)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
<tr class="header">
<td><strong>specialty_source_value</strong></td>
<td>Concept codant la spécialité du professionnel de santé dans les
données source.</td>
<td>varchar(50)</td>
<td>Non</td>
<td>Non</td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Règles de transformation

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 39%" />
<col style="width: 21%" />
<col style="width: 21%" />
</colgroup>
<thead>
<tr class="header">
<td rowspan="2"><strong>Variables</strong></td>
<td rowspan="2"><strong>Règles</strong></td>
<td colspan="2"><strong>Jointure</strong></td>
</tr>
<tr class="odd">
<td><strong>Gauche</strong></td>
<td><strong>Droite</strong></td>
</tr>
<tr class="header">
<td><strong>provider_id*</strong></td>
<td>hash(provider_source_value)</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>specialty_source_value</strong></td>
<td><ul>
<li><p><em>psf_spe_cod</em> de <strong>IR_SPE_V</strong></p></li>
</ul>
<p>UNION</p>
<ul>
<li><p><em>psf_act_nat</em> de <strong>IR_ACT_NAT</strong></p></li>
</ul></td>
<td></td>
<td></td>
</tr>
<tr class="header">
<td><strong>specialty_concept_id</strong></td>
<td><ul>
<li><p><em>conceptId</em> du <strong>fichier de
correspondance</strong></p></li>
</ul></td>
<td><p><strong>IR_SPE_V</strong></p>
<p><em>pfs_spe_cod</em></p>
<p>UNION</p>
<p><strong>IR_ACT_V</strong></p>
<p><em>pfs_act_nat</em></p></td>
<td><p><strong>fichier de correspondance</strong></p>
<p><em>sourceCode</em></p>
<p>UNION</p>
<p><strong>fichier de correspondance</strong></p>
<p><em>sourceCode</em></p></td>
</tr>
<tr class="odd">
<td><strong>provider_source_value</strong></td>
<td><ul>
<li><p><em>pfs_spe_cod</em> (<strong>IR_SPE_V)</strong></p></li>
<li><p><em>pfs_act_nat</em> (<strong>IR_ACT_V)</strong></p></li>
</ul></td>
<td></td>
<td></td>
</tr>
</thead>
<tbody>
</tbody>
</table>
