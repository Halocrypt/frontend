import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { IUser } from "@/interfaces";
import { center } from "@/style";
import { client } from "@/bridge";
import { css } from "catom";
//@ts-ignore
import dq from "@/images/dq.jpg";
import { themeSubmitButton } from "@/Form.style";
import { useInterval } from "@/hooks/use-interval";
import { useState } from "@hydrophobefireman/ui-lib";
export function Disqualified({ user, isMe }: { user: IUser; isMe: boolean }) {
  const username = user.user;
  const reason = user.disqualification_reason
    ? `Reason: ${user.disqualification_reason}`
    : "No reason provided";
  return (
    <section class={[center, css({ maxWidth: "600px", width: "85vw" })]}>
      <h1 class={css({ fontSize: "2rem" })}>
        <span>
          {isMe
            ? "You have been disqualified"
            : `${username} has been disqualified`}
        </span>
      </h1>
      <div
        class={css({
          background: "var(--fg)",
          fontWeight: "bold",
          marginTop: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
          borderRadius: "10px",
        })}
      >
        <Deledos />
        <div>
          {!isMe ? (
            reason
          ) : (
            <div>
              <b>
                Looks like you have been disqualified. It may be temporary, who
                knows, if you think there's been a mistake,contact the mods.
                Repeat violations might lead to account deletion. That's pretty
                permanent.
              </b>
              <div class={css({ marginTop: "2rem" })}>{reason}</div>
            </div>
          )}
        </div>
      </div>
      <div>
        {isMe && (
          <button
            onClick={() => client.logout()}
            class={themeSubmitButton}
            style={{ background: "var(--red)", marginTop: "1rem" }}
          >
            Logout
          </button>
        )}
      </div>
    </section>
  );
}
const _order = [0, 1, 2, 3, 4, 5, 6];
function Deledos() {
  const [order, setOrder] = useState(_order);
  useInterval(() => setOrder(shuffleArray(order)), 1000);
  return (
    <div>
      {order.map((x) => (
        <AnimateLayout
          element="img"
          animId={`deleto-order-${x}`}
          src={dq}
          data-i={x}
          class={[
            x % 2 && css({ filter: "invert(1)" }),
            css({
              userSelect: "none",
              pointerEvents: "none",
              height: "4rem",
              borderRadius: "50%",
              media: { "(max-width:500px)": { height: "3rem" } },
            }),
          ]}
        />
      ))}
    </div>
  );
}

function shuffleArray<T>(a: T[]) {
  const array = a.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
