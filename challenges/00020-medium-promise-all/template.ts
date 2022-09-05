// declare function PromiseAll(values: any): any

// ======================
// 方法1  映射时取P为 keyof any[] 即键的数字值,可得到数组
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [KEY in keyof T]: T[KEY] extends Promise<infer X> ? X : T[KEY]
}>


const a = Promise.resolve(2) //Promise<number>
type ROTest = readonly [1, 2, 4]
type Test = [1, 2, 4]
const arr = [1,2,4]
const carr = [1,2,4] as const

type Result1 = Test extends ROTest ? true : false //true
type Result2 = ROTest extends Test ? true : false //false
