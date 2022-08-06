// type MyPick<T, K> = any
/**** Solution ****/
type MyPick<TODO, KTYPES extends keyof TODO> = {
  [KEY in KTYPES]: TODO[KEY]
}

/**Takeaways */
/**
👉[KEY in KTYPES]
mapped types

👉TODO[KEY]:
Indexed access type

👉keyof TODO:
look up: get all keys from interface

👉extends:
constraints
 */