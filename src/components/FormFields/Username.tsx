import { AnimatedInput, InputProps } from "@/components/AnimatedInput";

import { Form } from "@/components/Form";
import { RegInputProps } from "@/pages/Register/RegisterForm/types";
import { StepButtons } from "@/pages/Register/RegisterForm/StepButtons";
import { UserIcon } from "@/components/Icons/User";
import { localError } from "@/Form.style";
import { marginAuto } from "@/style";
import { useFocus } from "@/hooks/use-focus";
import { useState } from "@hydrophobefireman/ui-lib";
import { usernameValidator } from "@/packages/validator";

export function Username({
  next,
  prev,
  step,
  setUsername,
  username,
}: {
  username: string;
  setUsername(u: string): void;
} & Partial<RegInputProps>) {
  const _error = usernameValidator(username);
  const [error, setError] = useState("");
  function handleSubmit() {
    setError(_error);
    if (_error) return;
    next();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <UsernameInput
        setError={setError}
        setUsername={setUsername}
        username={username}
        wrapperClass={marginAuto}
      />
      {error && <div class={localError}>{error}</div>}
      {step != null && prev && <StepButtons step={step} prev={prev} />}
    </Form>
  );
}

interface UsernameInputProps extends Partial<InputProps> {
  username: string;
  setUsername(s: string): void;
  setError?(e: string): void;
  wrapperClass?: string;
}
export function UsernameInput({
  username,
  setUsername,
  setError,
  wrapperClass,
  ...rest
}: UsernameInputProps) {
  const ref = useFocus<HTMLInputElement>();
  return (
    <AnimatedInput
      $ref={ref}
      wrapperClass={wrapperClass}
      value={username}
      onInput={(e) => {
        setError && setError("");
        setUsername(e);
      }}
      labelText="Username"
      icon={<UserIcon size="1.5rem" />}
      pattern="\w+"
      minLength={2}
      title="Letters, numbers and underscore ( _ )"
      {...rest}
    />
  );
}
