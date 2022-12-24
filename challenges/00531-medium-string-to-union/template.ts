// type StringToUnion<T extends string> = any

// ==============

type StringToUnion<T extends string> = T extends `${infer F}${infer L}` ? F | StringToUnion<L> : never