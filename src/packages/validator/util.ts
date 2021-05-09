export const sanitizeRegExp = /([^\w])/g;
export const clean = (x: any) =>
  String(x == null ? "" : x)
    .replace(sanitizeRegExp, "")
    .toLowerCase();
export const contains = (b: any, a: any) => clean(b).includes(clean(a));
