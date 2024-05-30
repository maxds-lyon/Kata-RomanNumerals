import { Convert } from './convert';

// Création d'une nouvelle instance de convertisseur
const converter = new Convert();

// Exemples d'exécution du convertisseur

// Conversion du nombre 1 en chiffres romains
console.log('1 en chiffres romains est :', converter.toRoman(1));

// Conversion du nombre 4 en chiffres romains
console.log('4 en chiffres romains est :', converter.toRoman(4));

// Conversion du nombre 5 en chiffres romains
console.log('5 en chiffres romains est :', converter.toRoman(5));

// Conversion du nombre 9 en chiffres romains
console.log('9 en chiffres romains est :', converter.toRoman(9));

// Conversion du nombre 10 en chiffres romains
console.log('10 en chiffres romains est :', converter.toRoman(10));

// Conversion du nombre 50 en chiffres romains
console.log('50 en chiffres romains est :', converter.toRoman(50));

// Conversion du nombre 100 en chiffres romains
console.log('100 en chiffres romains est :', converter.toRoman(100));

// Conversion du nombre 1987 en chiffres romains
console.log('1987 en chiffres romains est :', converter.toRoman(1987));
