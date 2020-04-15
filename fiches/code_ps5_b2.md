# Comparaison entre les codes prestations PS5 et les codes norme B2
<!-- SPDX-License-Identifier: MPL-2.0 -->

Comme indiqué dans la fiche [cibler selon les natures de prestations](../fiches/prestation.md),
on peut trouver dans le SNDS plusieurs types de codes pour se référer à une prestation.
Les prestations peuvent être codées en norme PS5 ou en norme B2.

## Dans le DCIR/DCIRS 

Le code PS5 correspond à un code sur 4 chiffres tandis que le code de la norme B2
est un code par lettres de longueur variable. Dans le `DCIR/DCIRS`, on trouve le code 
prestations PS5 dans la variable `PRS_NAT_REF` dont la nomenclature est `IR_NAT_V`.
Dans cette nomenclature, on peut trouver le code B2 dans la variable `PRS_NAT_CB2`. 


Le cahier des charges de la norme B2 interrégimes, dont 
la dernière version date de 2007, permet de codifier
la **télétransmission** de factures entre professionnels de santé
et Organismes d'Assurance Maladie. Cette norme permet de refléter la
facturation tout en respectant le secret médical.

Si la dernière date de la norme B2 est 2007, 
les annexes de la norme B2 évoluent régulièrement. 
L'[annexe 10 de la norme B2](https://www.ameli.fr/fileadmin/user_upload/documents/Annexe10-B2-AMO_Novembre_2019.pdf)
permet d'obtenir les différents codes de la norme B2 et de
lier ces codes aux actes de référence auxquels ils sont liés. 
Dans cette annexe se trouvent également les codes des prestations 
non transmis en norme B2, mais transmis au PS. 
Cette annexe est en format pdf, pour la lire, on peut utiliser le code
suivant:
```python
import tabula
df = tabula.read_pdf("Annexe_10.pdf",
                     pages='all',
                     multiple_tables=True)
```


Lorsque l'on compare les deux codes, il existe plusieurs types de relations possibles:


| Type de relation | `PRS_NAT_REF` | `PRS_NAT_CB2` | `PRS_NAT_LIB`|
| -----------------| -------------| --------------| --------------|
| Relation *one to one* entre  `PRS_NAT_REF` et `PRS_NAT_CB2`| Exemple : 4212 | ABA | AMBULANCES AGREEES|
| Relation *many to one* entre `PRS_NAT_REF` et `PRS_NAT_CB2` | Exemple: 1434, 9421| 'PREVENTION BUCCO-DENTAIRE: CONSULTATION - MATER', 'PREVENTION BUCCO-DENTAIRE: CONSULTATION'| BDC|
| Pas de correspondance dans la norme B2 pour le code prestation||||


Pour la **grande majorité des codes (96 %)**, la relation est *one-to-one* entre
les codes de la norme PS5 et les codes de la norme B2. 

## Références
- Site de l'Assurance maladie sur la [norme B2](https://www.ameli.fr/l-assurance-maladie/documentation-technique/norme-b2/index.php)
- [Cahier des charges noemie OC](https://www.ameli.fr/l-assurance-maladie/documentation-technique/norme-noemie/norme-noemie-oc/cahier-des-charges-noemie-oc-octobre-2019.php) 
- [Annexe 10 de la norme B2](https://www.ameli.fr/fileadmin/user_upload/documents/Annexe10-B2-AMO_Novembre_2019.pdf)

::: tip Crédits
Cette fiche a été rédigée par Raphaële Adjerad (DREES)
:::

 
