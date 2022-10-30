// type LengthOfString<S extends string> = any

//----------
// If use 'length' on string type, can only get `number` type
// Transfer string to array first
type StringToArray<S> = S extends `${infer First}${infer Rest}` ? [First, ...StringToArray<Rest>]: []


type LengthOfString<S extends string> = StringToArray<S>['length']
