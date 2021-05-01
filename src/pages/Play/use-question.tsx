import { IQuestion, IUser } from "@/interfaces";
import { redirect, useEffect, useState } from "@hydrophobefireman/ui-lib";

import { EVENT } from "@/util/constants";
import { getQuestion } from "@/packages/halo-api/play";
import { useResource } from "@/hooks/use-resource";

export function useQuestion(user: IUser, setUser: (u: IUser) => void) {
  const {
    resp: question,
    fetchResource,
    error,
    clearError,
  } = useResource(getQuestion, [EVENT]);
  const [ret, setRet] = useState<IQuestion | { game_over: boolean }>(null);
  useEffect(() => {
    if (!question) return;
    if ("disqualified" in question) {
      return updateDisqualification(
        user,
        setUser,
        question.disqualification_reason
      );
    }
    return setRet(question);
  }, [question]);
  return {
    question: ret,
    error,
    fetchQuestion: fetchResource,
    clearError,
    clearQuestion: () => setRet(null),
  };
}

export function updateDisqualification(
  user: IUser,
  setUser: (u: IUser) => void,
  reason: string
) {
  const u = { ...user };
  u.is_disqualified = true;
  u.disqualification_reason = reason;
  setUser(u);
  return redirect("/u/me?r=disqualified");
}
