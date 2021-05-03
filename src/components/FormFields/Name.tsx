import { AnimatedInput, InputProps } from "@/components/AnimatedInput";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { Form } from "@/components/Form";
import { RegInputProps } from "@/pages/Register/RegisterForm/types";
import { StepButtons } from "@/pages/Register/RegisterForm/StepButtons";
import { UserIcon } from "@/components/Icons/User";
import { localError } from "@/Form.style";
import { marginAuto } from "@/style";
import { nameValidator } from "@/packages/validator";
import { useFocus } from "@/hooks/use-focus";

export function Name({
  prev,
  next,
  step,
  name,
  setName,
}: { name: string; setName(e: string): void } & RegInputProps) {
  const _error = nameValidator(name);
  const [error, setError] = useState("");
  function handleSubmit() {
    setError(_error);
    if (_error) return;
    next();
  }
  useEffect(() => setError(null), [name]);
  return (
    <Form onSubmit={handleSubmit}>
      {error && <div class={localError}>{error}</div>}
      <NameInput name={name} setName={setName} wrapperClass={marginAuto} />
      <StepButtons step={step} prev={prev} />
    </Form>
  );
}

interface NameInputProps extends Partial<InputProps> {
  name: string;
  setName(s: string): void;
  wrapperClass?: string;
  noFocus?: boolean;
}
export function NameInput({
  name,
  setName,
  wrapperClass,
  noFocus,
  ...rest
}: NameInputProps) {
  const ref = useFocus<HTMLInputElement>();
  return (
    <AnimatedInput
      $ref={noFocus ? null : ref}
      wrapperClass={wrapperClass}
      value={name}
      onInput={setName}
      labelText="Name"
      icon={<UserIcon size="1.5rem" />}
      required
      {...rest}
    />
  );
}
