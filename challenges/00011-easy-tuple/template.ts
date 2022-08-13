/**
 * type MyReadonly<T> = any
**/

//Solution
type TupleToObject<T extends readonly (number | string)[]> = {
  [VAL in T[number]]: VAL
}

// Takeaways
/**
👉const tuple = ['tesla', 'model 3'] as const
// ==> typeof tuple = readonly ['tesla', 'model 3']
👉To iterator an array: ARR[number]
 * 
 */