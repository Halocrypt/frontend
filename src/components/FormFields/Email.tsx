import { AnimatedInput, InputProps } from "@/components/AnimatedInput";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { EmailIcon } from "@/components/Icons/Email";
import { Form } from "@/components/Form";
import { RegInputProps } from "../../pages/Register/RegisterForm/types";
import { StepButtons } from "../../pages/Register/RegisterForm/StepButtons";
import { emailValidator } from "@/packages/validator";
import { localError } from "../../Form.style";
import { marginAuto } from "@/style";
import { useFocus } from "@/hooks/use-focus";

export function Email({
  prev,
  next,
  step,
  email,
  setEmail,
}: { email: string; setEmail(e: string): void } & RegInputProps) {
  const _error = emailValidator(email);
  const [error, setError] = useState("");
  function handleSubmit() {
    setError(_error);
    if (_error) return;
    next();
  }
  useEffect(() => setError(null), [email]);
  return (
    <Form onSubmit={handleSubmit}>
      <EmailInput email={email} setEmail={setEmail} wrapperClass={marginAuto} />
      {error && <div class={localError}>{error}</div>}
      <StepButtons step={step} prev={prev} />
    </Form>
  );
}

interface EmailInputProps extends Partial<InputProps> {
  email: string;
  setEmail(s: string): void;
  wrapperClass?: string;
  noFocus?: boolean;
}

export function EmailInput({
  email,
  setEmail,
  wrapperClass,
  noFocus,
}: EmailInputProps) {
  const ref = useFocus<HTMLInputElement>();

  return (
    <AnimatedInput
      $ref={noFocus ? null : ref}
      wrapperClass={wrapperClass}
      value={email}
      onInput={setEmail}
      labelText="Email"
      type="email"
      icon={<EmailIcon size="1.5rem" />}
      required
    />
  );
}
