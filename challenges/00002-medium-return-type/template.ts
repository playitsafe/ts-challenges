// type MyReturnType<T> = any

// -------------

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never
