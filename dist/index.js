"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var world = "Hi";
function hello(word) {
    if (word === void 0) { word = world; }
    console.log('@@@@@');
    return "Hello " + world + "! !";
}
exports.hello = hello;
