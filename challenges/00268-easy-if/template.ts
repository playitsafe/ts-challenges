// type If<C, T, F> = any

type If<C extends boolean, T, F> = C  extends true ? T : F

/**
 * `null` 可以 extends boolean 与否,取决于严格模式是否打开
    "strict": true, /* Enable all strict type-checking options.
    "strictNullChecks": true, // When type checking, take into account 'null' and 'undefined'.
 * 
 * null在严格模式和非严格模式下的区别:
 https://www.typescriptlang.org/docs/handbook/type-compatibility.html
 */
