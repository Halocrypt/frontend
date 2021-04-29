import {
  VNode,
  useCallback,
  useEffect,
  useRef,
} from "@hydrophobefireman/ui-lib";
import { appPopopClose, modalInactive, modalPopup } from "./Snackbar.style";
import { hoverable, mask } from "@/style";

import { ErrorIcon } from "../Icons/Error";
import { InfoIcon } from "../Icons/Info";
import { css } from "catom";

interface PopupProps {
  message: string | VNode;
  onClose(e?: MouseEvent): void;
  isError?: boolean;
}
export function Snackbar(props: PopupProps) {
  const { onClose, message, isError } = props;

  const buttonRef = useRef<HTMLButtonElement>();

  useEffect(() => message && buttonRef.current && buttonRef.current.focus(), [
    message,
  ]);

  const currentTargetOnly = useCallback(
    (e: MouseEvent) => {
      const { target, currentTarget } = e;
      if (target !== currentTarget) return;
      return onClose(e);
    },
    [onClose]
  );
  const active = !!message;
  return (
    <>
      {active && (
        <div
          class={mask}
          style={{ opacity: 0.5 }}
          onClick={currentTargetOnly}
        ></div>
      )}
      <section
        class={[modalPopup, active ? "" : modalInactive]}
        data-open={`${active}`}
      >
        <span
          class={css({
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            wordBreak: "break-word",
          })}
        >
          {isError ? <ErrorIcon /> : <InfoIcon />}
          <span
            class={css({ marginLeft: "1rem" })}
            style={isError ? { color: "red" } : {}}
          >
            {message}
          </span>
        </span>
        <button
          ref={buttonRef}
          class={[appPopopClose, hoverable]}
          onClick={message ? onClose : null}
        >
          OK
        </button>
      </section>
    </>
  );
}
