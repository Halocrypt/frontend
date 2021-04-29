import {
  borderActive,
  borderInactive,
  indicatorHeading,
  indicatorHeadingActive,
  indicatorWrap,
} from "../../../components/FormFields/StepProgress.style";

import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { css } from "catom";
import { formContainer600px } from "@/Form.style";
import { hideOnMobile } from "@/style";

const stepProgressBox = [
  hideOnMobile,
  formContainer600px,
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "1rem",
    fontWeight: "bold",
    marginBottom: "3rem",
  }),
].join(" ");
export function StepProgress({ step }: { step: number }) {
  return (
    <div class={stepProgressBox}>
      <Indicator step={step} index={0} text="Username" />
      <Indicator step={step} index={1} text="Name" />
      <Indicator step={step} index={2} text="Email" />
      <Indicator step={step} index={3} text="Institution" />
      <Indicator step={step} index={4} text="Password" />
    </div>
  );
}
export function Indicator({
  index,
  step,
  text,
}: {
  index: number;
  step: number;
  text: string;
}) {
  const active = index === step;
  const cls = active ? borderActive : borderInactive;

  return (
    <div class={indicatorWrap}>
      <div class={active ? indicatorHeadingActive : indicatorHeading}>
        {index + 1}. {text}
      </div>
      {active ? (
        <AnimateLayout element="div" animId="active-indicator" class={cls} />
      ) : (
        <div class={cls}></div>
      )}
    </div>
  );
}
