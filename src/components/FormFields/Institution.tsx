import { AnimatedInput, InputProps } from "@/components/AnimatedInput";

import { Form } from "@/components/Form";
import { InstitutionIcon } from "@/components/Icons/Institution";
import { RegInputProps } from "../../pages/Register/RegisterForm/types";
import { StepButtons } from "../../pages/Register/RegisterForm/StepButtons";
import { useFocus } from "@/hooks/use-focus";

export function Institution({
  prev,
  next,
  step,
  institution,
  setInstitution,
}: { institution: string; setInstitution(e: string): void } & RegInputProps) {
  function handleSubmit() {
    next();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InstitutionInput
        institution={institution}
        setInstitution={setInstitution}
      />
      <StepButtons step={step} prev={prev} />
    </Form>
  );
}

interface InstitutionInputProps extends Partial<InputProps> {
  institution: string;
  setInstitution(s: string): void;
  wrapperClass?: string;
  noFocus?: boolean;
}
export function InstitutionInput({
  institution,
  setInstitution,
  wrapperClass,
  noFocus,
  ...rest
}: InstitutionInputProps) {
  const ref = useFocus<HTMLInputElement>();
  return (
    <AnimatedInput
      $ref={noFocus ? null : ref}
      wrapperClass={wrapperClass}
      value={institution}
      onInput={(e) => {
        setInstitution(e);
      }}
      labelText="Institution"
      icon={<InstitutionIcon size="1.5rem" />}
      {...rest}
    />
  );
}
