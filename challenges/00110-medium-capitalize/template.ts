// type MyCapitalize<S extends string> = any

//----------------------------------------


type MyCapitalize<S extends string> = S extends `${infer FIRST}${infer REST}` ? `${Uppercase<FIRST>}${REST}` : S