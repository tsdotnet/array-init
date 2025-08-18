/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
function arrayInit(length) {
    let array;
    if (length > 65536)
        array = new Array(length);
    else {
        array = [];
        array.length = length;
    }
    return array;
}

export { arrayInit as default };
//# sourceMappingURL=arrayInit.js.map
