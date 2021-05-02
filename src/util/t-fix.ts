export const tFix = (t: string | number) => {
  t = "" + t;
  return (t.length === 1 ? "0" : "") + t;
};
