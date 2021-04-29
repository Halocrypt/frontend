import { actionButton, buttonWrapper } from "../../../Form.style";

import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { NextIcon } from "@/components/Icons/Next";
import { css } from "catom";

export function StepButtons({
  step,
  prev,
}: {
  step: number;
  prev(): void;
  // next(): void;
}) {
  const firstStep = step === 0;
  return (
    <div>
      <div class={buttonWrapper}>
        <AnimateLayout
          element="button"
          animId="prev-reg"
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
        </AnimateLayout>

        <AnimateLayout
          element="button"
          animId="next-reg"
          onClick={null}
          class={[actionButton, css({ flex: 1 })]}
        >
          <span class={css({ marginLeft: "5px", marginRight: "5px" })}>
            Next
          </span>
          <NextIcon size="1rem" />
        </AnimateLayout>
      </div>
    </div>
  );
}
