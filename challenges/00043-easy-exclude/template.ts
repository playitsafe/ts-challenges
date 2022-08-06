// type MyExclude<T, U> = any

// Solution
type MyExclude<T, U> = T extends U ? never : T

