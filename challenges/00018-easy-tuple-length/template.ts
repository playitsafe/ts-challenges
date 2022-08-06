// type Length<T> = any

// Solution
type Length<T extends readonly any[]> = T['length']


/**
 * Takeaways
👉 What is Tuple?
type t = [string, number]
 */