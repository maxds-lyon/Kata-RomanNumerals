import { Convert } from './convert';

let g: Convert = new Convert();

beforeEach(() => {
  g = new Convert();
});

describe('Conversion to Roman numerals', () => {
  test('should convert 1 to I', () => {
    expect(g.toRoman(1)).toBe('I');
  });

  test('should convert 4 to IV', () => {
    expect(g.toRoman(4)).toBe('IV');
  });

  test('should convert 5 to V', () => {
    expect(g.toRoman(5)).toBe('V');
  });

  test('should convert 9 to IX', () => {
    expect(g.toRoman(9)).toBe('IX');
  });

  test('should convert 10 to X', () => {
    expect(g.toRoman(10)).toBe('X');
  });

  test('should convert 40 to XL', () => {
    expect(g.toRoman(40)).toBe('XL');
  });

  test('should convert 50 to L', () => {
    expect(g.toRoman(50)).toBe('L');
  });

  test('should convert 90 to XC', () => {
    expect(g.toRoman(90)).toBe('XC');
  });

  test('should convert 100 to C', () => {
    expect(g.toRoman(100)).toBe('C');
  });

  test('should convert 400 to CD', () => {
    expect(g.toRoman(400)).toBe('CD');
  });

  test('should convert 500 to D', () => {
    expect(g.toRoman(500)).toBe('D');
  });

  test('should convert 900 to CM', () => {
    expect(g.toRoman(900)).toBe('CM');
  });

  test('should convert 1000 to M', () => {
    expect(g.toRoman(1000)).toBe('M');
  });

  test('should convert 1987 to MCMLXXXVII', () => {
    expect(g.toRoman(1987)).toBe('MCMLXXXVII');
  });
});
