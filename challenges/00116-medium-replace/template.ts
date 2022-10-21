// type Replace<S extends string, From extends string, To extends string> = any

//===============

type Replace<
  S extends string,
  From extends string,
  To extends string
> =
  S extends `${infer BEGIN}${From}${infer END}`
    ? From extends '' ? S : `${BEGIN}${To}${END}`
    : S

