import { A, useState } from "@hydrophobefireman/ui-lib";
import {
  altLinkBox,
  formContainer,
  inputMargin,
  suggestionLink,
} from "@/Form.style";

import { EVENT } from "@/util/constants";
import { Form } from "@/components/Form";
import { NextIcon } from "@/components/Icons/Next";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { UsernameInput } from "@/components/FormFields/Username";
import { css } from "catom";
import { requestNewPassword } from "@/packages/halo-api/user";
import { themeSubmitButton } from "@/Form.style";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit() {
    if (loading) return;
    setLoading(true);
    const { result } = requestNewPassword(username, EVENT);
    const { error } = await result;
    if (error) return setError(error);
    setMessage(
      "An email has been sent to you, follow the steps to reset your password"
    );
    reset();
  }
  function reset() {
    setError(null);
    setLoading(false);
  }
  if (message) return <div class={formContainer}>{message}</div>;
  return (
    <Form onSubmit={handleSubmit}>
      <section class={formContainer}>
        <h1 class={css({ fontSize: "2rem" })}>Forgot Password?</h1>
        <Snackbar onClose={reset} message={error} isError />
        <UsernameInput
          wrapperClass={inputMargin}
          username={username}
          setUsername={setUsername}
        />
        <button class={themeSubmitButton}>
          {loading ? (
            "Hold on..."
          ) : (
            <>
              <span class={css({ marginLeft: "5px", marginRight: "5px" })}>
                Send me an email
              </span>
              <NextIcon size="1.2rem" />
            </>
          )}
        </button>
        <div class={altLinkBox}>
          <A class={suggestionLink} href="/login">
            Login
          </A>
          <A class={suggestionLink} href="/register">
            Register
          </A>
        </div>
      </section>
    </Form>
  );
}
