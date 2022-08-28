// type DeepReadonly<T> = any

// ==========
type DeepReadonly<T> = {
  readonly [KEY in keyof T]: T[KEY] extends Function ? T[KEY] : T[KEY] extends object ? DeepReadonly<T[KEY]>
  : T[KEY]
}
