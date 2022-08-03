type MyReadonly<T> = {
  readonly [KEY in keyof T]: T[KEY]
}

/**Takeaways */
/**
 interface Todo {
   title: string
   description: string
 }
 
 const todo: Readonly<Todo> = {
   title: "Hey",
   description: "foobar"
 }

 will make todo as a readonly object
  const todo: <Todo> = {
   readonly title: "Hey",
   readonly description: "foobar"
 }
 */