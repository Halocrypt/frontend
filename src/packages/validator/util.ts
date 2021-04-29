export const sanitizeRegExp = /([^\w]|_)/g;
export const clean = (x: any) =>
  (x + "").replace(sanitizeRegExp, "").toLowerCase();
export const contains = (b: any, a: any) => clean(b).includes(clean(a));
