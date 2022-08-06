// type First<T extends any[]> = any

// Solution 1
// type First<T extends any[]> = T extends [] ? never : T[0]

// Solution 2
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// Solution 3
  // check if T[0] is in array
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// Solution 4
type First<T extends any[]> = T extends [infer FIRST, ...infer REST] ? FIRST : never


/** Takeaways */
/**
👉 Get type of the first element in an array
  T[0]

👉 Get length of an array
  T['length'] //also known as indexed

👉 extends union type
check if 1 extends 1|2|3, will check 1 by 1

👉 infer in array destruction
T extends [infer FIRST, ...infer REST] ? FIRST : never
if FIRST can be successfully destructed, then return FIRST

const arr: any[] = []
const [a, ...b] = arr

a ==> undefined
b ==> []

 */