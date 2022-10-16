// javascript is supported
import "./App.css";

import {Motion} from "@hydrophobefireman/ui-anim";
import {render} from "@hydrophobefireman/ui-lib";

import {Header} from "./components/Header/Header";
import {RouteLoader} from "./components/RouteLoader";
import {UpdateNudgeSnackbar} from "./components/UpdateNudge/UpdateNudge";
import {Intra} from "./components/_Messages/Intra";
import {useCredsCheck} from "./hooks/use-creds-check";
import {useEvent} from "./hooks/use-event";
import {importCurrentRoute} from "./routes/import-current";
import {EVENT, IS_INTRA} from "./util/constants";

function App() {
  useEvent(EVENT);
  return (
    <Motion>
      <main>
        <Header />
        <RouteLoader />
      </main>
    </Motion>
  );
}
!IS_INTRA && importCurrentRoute();
render(IS_INTRA ? <Intra /> : <App />, document.getElementById("app-mount"));
