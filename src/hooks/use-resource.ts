import {useEffect, useState} from "@hydrophobefireman/ui-lib";

import {requests} from "@/bridge";

type AbortableFetchResponse<T> = ReturnType<typeof requests.get<T>>;

export type FetchResourceCallback<T extends boolean> = (
  v?: T,
) => T extends true ? Promise<void> : void;

export type PromiseResponse<T> = T extends Promise<infer U> ? U : T;

export function useResource<
  T extends (...args: any) => AbortableFetchResponse<any>,
  R extends boolean = true,
>(func: T, args: Parameters<T>) {
  type Ret = PromiseResponse<ReturnType<T>["result"]>["data"];
  const [resp, setResp] = useState<Ret>(null);
  const [error, setError] = useState("");
  function clearError() {
    setError(null);
  }
  function fetchResource(returnPromise?: R) {
    if (resp) setResp(null);
    const {controller, result} = func(...(args as any));
    const prom = result.then((x) => {
      const {data, error} = x;
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
  return {resp, fetchResource, error, setResp, clearError} as const;
}
