import { hintItem, questionContainer } from "./Play.style";

import { IQuestion } from "@/interfaces";
import { RichContent } from "@/components/RichContent/RichContent";
import { css } from "catom";
import { tALeft } from "@/style";
const heading = [tALeft, css({ fontSize: "2rem" })].join(" ");
export function QuestionContent({ question }: { question: IQuestion }) {
  return (
    <div>
      <div class={heading}>Question:</div>
      <div class={questionContainer}>
        <RichContent content={question.question_content} />
      </div>
      {question.question_hints && question.question_hints.length > 0 && (
        <div class={css({ marginTop: "2rem" })}>
          <div class={heading}>Hints</div>
          <ul>
            {question.question_hints.map((x) => (
              <li class={hintItem}>
                <RichContent content={x} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
