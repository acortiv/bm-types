
// Shape of Object - Interface
interface IPoint {
    x: number;
    y: number;
}

// Function Signature - Interfaces
interface ISetPoint {
    (x: number, y: number): void;
}

// Shape of Object - Type
type TPoint = {
    x: number;
    y: number;
};
// Extension Variations
type TSetPoint = (x: number, y: number) => void;

// Extending Interfaces
interface IAnimal {
    name: string
}

interface IDog extends IAnimal {
    bark: () => void;
}

// Extending Types
type TAnimal = { 
    name: string 
}

type TDog = TAnimal & {
    bark: () => void
}


// Interfaces Support Declaration Merging; You can define an interface multiple times and Typescript will merge them -- types will not do this

interface Book {
    title: string;
}

interface Book {
    author: string;
}


// Computed Properties -- Types can use computed properties; interfaces cannot

type DynamicProp = { [key: `prefix_${string}`]: string }


// Types can create unions and intersections directly -- Interfaces cannot create unions, but can extend or implement union types

type StringOrNumber = string | number
type NameAndAge = { name: string } & {age: number}


// Primitives and Tuples -- Types can be used to create aliases for primities and tuples
// Interfaces are only for object-like structures

type MyString = string
type MyTuple = [number, string]

