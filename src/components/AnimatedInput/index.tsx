import {
  ComponentChild,
  RefType,
  VNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "@hydrophobefireman/ui-lib";
import {
  errorCss,
  iconCSS,
  iconHasContent,
  paperInput,
  wrapperCSS,
} from "./AnimatedInput.styles";

import { Input } from "../InputRafFix/Input";

export interface InputProps
  extends Omit<JSX.HTMLAttributes<HTMLInputElement>, "onInput" | "icon"> {
  id?: string;
  value: string;
  onInput(value: string): void;
  wrapperClass?: string;
  labelText?: string;
  inputClass?: string | string[];
  inputProps?: JSX.HTMLAttributes;
  errorText?: string;
  $ref?: RefType<HTMLInputElement>;
  icon?: ComponentChild;
}

export function AnimatedInput(props: InputProps): VNode {
  const randomId = useMemo(() => Math.random().toString(36).substr(2), []);

  const {
    id = randomId,
    wrapperClass,
    onInput,
    labelText,
    inputClass,
    errorText,
    value,
    icon,
    $ref,
    ...rest
  } = props;
  const handleInput = useCallback(
    function (e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      return onInput(e.currentTarget.value);
    },
    [onInput]
  );
  const hasContent = `${!!value}`;
  return (
    <div class={[wrapperCSS].concat(wrapperClass)}>
      <Input
        $ref={$ref /*|| _ref*/}
        onInput={handleInput}
        id={id}
        value={value}
        data-error={!!errorText}
        class={[paperInput].concat(inputClass)}
        data-should-focus={hasContent}
        {...rest}
      />
      <label class={[errorText ? errorCss : null]} for={id}>
        {errorText || labelText}
      </label>
      {icon && <span class={value ? iconHasContent : iconCSS}>{icon}</span>}
    </div>
  );
}
