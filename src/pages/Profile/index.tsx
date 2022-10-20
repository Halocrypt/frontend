import {css} from "catom";

import {inputMargin, themeSubmitButton} from "@/Form.style";
import {client, useAuthState} from "@/bridge";
import {AnimatedInput} from "@/components/AnimatedInput";
import {Link} from "@/components/ExtLink/ExtLink";
import {Form} from "@/components/Form";
import {EmailInput} from "@/components/FormFields/Email";
import {InstitutionInput} from "@/components/FormFields/Institution";
import {NameInput} from "@/components/FormFields/Name";
import {HaloIcon} from "@/components/Icons/Halo";
import {Snackbar} from "@/components/Snackbar/Snackbar";
import {IUser, SecureUserData} from "@/interfaces";
import {editUser} from "@/packages/halo-api/user";
import {
  AsyncComponent,
  loadURL,
  useRef,
  useState,
} from "@hydrophobefireman/ui-lib";

import {
  profileHeading,
  profileSection,
  saveButtonActive,
  saveButtonContainer,
  saveButtonInactive,
  scoreContainer,
  scoreDiv,
} from "./Profile.style";
import {useUserDetails, useUserGuard} from "./use-user-details";

export default function ProfileGuard({params}) {
  const {user: username} = params;
  const [userDetails, setUser] = useAuthState();
  const normalised = useUserGuard(username, userDetails);
  if (normalised) {
    if (normalised !== (userDetails && userDetails.user))
      return (
        <Profile
          username={normalised}
          isAdmin={!!(userDetails && userDetails.is_admin)}
        />
      );
    if (userDetails.is_disqualified)
      return <DisqualifiedLoader user={userDetails} isMe />;
    return <ProfileRenderer user={userDetails} setUser={setUser} isMe />;
  }
}

function Profile({username, isAdmin}: {username: string; isAdmin: boolean}) {
  const {user, error, setUser} = useUserDetails(username);

  if (error) return <div class={css({color: "red"})}>{error}</div>;
  if (!user) return <div>Loading...</div>;
  if (user.is_disqualified)
    return <DisqualifiedLoader user={user} isMe={false} />;
  return (
    <ProfileRenderer
      user={user}
      setUser={(x) => setUser({user_data: x})}
      disableEditing={!isAdmin}
      isMe={false}
    />
  );
}

function ProfileRenderer({
  user,
  setUser,
  disableEditing,
  isMe,
}: {
  user: IUser;
  setUser(u: IUser): void;
  disableEditing?: boolean;
  isMe: boolean;
}) {
  disableEditing = true;
  const hasSecure = !!user._secure_;
  const _secure_ = hasSecure ? user._secure_ : ({} as SecureUserData);
  const [message, setMessage] = useState("");
  const isError = useRef(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(_secure_.email);
  const emailVerified = _secure_.has_verified_email;
  const accountCreatedAt = user.created_at * 1000;
  const lastQuestionAnsweredAt = user.last_question_answered_at * 1000;
  const [institution, setInstitution] = useState(_secure_.institution);

  const [loading, setLoading] = useState(false);
  const unsavedChanges =
    name !== user.name ||
    email !== _secure_.email ||
    institution !== _secure_.institution;
  async function handleEdit() {
    if (!unsavedChanges || loading) return;
    setLoading(true);
    setMessage("Saving..");
    const {result} = editUser(user.user, {email, name, institution});
    const {data, error} = await result;
    setLoading(false);
    if (error) {
      setMessage(error);
      isError.current = true;
      return;
    }
    setUser(data);
    setMessage("Changes saved");
  }
  function reset() {
    setMessage(null);
    isError.current = false;
  }
  return (
    <section class={profileSection}>
      <Snackbar
        message={message}
        onClose={() => !loading && reset()}
        isError={isError.current}
      />
      <h1 class={profileHeading}>
        {user.is_admin && <HaloIcon height="2.5rem" />} {user.user}'s Profile
      </h1>
      <div>
        {!isMe && !disableEditing && (
          <Link
            href={`https://admin.halocrypt.com/dash/users/${user.user}`}
            class={css({textDecoration: "underline"})}
          >
            Open admin panel
          </Link>
        )}
      </div>
      <div class={scoreContainer}>
        <div class={scoreDiv}>Level {user.level}</div>
        <div class={scoreDiv}>{user.points} Points</div>
      </div>
      {!disableEditing && <div>You can edit the fields below</div>}
      <Form onSubmit={handleEdit}>
        <SaveButton unsavedChanges={unsavedChanges} />
        <NameInput
          name={name}
          setName={setName}
          noFocus
          wrapperClass={inputMargin}
          disabled={disableEditing}
        />
        {false && (
          <>
            <EmailInput
              email={email}
              setEmail={setEmail}
              noFocus
              wrapperClass={inputMargin}
              disabled={disableEditing}
            />
            <AnimatedInput
              disabled
              labelText="Email Verified?"
              value={emailVerified ? "Yes" : "No"}
              onInput={null}
              wrapperClass={inputMargin}
            />
            <InstitutionInput
              institution={institution}
              setInstitution={setInstitution}
              noFocus
              wrapperClass={inputMargin}
              disabled={disableEditing}
            />
          </>
        )}
        <AnimatedInput
          disabled
          labelText="Account Created At"
          data-ts={accountCreatedAt}
          value={new Date(accountCreatedAt).toLocaleString()}
          onInput={null}
          wrapperClass={inputMargin}
        />
        {user.level > 0 && (
          <AnimatedInput
            disabled
            data-ts={lastQuestionAnsweredAt}
            labelText="Level Solved At"
            value={new Date(lastQuestionAnsweredAt).toLocaleString()}
            onInput={null}
            wrapperClass={inputMargin}
          />
        )}
        <SaveButton unsavedChanges={unsavedChanges} />
      </Form>
      {isMe && (
        <>
          <button
            aria-label="Logout"
            onClick={() => client.logout()}
            class={themeSubmitButton}
            style={{
              background: "var(--red)",
              marginTop: "1rem",
              marginBottom: "1rem",
              maxWidth: "400px",
            }}
          >
            Logout
          </button>
          {!(user._secure_ && user._secure_.has_verified_email) && (
            <button
              aria-label="Confirm Email"
              class={themeSubmitButton}
              style={{maxWidth: "400px"}}
              onClick={() => loadURL("/verify-email")}
            >
              Confirm Email
            </button>
          )}
        </>
      )}
    </section>
  );
}

function SaveButton({unsavedChanges}: {unsavedChanges: boolean}) {
  return (
    <div class={saveButtonContainer}>
      <button
        aria-label="Save Changes"
        class={unsavedChanges ? saveButtonActive : saveButtonInactive}
      >
        Save changes
      </button>
    </div>
  );
}

export function DisqualifiedLoader({user, isMe}: {user: IUser; isMe: boolean}) {
  return (
    <AsyncComponent
      fallback={<div>Loading...</div>}
      promise={() =>
        import("./DisqualifiedProfile").then((x) => (
          <x.Disqualified isMe={isMe} user={user} />
        ))
      }
    />
  );
}
