"use strict";
function processEach(arr, func) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        func(el);
    }
}
