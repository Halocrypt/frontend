import { formContainer, themeSubmitButton } from "@/Form.style";
import { useRoute, useState } from "@hydrophobefireman/ui-lib";

import { css } from "catom";
import { sendVerificationEmailToken } from "@/packages/halo-api/user";
import { useMount } from "@/hooks/use-mount";

export default function ConfirmEmail() {
  const { search } = useRoute();
  const token = search.get("token");
  const [message, setMessage] = useState("HI, Click the button to proceed");
  const [loading, setLoading] = useState(false);
  async function sendToken() {
    if (loading) return;
    setMessage("Checking...");
    setLoading(true);
    const { result } = sendVerificationEmailToken(token);
    const { error } = await result;
    if (error)
      return setMessage("An error occured (" + error + "). Try again later?");
    setMessage("Thanks for verifying");
  }
  if (!token) return <div>ok..?</div>;
  return (
    <section class={formContainer}>
      <h1 class={css({ fontSize: "2rem" })}>Email Verification</h1>
      <div>{message}</div>
      <div>
        {!loading && (
          <button
            onClick={sendToken}
            class={themeSubmitButton}
            style={{ maxWidth: "300px", marginTop: "2rem" }}
          >
            Confirm Email
          </button>
        )}
      </div>
    </section>
  );
}
