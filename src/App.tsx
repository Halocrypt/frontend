// javascript is supported
import "./App.css";

import { EVENT, IS_INTRA } from "./util/constants";

import { Header } from "./components/Header/Header";
import { Intra } from "./components/_Messages/Intra";
import { Motion } from "@hydrophobefireman/ui-anim";
const oldFetch = fetch;
window.fetch = (u, ...a) => {
  alert(u);
  return oldFetch(u, ...a);
};
import { RouteLoader } from "./components/RouteLoader";
import { UpdateNudgeSnackbar } from "./components/UpdateNudge/UpdateNudge";
import { importCurrentRoute } from "./routes/import-current";
import { render } from "@hydrophobefireman/ui-lib";
import { useCredsCheck } from "./hooks/use-creds-check";
import { useEvent } from "./hooks/use-event";
console.log = console.warn = console.error = alert.bind(window);
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
