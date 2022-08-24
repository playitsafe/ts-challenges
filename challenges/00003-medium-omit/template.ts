// type MyOmit<T, K> = any

// ---------------

type MyOmit<T, K extends keyof T> = {
  [KEY in Exclude<keyof T, K>]: T[KEY]
}