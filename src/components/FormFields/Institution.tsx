import { AnimatedInput } from "@/components/AnimatedInput";
import { Form } from "@/components/Form";
import { InputProps } from "../../pages/Register/RegisterForm/types";
import { InstitutionIcon } from "@/components/Icons/Institution";
import { StepButtons } from "../../pages/Register/RegisterForm/StepButtons";
import { useFocus } from "@/hooks/use-focus";

export function Institution({
  prev,
  next,
  step,
  institution,
  setInstitution,
}: { institution: string; setInstitution(e: string): void } & InputProps) {
  function handleSubmit() {
    next();
  }
  const ref = useFocus<HTMLInputElement>();
  return (
    <Form onSubmit={handleSubmit}>
      <AnimatedInput
        $ref={ref}
        value={institution}
        onInput={setInstitution}
        labelText="Institution (optional)"
        icon={<InstitutionIcon size="1.5rem" />}
      />
      <StepButtons step={step} prev={prev} />
    </Form>
  );
}
