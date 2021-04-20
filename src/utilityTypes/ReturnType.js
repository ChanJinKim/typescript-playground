/**
 * ReturnType<Type>
 * Constructs a type consisting of the return type of function Type.
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
 */

declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string
// const t0: T0 = 1;

type T1 = ReturnType<(s: string) => void>;
// type T1 = void
// const t1: T1 = 0;

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown
const t2: T2 = 0;

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]
// const t3: T3 = 0;

type T4 = ReturnType<typeof f1>;
// type T4 = {
//   a: number;
//   b: string;
// }
// const t4: T4 = 0;

type T5 = ReturnType<any>;
// type T5 = any
const t5: T5 = 0;

type T6 = ReturnType<never>;
// type T6 = never
// const t6: T6;

// type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

// type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.

// type T9 = ReturnType<object>;
// Type 'object' does not satisfy the constraint '(...args: any) => any'.
// Type '{}' provides no match for the signature '(...args: any): any'.
