import { A, redirect, useState } from "@hydrophobefireman/ui-lib";
import { altLinkBox, formContainer, suggestionLink } from "@/Form.style";

import { EVENT } from "@/util/constants";
import { Email } from "@/components/FormFields/Email";
import { Institution } from "@/components/FormFields/Institution";
import { LoadingContext } from "./ctx";
import { Name } from "@/components/FormFields/Name";
import { Password } from "@/components/FormFields/Password";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { StepProgress } from "./StepProgress";
import { Username } from "@/components/FormFields/Username";
import { css } from "catom";
import { register } from "@/packages/halo-api/user";

export function RegisterForm() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [user, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  function next() {
    return setStep(step + 1);
  }
  function prev() {
    setStep(step - 1);
  }
  function reset() {
    setLoading(false);
    setError(null);
  }
  const common = { prev, next: step < 4 ? next : handleSubmit, step };
  const STEP_ELEMENTS = {
    0: <Username username={user} setUsername={setUsername} {...common} />,
    1: <Name name={name} setName={setName} {...common} />,
    2: <Email email={email} setEmail={setEmail} {...common} />,
    3: (
      <Institution
        institution={institution}
        setInstitution={setInstitution}
        {...common}
      />
    ),
    4: <Password password={password} setPassword={setPassword} {...common} />,
  };
  async function handleSubmit() {
    if (isLoading) return;
    setLoading(true);
    const { result } = register({
      email,
      institution,
      name,
      password,
      user,
      event: EVENT,
    });
    const { data, error } = await result;
    if (error) {
      setLoading(false);
      return setError(error);
    }
    if (data.user) {
      setSuccess("Account created, you can login now");
    }
  }
  return (
    <LoadingContext.Provider value={isLoading as any}>
      <Snackbar message={success} onClose={() => redirect("/login")} />
      <Snackbar message={error} onClose={reset} isError />
      <div class={formContainer}>
        <StepProgress step={step} setStep={setStep} />
        {STEP_ELEMENTS[step]}
        <div class={altLinkBox}>
          <A href="/login" class={suggestionLink}>
            Already have an account?
          </A>
        </div>
      </div>
    </LoadingContext.Provider>
  );
}
