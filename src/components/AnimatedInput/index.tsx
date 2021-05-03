import {
  ComponentChild,
  RefType,
  VNode,
  useCallback,
  useMemo,
} from "@hydrophobefireman/ui-lib";
import {
  errorCss,
  iconCSS,
  iconHasContent,
  paperInput,
  wrapperCSS,
} from "./AnimatedInput.styles";

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
  const handleInput = function (
    e: JSX.TargetedKeyboardEvent<HTMLInputElement>
  ) {
    e.preventDefault();
    return onInput(e.currentTarget.value);
  };
  const hasContent = `${!!value}`;
  return (
    <div class={[wrapperCSS].concat(wrapperClass)}>
      <input
        ref={$ref}
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
