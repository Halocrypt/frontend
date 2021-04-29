import { useRoute, useState } from "@hydrophobefireman/ui-lib";

import { css } from "catom";
import { formContainer } from "@/Form.style";
import { sendVerificationEmailToken } from "@/packages/halo-api/user";
import { useMount } from "@/hooks/use-mount";

export default function ConfirmEmail() {
  const { search } = useRoute();
  const token = search.get("token");
  const [message, setMessage] = useState("Checking..");
  useMount(async () => {
    const { result } = sendVerificationEmailToken(token);
    const { error } = await result;
    if (error) return setMessage(error);
    setMessage("Thanks for verifying");
  });
  return (
    <section class={formContainer}>
      <h1 class={css({ fontSize: "2rem" })}>Email Verification</h1>
      <div>{message}</div>
    </section>
  );
}
