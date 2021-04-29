import { AnimatedInput } from "@/components/AnimatedInput";
import { Form } from "@/components/Form";
import { InputProps } from "@/pages/Register/RegisterForm/types";
import { StepButtons } from "@/pages/Register/RegisterForm/StepButtons";
import { UserIcon } from "@/components/Icons/User";
import { localError } from "@/Form.style";
import { nameValidator } from "@/packages/validator";
import { useFocus } from "@/hooks/use-focus";
import { useState } from "@hydrophobefireman/ui-lib";

export function Name({
  prev,
  next,
  step,
  name,
  setName,
}: { name: string; setName(e: string): void } & InputProps) {
  const _error = nameValidator(name);
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
        value={name}
        onInput={(e) => {
          setError("");
          setName(e);
        }}
        labelText="Name"
        icon={<UserIcon size="1.5rem" />}
        required
      />
      {error && <div class={localError}>{error}</div>}
      <StepButtons step={step} prev={prev} />
    </Form>
  );
}
