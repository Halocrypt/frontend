// javascript is supported
import "./App.css";

import { EVENT, IS_INTRA } from "./util/constants";

import { Header } from "./components/Header/Header";
import { Intra } from "./components/_Messages/Intra";
import { Motion } from "@hydrophobefireman/ui-anim";
import { RouteLoader } from "./components/RouteLoader";
import { UpdateNudgeSnackbar } from "./components/UpdateNudge/UpdateNudge";
import { render } from "@hydrophobefireman/ui-lib";
import { useCredsCheck } from "./hooks/use-creds-check";
import { useEvent } from "./hooks/use-event";

function App() {
  // if (IS_INTRA) return <Intra />;
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

render(<App />, document.getElementById("app-mount"));
