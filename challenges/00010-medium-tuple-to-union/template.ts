// type TupleToUnion<T> = any

//-------------------

// type TupleToUnion<T extends any[]> = T[number]

type TupleToUnion<T> = T extends [infer FIRST, ...infer REST] ? FIRST | TupleToUnion<REST> : never

type A = 1 | 2
type B = 3 | 4
type C = A | B
type D = 1 | 2 | 3 | 4
type Rest = C extends D ? true : false // true