import {css} from "catom";

import {RichContent} from "@/components/RichContent/RichContent";
import {IQuestion} from "@/interfaces";
import {tALeft} from "@/style";

import {hintItem, questionContainer} from "./Play.style";

const heading = [tALeft, css({fontSize: "2rem", color: "var(--fg)"})].join(" ");
export function QuestionContent({
  question,
  index,
}: {
  question: IQuestion;
  index?: number;
}) {
  return (
    <div>
      <div class={heading}>Question {index}</div>
      <div class={questionContainer}>
        <RichContent content={question.question_content} />
      </div>
      {question.question_hints && question.question_hints.length > 0 && (
        <div class={css({marginTop: "2rem"})}>
          <div class={heading}>Hints</div>
          <ol class={css({paddingLeft: "0"})}>
            {question.question_hints.map((x) => (
              <li class={hintItem}>
                <RichContent content={x} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
