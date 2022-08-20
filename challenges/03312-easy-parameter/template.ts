// type MyParameters<T extends (...args: any[]) => any> = any

//----------

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer ARGS) => any ? ARGS : never

/**
 * Reference
 * https://github.com/microsoft/TypeScript/pull/24897
 */