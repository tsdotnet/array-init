/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Initializes an array depending on the requested capacity.
 * The returned array will have a .length equal to the value provided.
 * @param length
 * @returns {[]}
 */
export default function arrayInit<T> (length: number): T[] {
	// This logic is based upon JS performance tests that show a significant difference at the level of 65536.
	let array: T[];
	if(length>65536) array = new Array(length);
	else
	{
		array = [];
		array.length = length;
	}
	return array;
}
