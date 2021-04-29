import { actionButton, buttonWrapper } from "../../../Form.style";

import { NextIcon } from "@/components/Icons/Next";
import { css } from "catom";
import { useIsLoading } from "./ctx";

export function StepButtons({
  step,
  prev,
}: {
  step: number;
  prev(): void;
  // next(): void;
}) {
  const firstStep = step === 0;
  const lastStep = step === 4;
  const isLoading = useIsLoading();
  return (
    <div>
      <div class={buttonWrapper}>
        <button
          // element="button"
          // animId="prev-reg"
          type="button"
          onClick={prev}
          class={[
            actionButton,
            firstStep ? css({ opacity: ".5" }) : css({ flex: 1 }),
          ]}
          disabled={firstStep}
        >
          <NextIcon
            size="1rem"
            className={css({ transform: "rotate(180deg)" })}
          />
          {!firstStep && (
            <span class={css({ marginLeft: "5px", marginRight: "5px" })}>
              Previous
            </span>
          )}
        </button>

        <button
          style={lastStep ? { background: "var(--fg)" } : null}
          onClick={null}
          class={[actionButton, css({ flex: 1 })]}
        >
          {isLoading ? (
            "Wait.."
          ) : lastStep ? (
            "Submit"
          ) : (
            <>
              <span class={css({ marginLeft: "5px", marginRight: "5px" })}>
                Next
              </span>
              <NextIcon size="1rem" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
