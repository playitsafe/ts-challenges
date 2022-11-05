// type Flatten = any

// ===========

type Flatten<T extends any[]>
  = T extends [infer FIRST, ...infer REST]
    ? FIRST extends any[] ? Flatten<[...FIRST, ...REST]> : [FIRST, ...Flatten<REST>]
    : []

type test =     Flatten<[1, 2, [3, 4], [[[5]]]]>