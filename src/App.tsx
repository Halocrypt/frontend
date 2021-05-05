// javascript is supported
import "./App.css";

import { EVENT, IS_INTRA } from "./util/constants";

import { Halo2020 } from "./components/_Messages/Halo2020";
import { Header } from "./components/Header/Header";
import { Intra } from "./components/_Messages/Intra";
import { Link } from "./components/ExtLink/ExtLink";
import { Motion } from "@hydrophobefireman/ui-anim";
import { RouteLoader } from "./components/RouteLoader";
import { UpdateNudgeSnackbar } from "./components/UpdateNudge/UpdateNudge";
import { center } from "./style";
import { render } from "@hydrophobefireman/ui-lib";
import { useCredsCheck } from "./hooks/use-creds-check";
import { useEvent } from "./hooks/use-event";

function App() {
  const checked = useCredsCheck();
  const [event, error] = useEvent(EVENT);
  if (IS_INTRA) return <Intra />;
  if (error) return <div>{error}</div>;
  if (!checked) return <div>Checking credentials..</div>;
  if (!event) return <div>Fetching event data..</div>;
  return (
    <Motion>
      <main>
        <UpdateNudgeSnackbar />
        <Header />
        <RouteLoader />
        <VFooter />
      </main>
    </Motion>
  );
}
const FE_READY = true;
function VFooter() {
  return (
    <footer class={center}>
      <Link href={"https://vercel.com?utm_source=halocrypt&utm_campaign=oss"}>
        <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
      </Link>
    </footer>
  );
}

const out = !IS_INTRA && !FE_READY ? <Halo2020 /> : <App />;
render(out, document.getElementById("app-mount"));
