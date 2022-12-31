// type AnyOf<T extends readonly any[]> = any

// ------------


type AnyOf<T extends readonly any[]> =
  T extends readonly [infer F, ...infer R]
    ? F extends 0 | false | '' | undefined | null | { [P in PropertyKey]: never } | []
      ? AnyOf<R>
      : true
    : false

//========
type T11 = {s: string} extends {} ? true : false //true
type T22 = {} extends {s: string} ? true : false //false

type T33 = {} extends { [P in PropertyKey] : never} ? true : false
type T44 = {s: string} extends { [P in PropertyKey] : never} ? true : false

type TS = AnyOf<[0]>