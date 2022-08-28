// type Last<T extends any[]> = any

//--------
// Solution 1
// type Last<T extends any[]> = [any, ...T][T['length']]

// Solution 2
type Last<T extends any[]> = T extends [infer FIRST, ...infer REST] ? REST extends [] ? FIRST : Last<REST> : never
