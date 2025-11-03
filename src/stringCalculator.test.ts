import { describe, it, expect } from 'vitest';
import { stringCalculator } from './stringCalculator';

describe('stringCalculator', () => {
  it('returns the sum of comma-separated numbers', () => {
    expect(stringCalculator('1,2,3')).toBe(6);
  });

  it('handles spaces correctly', () => {
    expect(stringCalculator(' 1 , 2 , 3 ')).toBe(6);
  });

  it('throws error for empty input', () => {
    expect(() => stringCalculator('')).toThrow('Please Enter a valid input');
  });

  it('throws error for whitespace-only input', () => {
    expect(() => stringCalculator('   ')).toThrow('Please Enter a valid input');
  });

  it('throws error when all inputs are invalid', () => {
    expect(() => stringCalculator('a,b,c')).toThrow('Please Enter a valid number');
  });

  it('ignores invalid entries but sums valid ones', () => {
    expect(stringCalculator('1, a, 3')).toBe(4);
  });

  it('handles a single number correctly', () => {
    expect(stringCalculator('5')).toBe(5);
  });

  it('handles decimal numbers', () => {
    expect(stringCalculator('1.5,2.5')).toBeCloseTo(4.0);
  });

  it('handles negative numbers correctly', () => {
    expect(stringCalculator('-1,2,3')).toBe(4);
  });

  it('handles newline-separated values correctly', () => {
    const input = '1\n2,3';
    expect(stringCalculator(input)).toBe(6);
  });
});
