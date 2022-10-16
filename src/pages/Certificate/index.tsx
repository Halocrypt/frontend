import {css} from "catom";

import {themeSubmitButton} from "@/Form.style";
import {Form} from "@/components/Form";
import {NameInput} from "@/components/FormFields/Name";
import {UsernameInput} from "@/components/FormFields/Username";
import {useAuthGuard} from "@/hooks/use-auth-guard";
import {useCertiProxy} from "@/hooks/use-certi-proxy";
import {center} from "@/style";
import {useRoute, useState} from "@hydrophobefireman/ui-lib";

function CertificateRenderer({impersonate}: {impersonate?: string}) {
  const {error, imageURL} = useCertiProxy(impersonate);
  if (error) return <div>{error}</div>;
  if (!imageURL)
    return <div>Decrypting and downloading your certificate....</div>;
  return (
    <div>
      <div class={css({marginBottom: "1rem"})}>Click the image to download</div>
      <img
        onClick={imageURL && (() => download(imageURL))}
        class={css({maxWidth: "80vw"})}
        src={imageURL}
      />
    </div>
  );
}

export function _Certificate({customUser}: {customUser?: string}) {
  const {search} = useRoute();
  customUser ||= search.get("user");

  return (
    <section class={center}>
      <h1 class={css({fontSize: "2rem", marginBottom: "2rem"})}>Certificate</h1>
      <div>
        <CertificateRenderer impersonate={customUser} />
      </div>
    </section>
  );
}

export default function Certificate() {
  const [username, setUsername] = useState("");
  const [subValue, setSubValue] = useState("");
  function handleSubmit() {
    setSubValue(username);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div class={css({maxWidth: "60%", margin: "auto"})}>
          <UsernameInput
            inputClass={css({width: "100%"})}
            username={username}
            setUsername={setUsername}
            icon={null}
          />
          <div class={css({width: "150px", marginTop: "1rem"})}>
            <button class={themeSubmitButton}>Submit</button>
          </div>
        </div>
      </Form>
      <div>{subValue && <_Certificate customUser={subValue} />}</div>
    </>
  );
}
function download(url: string, name = "certificate.png") {
  const a = document.createElement("a");
  a.download = name;
  a.href = url;
  a.click();
  return url;
}
