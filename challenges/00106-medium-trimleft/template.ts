// type TrimLeft<S extends string> = any

// ===============

type BlankType = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${BlankType}${infer REST}` ? TrimLeft<REST> : S
