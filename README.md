# Kata du Numeral to Roman

## Pour commencer

Cliquez sur le bouton ci-dessous pour démarrer un nouvel environnement de développement :

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/maxds-lyon/Kata-RomanNumerals.git)

Une fois que vous avez lancé l'environnement de développement, vous pouvez commencer à travailler sur le kata. Voici quelques commandes utiles que vous pourriez avoir besoin d'utiliser :

- Pour lancer l'application en local, utilisez la commande : `npm run dev`
- Pour lancer les tests, utilisez la commande : `npm run test`

Les dépendances nécessaires sont déjà installées dans l'environnement Gitpod.

Le code à modifier se trouve dans `src/convert.ts` et les tests sont déjà présent dans `src/convert.spec.ts`

## Introduction

Le kata “Roman Numerals” est un exercice de programmation qui vous met au défi de convertir des nombres entiers en chiffres romains. Ce kata vous aidera à améliorer vos compétences en algorithmique et en manipulation de chaînes de caractères.

## Ce que vous allez apprendre

- Conversion de nombres en chiffres romains
- Manipulation de chaînes de caractères
- Amélioration de la logique algorithmique
- Pratique des tests unitaires

## Idées principales du kata

### 1. Les objectifs

Le but principal de ce kata est de créer une fonction qui prend un nombre entier en entrée et retourne sa représentation en chiffres romains. Vous devrez également écrire des tests unitaires pour vérifier la validité de votre solution.

### 2. L’approche standard

L’approche standard pour résoudre ce kata consiste à utiliser un algorithme de conversion qui prend en compte les règles spécifiques des chiffres romains. Vous devrez gérer les cas particuliers, tels que les soustractions (par exemple, IV pour 4) et les répétitions (par exemple, III pour 3).

### 3. Les avantages

En résolvant ce kata, vous améliorerez vos compétences en algorithmique et en manipulation de chaînes de caractères. Vous apprendrez également à écrire des tests unitaires pour valider votre solution.

### 4. Les erreurs des développeurs

Les erreurs courantes des développeurs incluent l’oubli des cas particuliers, tels que les soustractions et les répétitions, ainsi que la mauvaise gestion des limites de l’entrée (par exemple, les nombres négatifs ou supérieurs à 3999).

### 5. Les prérequis

### 5.1 Les prérequis techniques

Pour résoudre ce kata, vous aurez besoin d’un environnement de développement dans le langage de programmation de votre choix, ainsi que d’une bibliothèque de tests unitaires.

### 5.2 Les prérequis de compétences

Vous devriez avoir une compréhension de base des algorithmes et de la manipulation de chaînes de caractères, ainsi que de l’écriture de tests unitaires.

## Conclusion

Le kata “Roman Numerals” est un exercice stimulant qui vous aidera à améliorer vos compétences en algorithmique et en manipulation de chaînes de caractères. En résolvant ce kata, vous apprendrez à convertir des nombres entiers en chiffres romains et à écrire des tests unitaires pour valider votre solution.

# Les Régles
Écrivez un programme pour convertir les nombres arabes en leurs équivalents en chiffres romains.

Les Romains écrivaient leurs nombres en utilisant des combinaisons des lettres suivantes :

| Nombre | Numéral |
|--------|---------|
| 1      | I       |
| 5      | V       |
| 10     | X       |
| 50     | L       |
| 100    | C       |
| 500    | D       |
| 1000   | M       |

Initialement, le système des chiffres romains consistait à exprimer le nombre en termes du symbole le plus approprié qui pouvait être utilisé.

Pour commencer, pour les nombres de 1 à 4, nous utiliserions le symbole 'I' en multiples pour représenter le nombre :

| Nombre | Numéral |
|--------|---------|
| 1      | I       |
| 2      | II      |
| 3      | III     |
| 4      | IV      |

Lorsque les nombres atteignaient 5, nous utilisions 'V' car ce symbole était le moyen le plus efficace de représenter le nombre.

| Nombre | Numéral |
|--------|---------|
| 5      | V       |

