import { describe, it, expect } from 'vitest';
import arrayInit from '../src/arrayInit.js';

function validate (length: number): void
{
	const array = arrayInit<any>(length);
	expect(array.length).equal(length);
	expect(Array.isArray(array)).toBe(true);
}

describe('arrayInit', () => {
	describe('basic functionality', () => {
		it('produces proper length arrays', () => {
			validate(10);
			validate(10000);
			validate(70000);
			validate(700000);
		});

		it('creates arrays with correct length for boundary values', () => {
			// Test the 65536 boundary specifically
			validate(65535); // Just below threshold - uses array.length = length
			validate(65536); // At threshold - uses new Array(length)
			validate(65537); // Just above threshold - uses new Array(length)
		});

		it('handles edge cases', () => {
			validate(0);   // Empty array
			validate(1);   // Single element
			validate(2);   // Small array
		});
	});

	describe('performance optimization paths', () => {
		it('uses array.length assignment for small arrays', () => {
			const smallArray = arrayInit<string>(1000);
			expect(smallArray.length).toBe(1000);
			expect(Array.isArray(smallArray)).toBe(true);
			// All elements should be undefined (holes)
			expect(smallArray[0]).toBeUndefined();
			expect(smallArray[999]).toBeUndefined();
		});

		it('uses new Array() constructor for large arrays', () => {
			const largeArray = arrayInit<number>(100000);
			expect(largeArray.length).toBe(100000);
			expect(Array.isArray(largeArray)).toBe(true);
			// All elements should be undefined (holes)
			expect(largeArray[0]).toBeUndefined();
			expect(largeArray[99999]).toBeUndefined();
		});
	});

	describe('type safety', () => {
		it('works with generic type annotations', () => {
			const stringArray = arrayInit<string>(5);
			const numberArray = arrayInit<number>(3);
			const booleanArray = arrayInit<boolean>(2);
			
			expect(stringArray.length).toBe(5);
			expect(numberArray.length).toBe(3);
			expect(booleanArray.length).toBe(2);
			
			// Should be able to assign proper types
			stringArray[0] = 'hello';
			numberArray[0] = 42;
			booleanArray[0] = true;
			
			expect(stringArray[0]).toBe('hello');
			expect(numberArray[0]).toBe(42);
			expect(booleanArray[0]).toBe(true);
		});

		it('creates sparse arrays by default', () => {
			const sparseArray = arrayInit<string>(5);
			
			// Array has length but no defined elements
			expect(sparseArray.length).toBe(5);
			expect(0 in sparseArray).toBe(false);
			expect(4 in sparseArray).toBe(false);
			expect(sparseArray.hasOwnProperty(0)).toBe(false);
		});
	});

	describe('boundary conditions', () => {
		it('handles exactly 65536 elements', () => {
			const boundaryArray = arrayInit<number>(65536);
			expect(boundaryArray.length).toBe(65536);
			expect(Array.isArray(boundaryArray)).toBe(true);
		});

		it('maintains array behavior across optimization boundary', () => {
			const smallArray = arrayInit<number>(65535);
			const largeArray = arrayInit<number>(65537);
			
			// Both should behave the same way
			expect(smallArray.length).toBe(65535);
			expect(largeArray.length).toBe(65537);
			expect(Array.isArray(smallArray)).toBe(true);
			expect(Array.isArray(largeArray)).toBe(true);
			
			// Both should be sparse
			expect(0 in smallArray).toBe(false);
			expect(0 in largeArray).toBe(false);
		});

		it('handles very large arrays', () => {
			const veryLargeArray = arrayInit<any>(1000000);
			expect(veryLargeArray.length).toBe(1000000);
			expect(Array.isArray(veryLargeArray)).toBe(true);
		});
	});
});
