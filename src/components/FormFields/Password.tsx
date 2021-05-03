import { AnimatedInput, InputProps } from "@/components/AnimatedInput";
import {
  HidePasswordIcon,
  ShowPasswordIcon,
} from "@/components/Icons/Password";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { Form } from "@/components/Form";
import { RegInputProps } from "@/pages/Register/RegisterForm/types";
import { StepButtons } from "@/pages/Register/RegisterForm/StepButtons";
import { localError } from "@/Form.style";
import { marginAuto } from "@/style";
import { passwordValidator } from "@/packages/validator";
import { useFocus } from "@/hooks/use-focus";

export function Password({
  prev,
  next,
  step,
  password,
  setPassword,
}: {
  password: string;
  setPassword(e: string): void;
} & Partial<RegInputProps>) {
  const _error = passwordValidator(password);
  const [error, setError] = useState("");
  function handleSubmit() {
    setError(_error);
    if (_error) return;
    next();
  }
  useEffect(() => setError(null), [password]);
  return (
    <Form onSubmit={handleSubmit}>
      <PasswordInput
        password={password}
        setPassword={setPassword}
        wrapperClass={marginAuto}
      />

      {error && <div class={localError}>{error}</div>}
      {step != null && prev && <StepButtons step={step} prev={prev} />}
    </Form>
  );
}

interface PasswordInputProps extends Partial<InputProps> {
  password: string;
  setPassword(s: string): void;
  noFocus?: boolean;
  wrapperClass?: string;
}
export function PasswordInput({
  password,
  setPassword,
  noFocus,
  wrapperClass,
  ...rest
}: PasswordInputProps) {
  const [type, setType] = useState("password");
  const toggle = () => setType(type === "password" ? "text" : "password");
  const ref = useFocus<HTMLInputElement>();
  return (
    <AnimatedInput
      $ref={!noFocus && ref}
      type={type}
      value={password}
      wrapperClass={wrapperClass}
      onInput={setPassword}
      labelText="Password"
      icon={
        type === "password" ? (
          <ShowPasswordIcon invert onClick={toggle} size="1.5rem" />
        ) : (
          <HidePasswordIcon onClick={toggle} size="1.5rem" />
        )
      }
      required
      {...rest}
    />
  );
}
