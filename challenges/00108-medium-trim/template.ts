// type Trim<S extends string> = any

// =======================

type BlankType = ' ' | '\n' | '\t'

// export type Trim<S extends string> = 
//     S extends `${BlankType}${infer MIDDLE}${BlankType}`
//     ? Trim<MIDDLE> 
//     : S extends `${BlankType}${infer RIGHT}`
//       ? Trim<RIGHT> : S extends `${infer LEFT}${BlankType}`
//         ? Trim<LEFT> : S

type s1 = '  ab'  
type s2 = '  ab '  

type r1 = s1 extends s2 ? true : false //false

type whiteSpace = " " | "\t" | "\n"
export type Trim<S extends string> = S extends `${whiteSpace}${infer C}`
  ? Trim<C>
  : S extends `${infer C}${whiteSpace}`
  ? Trim<C>
  : S