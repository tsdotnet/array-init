"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = arrayInit;
/**
 * Initializes an array depending on the requested capacity.
 * The returned array will have a .length equal to the value provided.
 * @param length
 * @returns {[]}
 */
function arrayInit(length) {
    // This logic is based upon JS performance tests that show a significant difference at the level of 65536.
    let array;
    if (length > 65536)
        array = new Array(length);
    else {
        array = [];
        array.length = length;
    }
    return array;
}
//# sourceMappingURL=arrayInit.js.map