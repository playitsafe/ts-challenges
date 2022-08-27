// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }

//---------------

type TReserved = Exclude<keyof any, 'get' | 'option'>

/** Expression 1 */
type Chainable<RESULT extends object = {}> = {
  option: <K extends TReserved, V>(
    key: K,
    value: K extends keyof RESULT ?
              (RESULT[K] extends V ? never : V)
          : V
    ) => Chainable<
    (K extends keyof RESULT ?
        RESULT[K] extends V ? RESULT : Omit<RESULT, K>
    : RESULT)
    &
    {
      [KEY in K]: V
    }
  >
  get: () => RESULT
}

/** Expression 2 */

type Chainable1<RESULT extends object = {}> = {
  option<K extends TReserved, V>(
    key: K,
    value: K extends keyof RESULT ?
              (RESULT[K] extends V ? never : V)
          : V
    ): Chainable<
    (K extends keyof RESULT ?
        RESULT[K] extends V ? RESULT : Omit<RESULT, K>
    : RESULT)
    &
    {
      [KEY in K]: V
    }
  >
  get(): RESULT
}


/**Expression 3 */
type Chainable3<T extends {} = {}> = {
  option<K extends PropertyKey, V extends any>(
    key: K extends keyof T 
      ? T[K] extends V ? never : K
      : K, 
    value: V
  ): Chainable<{
      [KMerged in (keyof T | K)]: KMerged extends K ? V : KMerged extends keyof T ? T[KMerged] : never
    }>
  get(): T
}