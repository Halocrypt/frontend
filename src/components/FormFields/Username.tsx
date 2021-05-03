import { AnimatedInput, InputProps } from "@/components/AnimatedInput";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { Form } from "@/components/Form";
import { RegInputProps } from "@/pages/Register/RegisterForm/types";
import { StepButtons } from "@/pages/Register/RegisterForm/StepButtons";
import { UserIcon } from "@/components/Icons/User";
import { localError } from "@/Form.style";
import { marginAuto } from "@/style";
import { raf } from "@/util/raf";
import { useFocus } from "@/hooks/use-focus";
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
  useEffect(() => setError(null), [username]);
  return (
    <Form onSubmit={handleSubmit}>
      <UsernameInput
        setUsername={setUsername}
        username={username}
        wrapperClass={marginAuto}
      />
      <div class={localError}>{error}</div>
      {step != null && prev && <StepButtons step={step} prev={prev} />}
    </Form>
  );
}

interface UsernameInputProps extends Partial<InputProps> {
  username: string;
  setUsername(s: string): void;
  wrapperClass?: string;
}
export function UsernameInput({
  username,
  setUsername,
  wrapperClass,
  ...rest
}: UsernameInputProps) {
  const ref = useFocus<HTMLInputElement>();
  return (
    <AnimatedInput
      $ref={ref}
      wrapperClass={wrapperClass}
      value={username}
      onInput={setUsername}
      labelText="Username"
      icon={<UserIcon size="1.5rem" />}
      pattern="\w+"
      minLength={2}
      title="Letters, numbers and underscore ( _ )"
      spellcheck={false}
      {...rest}
    />
  );
}
