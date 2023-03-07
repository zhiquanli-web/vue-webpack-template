export type TMaping<Obj extends object> = {
  readonly [T in keyof Obj]: Obj[T];
};
