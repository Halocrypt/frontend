export function pluralise(what: string, val: number, suffix = "s") {
  return val === 1 ? what : what + suffix;
}
