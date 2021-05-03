import { RefType, useLayoutEffect, useRef } from "@hydrophobefireman/ui-lib";

export function Input(
  props: JSX.HTMLAttributes<HTMLInputElement> & {
    $ref: RefType<HTMLInputElement>;
  }
) {
  const { value, $ref, ...rest } = props;
  const _ref = useRef<HTMLInputElement>();
  const ref = $ref || _ref;

  useLayoutEffect(() => {
    const r = ref.current;
    if (r && r.value !== value) {
      r.value = value as any;
    }
  }, [value]);
  return <input {...rest} />;
}
