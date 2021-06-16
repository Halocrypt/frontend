import { center } from "@/style";
import { css } from "catom";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useCertiProxy } from "@/hooks/use-certi-proxy";
import { useRoute } from "@hydrophobefireman/ui-lib";

function CertificateRenderer({ impersonate }: { impersonate?: string }) {
  const { error, imageURL } = useCertiProxy(impersonate);
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
  const { search } = useRoute();
  const customUser = search.get("user");
  if (!user) return;
  if (customUser && !user.is_admin) return <div>No.</div>;
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
            <CertificateRenderer
              impersonate={customUser == user.user ? null : customUser}
            />
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
