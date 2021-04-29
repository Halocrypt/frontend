import { EVENT } from "@/util/constants";
import { css } from "catom";
import { formContainer } from "@/Form.style";
import { sendVerificationEmail } from "@/packages/halo-api/user";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useMount } from "@/hooks/use-mount";
import { useState } from "@hydrophobefireman/ui-lib";

export default function VerifyEmail() {
  const user = useAuthGuard("/verify-email");
  const [message, setMessage] = useState("Sending you an email");
  useMount(async () => {
    const { result } = sendVerificationEmail(EVENT);
    const { data, error } = await result;
    if (error)
      return setMessage(
        "Error(" + error + "). You can reload the page and try again"
      );
    setMessage(
      `An email has been sent to ${
        user._secure_ ? user._secure_.email : " your email"
      } , open it for further instructions`
    );
  });
  return (
    <section class={formContainer}>
      <h1 class={css({ fontSize: "2.2rem" })}>Email Verification</h1>
      <div>{message}</div>
    </section>
  );
}
