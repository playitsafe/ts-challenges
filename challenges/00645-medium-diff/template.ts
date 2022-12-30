// type Diff<O, O1> = any

//------------
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

/**
  type Diff<T, U, A = T & U> = {
  [K in Exclude<keyof A, keyof U> | Exclude<keyof A, keyof T>]: A[K];
}
 */

// type Diff<O extends object, O1 extends object> = any

//https://blog.csdn.net/letterTiger/article/details/118052500

// ===================
// For union types:
type T1 = 1 | 2
type T2 = 1 | 3
type T = T1 & T2 // T=1

// For object types
type Obj1 = {a: string}
type Obj2 = {a: string, b: string}
type Obj3 = {a: string, c: number, d: number}

type O3 = Obj1 & Obj2 // {a: string, b: string}
type O33 = keyof O3
type O4 = Obj1 | Obj2 | Obj3
type OT = {
  a: string
  b?: string
  c?: number
  d?: number
}
type O5 = keyof (Obj1 | Obj2 | Obj3)
type O6 = (keyof Obj1) | (keyof Obj2) | (keyof Obj3)

const s3: O3 = {
  a: '1',
  b: '2'
}

const s4: O4 = {
  a: '1', //must have
  // b: '2'
  c: 2, //optional
  d: 2
}

const s5: OT = {
  a: '1', //must have
  // b: '2'
  c: 2, //optional
  d: 2
}


// type cases = [
//   Expect<Equal<O4, OT>>
// ]
