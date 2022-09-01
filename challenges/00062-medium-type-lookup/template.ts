// type LookUp<U, T> = any

///==========

// Solution 1
// type LookUp<U, T> = U extends { type: T } ? U : never

// Solution 2
// type LookUp<U, T> = U extends { type: infer TYPE } ? TYPE extends T ? U : never : never

// Solution 3

type LookUp<U, T> = U extends { type: string } ? T extends U['type'] ? U : never : never