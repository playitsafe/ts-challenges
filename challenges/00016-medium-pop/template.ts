// type Pop<T extends any[]> = any

//----------

type Pop<T extends any[]> = T extends [...infer REST, infer LAST] ? REST : never

// type Pop<T extends any[], A extends any[] = []> = T extends [infer E, ...infer R] ? R['length'] extends 0 ? A : Pop<R, [...A, E]> : A;
