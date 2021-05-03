import { RefType, useEffect, useLayoutEffect, useRef } from "@hydrophobefireman/ui-lib";

export function Input(
  props: JSX.HTMLAttributes<HTMLInputElement> & {
    $ref: RefType<HTMLInputElement>;
  }
) {
  const { value, $ref, ...rest } = props;
  const _ref = useRef<HTMLInputElement>();
  const ref = $ref || _ref;
  const r = ref.current;
  useEffect(() => {
    if (r && r.value !== value) {
      r.value = value as any;
    }
  }, [value, r]);
  return <input {...rest} ref={ref} value={value} />;
}
