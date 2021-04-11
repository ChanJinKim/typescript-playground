/**
 * isEmpty
 * @param {mixed}
 * @return {bool}
 */
const isEmpty = (input) => !input || Object.keys(input).length === 0;
const isEmpty2 = (input) => Object.keys(input);
const isEmpty3 = (input) => !input;

const isDate = (value) => value.constructor.toString().indexOf('Date') > -1;
const isDate2 = (value) => value.constructor;
const isDate3 = (value) => value.constructor.toString();

const isNumeric = (value) => !Number.isNaN(Number(value));

const emptyArray = [];
const emptyObject = {};

// console.log('---- isEmpty start --------');
// console.log(isEmpty([]));
// console.log(isEmpty({}));
// console.log(isEmpty(''));
// console.log(isEmpty(0));
// console.log(isEmpty(null));
// console.log(isEmpty(undefined));
// console.log(isEmpty(NaN));
// console.log(isEmpty(false));
// console.log('---- isEmpty end --------');
// console.log('---- isEmpty2 start2 --------');
// console.log(isEmpty2([[]]));
// console.log(isEmpty2({}));
// console.log(isEmpty2(''));
// console.log(isEmpty2(0));
// console.log(isEmpty2(null));
// console.log(isEmpty2(undefined));
// console.log('---- isEmpty2 end2 --------');
// console.log('---- instanceof start3 --------');
// console.log(emptyArray instanceof Object);
// console.log(emptyArray instanceof Array);
// console.log(emptyObject instanceof Object);
// console.log('---- instanceof end3 --------');

// isEmpty는
// '', 0, null, undefined, NaN, false 을 !input으로 처리한다.
//

const d = new Date();
const d2 = new Date();
const dText = '2021-04-09T01:08:15.031Z';
const dMethod = Date();
// console.log('---- isDate d start --------');
// console.log(d);
// console.log(isDate(d));
// console.log(isDate2(d));
// console.log(isDate3(d));
// console.log(Date);
// console.log(d instanceof Date);
// console.log(typeof d, d);
// console.log(typeof dMethod, dMethod);
// console.log('---- isDate d end --------');
// console.log('---- isDate dText start --------');
// console.log(dText);
// console.log(isDate(dText));
// console.log(isDate2(dText));
// console.log(isDate3(dText));
// console.log(dText instanceof Date);
// console.log('---- isDate dText end --------');

// isDate는
// value instanceof Date 로 검사하는게 좀더 좋은 방식인듯 보임

const n = NaN;
const n0 = 0;
const n1 = 1;
const s = '';
const s1 = '1asdfasdf';
console.log(typeof n);
console.log(isNumeric(n));
console.log(Number(NaN));
console.log(parseInt(NaN));
console.log(Number(s));
console.log(parseInt(s));
console.log(Number(s1));
console.log(parseInt(s1));
console.log(n instanceof Number);
console.log('nodemon test 1');

// isNaN보다는 Number.isNaN을 사용해야 할것 같다.
// 숫자를 검사하는 수식에서 Number함수를 사용하여 강제로 변환 시키는게 올바르지 않아보인다.
