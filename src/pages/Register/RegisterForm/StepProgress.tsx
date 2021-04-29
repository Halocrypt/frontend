import {
  borderActive,
  borderInactive,
  indicatorHeading,
  indicatorHeadingActive,
  indicatorWrap,
  stepProgressBox,
} from "@/components/FormFields/StepProgress.style";

import { AnimateLayout } from "@hydrophobefireman/ui-anim";

export function StepProgress({
  step,
  setStep,
}: {
  step: number;
  setStep(n: number): void;
}) {
  return (
    <div class={stepProgressBox}>
      <Indicator step={step} setStep={setStep} index={0} text="Username" />
      <Indicator step={step} setStep={setStep} index={1} text="Name" />
      <Indicator step={step} setStep={setStep} index={2} text="Email" />
      <Indicator step={step} setStep={setStep} index={3} text="Institution" />
      <Indicator step={step} setStep={setStep} index={4} text="Password" />
    </div>
  );
}
export function Indicator({
  index,
  step,
  setStep,
  text,
}: {
  index: number;
  step: number;
  setStep(n: number): void;
  text: string;
}) {
  const active = index === step;
  const cls = active ? borderActive : borderInactive;

  return (
    <div
      class={indicatorWrap}
      style={active ? { opacity: 1, zIndex: 2 } : ""}
      onClick={() => index < step && setStep(index)}
    >
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
