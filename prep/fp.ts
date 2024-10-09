
// Topic 1 - Currying
// Currying is the process of transforming a function that takes multiple arguments into a series of functions that each take a single argument

// Basic Currying

function add(x: number): (y:number) => number {
    return function(y: number): number 
    {
        return x + y
    };
}

const add5 = add(5);
console.log(add5(3))

// Currying with Generics -- This is where my brain melted; apparently you can't make it fully typesafe in TS???

// function curry<T extends any[]>(fn: (...args: T) => any): (...args: Partial<T>) => any {
//     return function curried(...args: Partial<T>): any {
//         if (args.length === fn.length) {
//             return fn(...(args as T));
//         }
//         return (...next: Partial<T>) => curried(...args, ...next);
//     };
// }