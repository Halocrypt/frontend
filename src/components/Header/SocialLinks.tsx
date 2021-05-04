import {
  DISCORD_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "@/util/constants";
import { linkContainer, socialLink } from "./Header.style";

import { DiscordIcon } from "../Icons/Social/Discord";
import { GithubIcon } from "../Icons/Social/Github";
import { InstagramIcon } from "../Icons/Social/Instagram";
import { Link } from "../ExtLink/ExtLink";
import { TwitterIcon } from "../Icons/Social/Twitter";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div class={[linkContainer, className]}>
      <Link href={GITHUB_URL} title="Halocrypt Github">
        <GithubIcon invert size="1.5rem" className={socialLink} />
      </Link>
      <Link href={INSTAGRAM_URL} title="Halocrypt Instagram">
        <InstagramIcon size="1.5rem" className={socialLink} />
      </Link>
      <Link href={DISCORD_URL} title="Halocrypt Discord">
        <DiscordIcon size="1.5rem" className={socialLink} />
      </Link>
      <Link href={TWITTER_URL} title="Halocrypt Twitter">
        <TwitterIcon size="1.5rem" className={socialLink} />
      </Link>
    </div>
  );
}
