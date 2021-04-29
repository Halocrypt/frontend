import { AnimatedInput } from "@/components/AnimatedInput";
import { EmailIcon } from "@/components/Icons/Email";
import { Form } from "@/components/Form";
import { InputProps } from "../../pages/Register/RegisterForm/types";
import { StepButtons } from "../../pages/Register/RegisterForm/StepButtons";
import { emailValidator } from "@/packages/validator";
import { localError } from "../../Form.style";
import { useFocus } from "@/hooks/use-focus";
import { useState } from "@hydrophobefireman/ui-lib";

export function Email({
  prev,
  next,
  step,
  email,
  setEmail,
}: { email: string; setEmail(e: string): void } & InputProps) {
  const _error = emailValidator(email);
  const [error, setError] = useState("");
  function handleSubmit() {
    setError(_error);
    if (_error) return;
    next();
  }
  const ref = useFocus<HTMLInputElement>();
  return (
    <Form onSubmit={handleSubmit}>
      <AnimatedInput
        $ref={ref}
        value={email}
        onInput={(e) => {
          setError("");
          setEmail(e);
        }}
        labelText="Email"
        icon={<EmailIcon size="1.5rem" />}
        required
        type="email"
      />
      {error && <div class={localError}>{error}</div>}
      <StepButtons step={step} prev={prev} />
    </Form>
  );
}
