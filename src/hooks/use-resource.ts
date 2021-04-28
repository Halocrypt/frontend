import { useEffect, useState } from "@hydrophobefireman/ui-lib";

import { AbortableFetchResponse } from "@hydrophobefireman/flask-jwt-jskit";
import { requests } from "@/bridge";

export type FetchResourceCallback<T extends boolean> = (
  v?: T
) => T extends true ? Promise<void> : void;

export type PromiseResponse<T> = T extends Promise<infer U> ? U : T;

export function useResource<
  T extends (...args: any) => AbortableFetchResponse<any>,
  R extends boolean = true
>(
  func: T,
  args: Parameters<T>
): [
  PromiseResponse<ReturnType<T>["result"]>["data"],
  FetchResourceCallback<R>,
  string
] {
  const [resp, setResp] = useState<any>(null);
  const [error, setError] = useState("");
  function fetchResource(returnPromise?: R) {
    if (resp) setResp(null);
    const { controller, result } = func(...(args as any));
    const prom = result.then((x) => {
      const { data, error } = x;
      if (error) {
        setResp(null);
        return setError(error);
      }
      setError(null);
      setResp(data);
    });
    return (returnPromise ? prom : () => controller.abort()) as ReturnType<
      FetchResourceCallback<R>
    >;
  }
  useEffect(fetchResource, args);
  return [resp, fetchResource, error];
}
