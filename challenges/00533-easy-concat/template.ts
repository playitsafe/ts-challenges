// type Concat<T, U> = any

type Concat<T extends any[], U extends any[]> = [...T, ...U]

/**
 * Takeaways
 * 
 * TS provides spread operators as well
 */