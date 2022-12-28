// type KebabCase<S> = any

//=================

// single kebab
// type Kebab<S extends string> = S extends Uncapitalize<S> ? S : `-${Uncapitalize<S>}`;
// full kebab
// type KebabCase<S extends string> = S extends `${infer Start}${infer End}` ? `${Uncapitalize<Start>}${KebabCase<Kebab<End>>}` : S;


type PrefixDashAndUncapitalize<S extends string> = S extends Uncapitalize<S> ? S : `-${Uncapitalize<S>}`

type KebabCase<S extends string> =
  S extends `${infer F}${infer R}`
  ? `${Uncapitalize<F>}${KebabCase<PrefixDashAndUncapitalize<R>>}`
  : S


// type T = SingleKebab<'S'>