import { center } from "@/style";
import { css } from "catom";
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
      <img class={css({ maxWidth: "80vw" })} src={imageURL} />
    </div>
  );
}

export default function Certificate() {
  return (
    <section class={center}>
      <h1 class={css({ fontSize: "2rem", marginBottom: "2rem" })}>
        Certificate
      </h1>
      <div>
        <CertificateRenderer />
      </div>
    </section>
  );
}
