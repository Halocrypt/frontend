import {css} from "catom";

import {formContainer, inputMargin, themeSubmitButton} from "@/Form.style";
import {client} from "@/bridge";
import {Form} from "@/components/Form";
import {PasswordInput} from "@/components/FormFields/Password";
import {Snackbar} from "@/components/Snackbar/Snackbar";
import {useMount} from "@/hooks/use-mount";
import {setNewPassword} from "@/packages/halo-api/user";
import {redirect, useRoute, useState} from "@hydrophobefireman/ui-lib";

export default function ResetPassword() {
  const {search} = useRoute();
  const token = search.get("token");
  const user = search.get("user");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    if (loading || !user || !token || !password) return;
    setLoading(true);
    const {result} = setNewPassword(user, {token, new_password: password});
    const {error} = await result;
    if (error) return setError(error);
    return setMessage("Your password has been reset. Log in again");
  }
  function reset() {
    setLoading(false);
    setMessage("");
    setError("");
  }
  if (!token) return <div>ok..?</div>;
  return (
    <section class={formContainer}>
      <Form onSubmit={handleSubmit}>
        <Snackbar message={error} onClose={reset} isError />
        <Snackbar
          message={message}
          onClose={() => {
            client.logoutCurrent();
            redirect("/login");
          }}
        />
        <h1 class={css({fontSize: "2rem"})}>Reset Password</h1>
        <PasswordInput
          password={password}
          setPassword={setPassword}
          wrapperClass={inputMargin}
        />
        <button class={themeSubmitButton} aria-label="Submit">
          {loading ? "Hold on..." : "Submit"}
        </button>
      </Form>
    </section>
  );
}
