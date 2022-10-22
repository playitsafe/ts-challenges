// type ReplaceAll<S extends string, From extends string, To extends string> = any

// ----------------
// type ReplaceAll<
//   S extends string, 
//   From extends string,
//   To extends string
// > = S extends `${infer Begin}${From}${infer End}`
//       ? From extends `${''}` ? S : ReplaceAll<`${Begin}${To}${End}`, From, To>
//       : S

// type Test1 = ReplaceAll<'foobarfoobar', 'ob', 'b'>

type ReplaceAll<
  S extends string, 
  From extends string,
  To extends string
> = S extends `${infer Begin}${From}${infer End}`
      ? From extends `${''}` ? S : `${ReplaceAll<Begin, From, To>}${To}${ReplaceAll<End, From, To>}`
      : S

type Test1 = ReplaceAll<'foobarfoobar', 'ob', 'b'>