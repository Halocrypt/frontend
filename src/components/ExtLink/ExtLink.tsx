export function Link(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  const p = { ...props, target: "_blank", rel: "noopener" };
  return <a {...p} />;
}
