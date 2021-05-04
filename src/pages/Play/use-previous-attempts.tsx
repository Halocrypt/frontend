import { get, set } from "@/bridge";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { FakeSet } from "@hydrophobefireman/j-utils";

const key = "halo.previous_answers";

async function getPreviousAnswers(n: number) {
  const ret = await get(key);
  return (ret && ret[n]) || [];
}
function setAnswers(n: number, answers: string[]) {
  return set(key, { [n]: answers });
}
export function usePreviousAttempts(questionNumber: number) {
  const [prev, setPrev] = useState([]);
  useEffect(async () => {
    if (questionNumber == null) return;
    const p = await getPreviousAnswers(questionNumber);
    const clone = prev.slice();
    const latest = Array.from(new FakeSet(clone.concat(p)));
    setPrev(latest);
    setAnswers(questionNumber, latest);
  }, [questionNumber]);

  async function add(k: string) {
    k = k.toLowerCase();
    const latest = await getPreviousAnswers(questionNumber);
    if (latest.indexOf(k) === -1) {
      const n = [k, ...latest];
      setPrev(n);
      setAnswers(questionNumber, n);
    }
  }
  function clear() {
    setPrev([]);
    set(key, {});
  }
  return { prev, add, clear };
}
