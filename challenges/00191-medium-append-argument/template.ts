// type AppendArgument<Fn, A> = any
// ================
// type AppendArgument<Fn, A>
//   = Fn extends (...args: infer ARGS) => infer RETURN
//       ? (...args: [...ARGS, A]) => RETURN : never 

type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends 
  (...agrs: infer P) => infer R 
    ? (...args: [...P, A]) => R 
    : never

// type Case1 = AppendArgument<unknown, undefined>