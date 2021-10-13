// javascript is supported
import "./App.css";

import { Motion } from "@hydrophobefireman/ui-anim";
import { render } from "@hydrophobefireman/ui-lib";

import { Header } from "./components/Header/Header";
import { RouteLoader } from "./components/RouteLoader";
import { UpdateNudgeSnackbar } from "./components/UpdateNudge/UpdateNudge";
import { Intra } from "./components/_Messages/Intra";
import { useCredsCheck } from "./hooks/use-creds-check";
import { useEvent } from "./hooks/use-event";
import { importCurrentRoute } from "./routes/import-current";
import { EVENT, IS_INTRA } from "./util/constants";

console.trace = () => {};
function App() {
  const checked = useCredsCheck();
  const [event, error] = useEvent(EVENT);
  if (error) return <div>{error}</div>;
  if (!checked) return <div>Checking credentials..</div>;
  if (!event) return <div>Fetching event data..</div>;
  return (
    <Motion>
      <main>
        <UpdateNudgeSnackbar />
        <Header />
        <RouteLoader />
      </main>
    </Motion>
  );
}
!IS_INTRA && importCurrentRoute();
render(IS_INTRA ? <Intra /> : <App />, document.getElementById("app-mount"));
