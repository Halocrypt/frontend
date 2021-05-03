import {
  A,
  loadURL,
  redirect,
  useRef,
  useState,
} from "@hydrophobefireman/ui-lib";
import { DISCORD_URL, EVENT, TWITTER_URL } from "@/util/constants";
import {
  answerButton,
  contentDivider,
  contentSection,
  helpLink,
  inputContainer,
  playSection,
  prevAnsBox,
  prevAnsEven,
  prevAnsHeading,
  prevAnsOdd,
  questionHeading,
} from "./Play.style";
import { updateDisqualification, useQuestion } from "./use-question";

import { Form } from "@/components/Form";
import { IQuestion } from "@/interfaces";
import { Link } from "@/components/ExtLink/ExtLink";
import { NextIcon } from "@/components/Icons/Next";
import { QuestionContent } from "./Question";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { Timer } from "../Landing/Timer/Timer";
import { answerInput } from "@/Form.style";
import { answer as answerQuestion } from "@/packages/halo-api/play";
import { clean } from "@/packages/validator/util";
import { css } from "catom";
import { eventAtom } from "@/state";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { useAuthState } from "@/bridge";
import { useNotifCount } from "../../hooks/use-notifications";
import { usePreviousAttempts } from "./use-previous-attempts";
import { useRerender } from "@/hooks/use-rerender";
import { useSharedStateValue } from "statedrive";

export default function Play() {
  useAuthGuard("/play");
  const event = useSharedStateValue(eventAtom);
  const startTime = event.event_start_time * 1000;
  const rerender = useRerender();
  if (startTime > +new Date())
    return <Timer target={startTime} onComplete={rerender} />;

  return <Question />;
}

function Question() {
  const [user, setUser] = useAuthState();
  const {
    question,
    error,
    fetchQuestion,
    clearError,
    clearQuestion,
  } = useQuestion(user, setUser);
  const [answer, setAnswer] = useState("");
  const ref = useRef<HTMLInputElement>();
  function focus() {
    ref.current && ref.current.focus();
  }
  function blur() {
    ref.current && ref.current.blur();
  }
  const { prev, add: addPrev, clear: clearPrev } = usePreviousAttempts(
    question && (question as IQuestion).question_number
  );
  const [message, setMessage] = useState(null);
  const [answerError, setAnswerError] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { notifCount, markRead } = useNotifCount();
  function resetErrors() {
    clearError();
    setAnswer(null);
    focus();
  }
  function clearStateAndFetchNextQuestion() {
    clearQuestion();
    window.scroll(0, 0);
    fetchQuestion(true);
    setMessage(null);
    setAnswerError(null);
    clearError();
    clearPrev();
  }
  if (error) return <div>{error}</div>;
  if (!question) return <div>Loading..</div>;
  if ("game_over" in question || gameOver) {
    return (
      <section class={playSection}>
        <h1 class={questionHeading}>Game over?</h1>
      </section>
    );
  }
  async function handleSubmit() {
    if (isLoading || !clean(answer)) return;
    blur();
    setLoading(true);
    setMessage("Checking...");
    setAnswer(null);
    addPrev(answer);
    const { result } = answerQuestion(EVENT, { answer });
    const { data, error } = await result;
    setLoading(false);
    if (error) {
      return setAnswerError(error);
    }
    if (data.game_over) {
      return setGameOver(true);
    }
    if (data.disqualified) {
      clearPrev();
      updateDisqualification(user, setUser, data.reason);
      return redirect("/u/me");
    }
    if (data.is_correct) {
      return clearStateAndFetchNextQuestion();
    }
    return setMessage("Yeah, that's not correct");
  }
  return (
    <section class={playSection}>
      {notifCount > 0 && (
        <Snackbar
          message="You have new notifications"
          onClose={markRead}
          onButtonClick={() => loadURL("/play/notifications")}
          buttonText="Open"
        />
      )}
      <Snackbar message={answerError} onClose={resetErrors} isError />
      <Snackbar message={error} onClose={resetErrors} isError />
      <Snackbar
        message={message}
        onClose={() => {
          if (!isLoading) {
            setMessage(null);
            focus();
          }
        }}
      />
      <h1 class={questionHeading}>
        Level {question.question_number} - {question.question_points} Points
      </h1>
      <div class={contentDivider}>
        <div class={contentSection}>
          <QuestionContent question={question} />
          <Form onSubmit={handleSubmit}>
            <div class={inputContainer}>
              <input
                ref={ref}
                placeholder="Answer"
                value={answer}
                class={answerInput}
                onInput={(x) => setAnswer(x.currentTarget.value)}
              />
              <button class={answerButton} aria-label="Submit">
                <NextIcon size="1.2rem" />
              </button>
            </div>
          </Form>
        </div>
        <div>
          <div>
            {"For hints & help, check out "}
            <A href="/play/notifications" class={helpLink}>
              Notifications
            </A>
            , visit our{" "}
            <Link class={helpLink} href={TWITTER_URL}>
              Twitter
            </Link>{" "}
            or join our{" "}
            <Link class={helpLink} href={DISCORD_URL}>
              Discord server
            </Link>
            .
          </div>
        </div>
        <PreviousAttempts prev={prev} />
      </div>
    </section>
  );
}

function PreviousAttempts({ prev }: { prev: string[] }) {
  return (
    <section class={[contentSection, css({ maxWidth: "600px" })]}>
      <div>
        <h1 class={prevAnsHeading}>Previous Answers</h1>
        {prev.length > 0 ? (
          <div class={prevAnsBox}>
            {prev.map((x, i) => (
              <div class={i % 2 ? prevAnsOdd : prevAnsEven}>{x}</div>
            ))}
          </div>
        ) : (
          <div>Your previous attempts will appear here</div>
        )}
      </div>
    </section>
  );
}
