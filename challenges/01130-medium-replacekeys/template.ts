// type ReplaceKeys<U, T, Y> = any

// =================

type ReplaceKeys<N, K, R> = {
  [KEY in keyof N]: KEY extends K ? (KEY extends keyof R ? R[KEY] : never) : N[KEY]
}

