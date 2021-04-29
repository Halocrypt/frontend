import { authBox, authHeading } from "@/Form.style";

import { RegisterForm } from "./RegisterForm/RegisterForm";
import { useLoggedinCheck } from "@/hooks/use-login-check";

export default function Register() {
  useLoggedinCheck();
  return (
    <section class={authBox}>
      <h1 class={authHeading}>Let's get you started.</h1>
      <RegisterForm />
    </section>
  );
}
