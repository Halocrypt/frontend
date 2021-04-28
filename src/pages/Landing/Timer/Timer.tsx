import { bold, center, flex } from "@/style";
import { timerBox, timerNum } from "./Timer.style";
import { useEffect, useRef, useState } from "@hydrophobefireman/ui-lib";

import { useInterval } from "@/hooks/use-interval";

const tFix = (t: string | number) => {
  t = "" + t;
  return (t.length === 1 ? "0" : "") + t;
};

const secInAMin = 60;
const minsInAnHour = 60;
const hoursInADay = 24;
const secInAnHour = secInAMin * minsInAnHour;
const secInADay = hoursInADay * secInAnHour;

const getTimeLeft = (n: number) => n - +new Date();
function parseTime(timeLeft: number) {
  let _left;
  const inSeconds = timeLeft / 1000;

  const days = Math.floor(inSeconds / secInADay);
  _left = inSeconds % secInADay;

  const hours = Math.floor(_left / secInAnHour);
  _left = inSeconds % secInAnHour;

  const mins = Math.floor(_left / minsInAnHour);

  _left = Math.round(_left % secInAMin);

  const sec = _left;

  if (inSeconds > 3.5) {
    return {
      days: tFix(days),
      hours: tFix(hours),
      mins: tFix(mins),
      sec: tFix(sec),
    };
  }
  const r = { message: "Ready?" };
  switch (sec) {
    case 3:
      return { message: "Are" };
    case 2:
      return { message: "You" };
    case 1:
      return r;
    default:
      return r;
  }
}

export function Timer({ target, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));
  const isTiming = timeLeft > 500;
  const completeCalled = useRef(false);

  useEffect(() => {
    const t = getTimeLeft(target);
    setTimeLeft(t);
  }, [target]);

  function updateTime() {
    if (!isTiming) return;
    const n = getTimeLeft(target);

    setTimeLeft(n);
  }

  useInterval(updateTime, isTiming ? 1000 : null);

  useEffect(
    () =>
      !isTiming &&
      !completeCalled.current &&
      (completeCalled.current = true) &&
      onComplete(),
    [isTiming]
  );
  if (!isTiming) return null;
  const { message, days, hours, mins, sec } = parseTime(timeLeft);
  return (
    <div class={center}>
      <div class={timerBox}>
        {message || (
          <div class={flex}>
            <div class={timerNum}>
              <span class={bold}>{days}</span>
              <span>Days</span>
            </div>
            <div class={timerNum}>
              <span class={bold}>{hours}</span>
              <span>Hours</span>
            </div>
            <div class={timerNum}>
              <span class={bold}>{mins}</span>
              <span>Mins</span>
            </div>
            <div class={timerNum}>
              <span class={bold}>{sec}</span>
              <span>Seconds</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
