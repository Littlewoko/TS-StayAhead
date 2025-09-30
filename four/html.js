"use strict";
function createElement(tag, innerText) {
    var attributes = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        attributes[_i - 2] = arguments[_i];
    }
    var element = document.createElement(tag);
    element.innerText = innerText;
    attributes.forEach(function (_a) {
        var key = _a.key, value = _a.value;
        return element.setAttribute(key, value);
    });
    return element;
}
