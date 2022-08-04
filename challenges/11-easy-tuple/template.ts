/**
 * type TupleToObject<T extends readonly any[]> = any
**/

//Solution
type TupleToObject<T extends readonly (string | number)[]> = {
  [KEY in T[number]]: KEY
}

// Takeaways
/**
👉const tuple = ['tesla', 'model 3'] as const
// ==> typeof tuple = readonly ['tesla', 'model 3']
👉To iterator an array: ARR[number]
 * 
 */