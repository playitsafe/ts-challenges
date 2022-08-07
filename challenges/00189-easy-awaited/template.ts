// type MyAwaited<T> = any

type MyAwaited<T  extends Promise<any>> = T extends Promise<infer X> ? ( X extends Promise<any> ? MyAwaited<X> : X) : never

/** Solution:
*
1. Start from easy cases:
- Make sure T extends Promise
 type MyAwaited<T> = T extends Promise<infer X> ? X : never

 This will work for T of non-Promise type. But we also want to make it work for T of Promise type(or nested Promise type)

- Check if X is a Promise, then recursively call this type
type MyAwaited<T> = T extends Promise<infer X> ? MyAwaited<X> : T

In this case, it will return MyAwaited<X> if T is a Promise, otherwise it just return T
At this stage, it passes all test cases except the error testing case.
`Type 'number' does not satisfy the constraint 'Promise<any>'`

Thus, we need to add another ternary expression:
type MyAwaited<T extends Promise<any>> = T extends Promise<infer X> ? ( X extends Promise<any> ? MyAwaited<X> : X) : never

Takeaways:
👉 `infer` can only be used in conditional type

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 */