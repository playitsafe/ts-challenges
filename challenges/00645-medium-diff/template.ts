// type Diff<O, O1> = any

//------------
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>


// type Diff<O extends object, O1 extends object> = any

//https://blog.csdn.net/letterTiger/article/details/118052500