// type Merge<F, S> = any

//==========

type Merge<F extends Object, S extends Object> = {
  [KEY in keyof F | keyof S]: KEY extends keyof S ? S[KEY] : KEY extends keyof F ? F[KEY] : never
}
