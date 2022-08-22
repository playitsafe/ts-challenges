// type MyReadonly2<T, K> = any

//=========

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T,K> & {
  readonly [KEY in K]: T[KEY];
}

// Reference
// https://ghaiklor.github.io/type-challenges-solutions/en/medium-readonly-2.html