import { authBox, authHeading } from "@/Form.style";

import { LoginForm } from "./LoginForm/LoginForm";
import { useLoggedinCheck } from "@/hooks/use-login-check";

export default function Register() {
  useLoggedinCheck();
  return (
    <section class={authBox}>
      <h1 class={authHeading}>Login.</h1>
      <LoginForm />
    </section>
  );
}