Pour les entiers supérieurs à 5, une nouvelle règle est entrée en vigueur : lorsque des symboles 'plus petits' sont ajoutés une ou plusieurs fois derrière le symbole 'plus grand', ils sont considérés comme ajoutés à la valeur représentant le symbole plus grand.

| Nombre | Numéral |
|--------|---------|
| 6      | VI      |
| 7      | VII     |
| 8      | VIII    |
| 9      | VIIII   |

Ainsi, la séquence initiale de chiffres romains pour les entiers de 1 à 9 était la suivante :

| Nombre | Numéral |
|--------|---------|
| 1      | I       |
| 2      | II      |
| 3      | III     |
| 4      | IIII    |
| 5      | V       |
| 6      | VI      |
| 7      | VII     |
| 8      | VIII    |
| 9      | VIIII   |

Cependant, comme vous l'avez peut-être remarqué, les nombres pour 4 et 9 ne semblent pas corrects. Mais la formation originale des numéraux était celle-ci (même certaines horloges affichent encore IIII pour 4). Mais cela a créé des problèmes car les gens confondaient constamment III avec IIII et VIII avec VIIII, une règle supplémentaire a été développée.

Pour des nombres comme 4 et 9, le symbole plus petit (I) est préfixé par le symbole plus grand (V ou 5 pour le nombre 4, et X représentant 10 pour le nombre 9). Lorsque le symbole plus petit apparaît avant le symbole plus grand, il est considéré comme soustrait du symbole plus grand.

Ainsi, 'IV' est évalué comme : V - I = 5 - 1 = 4 et 'IX' est évalué comme : X - I = 10 - 1 = 9

Par conséquent, la liste des chiffres romains pour 1 à 9 est modifiée comme suit :

| Nombre | Numéral |
|--------|---------|
| 1      | I       |
| 2      | II      |
| 3      | III     |
| 4      | IV      |
| 5      | V       |
| 6      | VI      |
| 7      | VII     |
| 8      | VIII    |
| 9      | IX      |

Parce que le système romain suit un système de notation décimale, les mêmes règles s'appliquent pour l'ordre suivant : unités de 10. Dans ce cas, utilisez les symboles, 'X' pour 10, 'L' pour cinquante et 'C' pour cent.

| Nombre | Numéral |
|--------|---------|
| 10     | X       |
| 20     | XX      |
| 30     | XXX     |
| 40     | XL      |
| 50     | L       |
| 60     | LX      |
| 70     | LXX     |
| 80     | LXXX    |
| 90     | XC      |

Pour l'ordre décimal suivant, utilisez à nouveau les mêmes règles avec 'C' pour 100, 'D' pour 500 et 'M' pour 1000

| Nombre | Numéral |
|--------|---------|
| 100    | C       |
| 200    | CC      |
| 300    | CCC     |
| 400    | CD      |
| 500    | D       |
| 600    | DC      |
| 700    | DCC     |
| 800    | DCCC    |
| 900    | CM      |

(Comme il n'y a pas de symboles plus élevés que 'M' (1000) le motif s'arrête ici, et généralement les chiffres romains ne considèrent pas les nombres supérieurs à quelques milliers)

Il y avait certaines règles que les numéraux suivent qui doivent être observées :

Les symboles de 'base 1' ('I', 'X', 'C', 'M') peuvent être soustraits du symbole de 'base 5' suivant ('V', 'L', 'D') ou du symbole de 'base 1', mais une seule occurrence est autorisée. Le symbole ne peut pas être préfixé à un symbole qui est l'ordre décimal suivant. Donc 'IV', 'IX' est ok' mais 'IL' ou 'IC' ne le sont pas. 'XL', 'XC' est valide' mais XD et XM ne le sont pas ('CD' et 'CM' sont également valides)

Les symboles 'I' et 'X' peuvent être répétés au maximum 3 fois de suite lorsque le symbole est ajouté

Les symboles de 'base 5' 'V', 'L' et 'D' ne peuvent jamais être répétés
