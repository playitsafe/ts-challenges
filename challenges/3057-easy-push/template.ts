// type Push<T, U> = any

// ---------------------

type Push<T extends any[], U> = [...T, U]


/**
 * 思路和concat一样, 通过spread操作符把U元素添加进数组
 */

