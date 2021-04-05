"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../src/index"));
describe('typescript test', function () {
    it('[Hello world!!] 가 보여야한다.', function () {
        var helloWorld = index_1.default('world');
        expect(helloWorld).toBe('Hello world!!');
    });
});
