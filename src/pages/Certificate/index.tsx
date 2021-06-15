import { center } from "@/style";
import { css } from "catom";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useCertiProxy } from "@/hooks/use-certi-proxy";

function CertificateRenderer() {
  const { error, imageURL } = useCertiProxy();
  if (error) return <div>{error}</div>;
  if (!imageURL)
    return <div>Decrypting and downloading your certificate....</div>;
  return (
    <div>
      <div class={css({ marginBottom: "1rem" })}>
        Click the image to download
      </div>
      <img
        onClick={imageURL && (() => download(imageURL))}
        class={css({ maxWidth: "80vw" })}
        src={imageURL}
      />
    </div>
  );
}

export default function Certificate() {
  const user = useAuthGuard("/certificate");

  return (
    <section class={center}>
      {user.is_disqualified ? (
        <>
          <h1>Here's your certificate :)</h1>
          <div>
            <img src="https://quic.ml/answer" />
          </div>
        </>
      ) : (
        <>
          <h1 class={css({ fontSize: "2rem", marginBottom: "2rem" })}>
            Certificate
          </h1>
          <div>
            <CertificateRenderer />
          </div>
        </>
      )}
    </section>
  );
}

function download(url: string, name = "certificate.png") {
  const a = document.createElement("a");
  a.download = name;
  a.href = url;
  a.click();
  return url;
}
