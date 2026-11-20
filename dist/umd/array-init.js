(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.arrayInit = global.tsdotnet.arrayInit || {})));
})(this, (function (exports) { 'use strict';

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

    exports.default = arrayInit;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=array-init.js.map
