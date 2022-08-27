// type TupleToUnion<T> = any

//-------------------

// type TupleToUnion<T extends any[]> = T[number]

type TupleToUnion<T> = T extends [infer FIRST, ...infer REST] ? FIRST | TupleToUnion<REST> : never
