// type Includes<T extends readonly any[], U> = any

import { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = 
  T extends [infer FIRST, ...infer REST]
    ? Equal<FIRST, U> extends true ? true : Includes<REST, U>
    : false


/**
 * Takeaways
 * 
 * use `infer` to get the first element's type, then recursively call the Includes type for the rest elements
 * 
 * 
 * TS 模块规范:
 * 如果使用了import 或者export, TS 会把当前文件当成一个模块, 所以必须要引入才能使用
 * 之前的测试没有用到import, 会把当前文件作为一个全局的文件,不用引入就能使用
 */