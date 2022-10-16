import {css} from "catom";

import questions from "@/data/questions.json";
import {IQuestion} from "@/interfaces";
import {useState} from "@hydrophobefireman/ui-lib";

import {QuestionContent} from "../Play/Question";

export default function Archive() {
  return (
    <ul class={css({maxWidth: "800px", width: "90%", margin: "auto"})}>
      {questions.data.map((q, i) => (
        <li class={css({listStyleType: "none"})}>
          <QuestionContent question={q as IQuestion} index={i} />
          <span>
            Answer: <Spoiler text={q._secure_.answer} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Spoiler({text}: {text: string}) {
  const [hide, setHide] = useState(false);
  return (
    <button
      class={
        !hide
          ? css({
              color: "var(--fg)",
              backgroundColor: "var(--fg)",
              padding: "0.15rem",
            })
          : css({padding: "0.15rem"})
      }
      onClick={() => setHide(!hide)}
    >
      {text}
    </button>
  );
}
