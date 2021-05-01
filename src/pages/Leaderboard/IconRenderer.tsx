import {
  BronzeTrophyIcon,
  GoldTrophyIcon,
  SilverTrophyIcon,
} from "@/components/Icons/Trophies";

import { DisqualifiedIcon } from "@/components/Icons/Disqualified";
import { HaloIcon } from "@/components/Icons/Halo";
import { IUser } from "@/interfaces";

const rankMapping = {
  1: <GoldTrophyIcon size="1.2rem" />,
  2: <SilverTrophyIcon size="1.2rem" />,
  3: <BronzeTrophyIcon size="1.2rem" />,
};
export function IconRenderer({ user }: { user: IUser }) {
  const { rank, is_disqualified, is_admin } = user as any;
  if (is_disqualified)
    return (
      <span title={`${user.user} has been disqualified`}>
        <DisqualifiedIcon size="1.2rem" />
      </span>
    );
  if (is_admin)
    return (
      <span title={`${user.user} is a Halocrypt admin`}>
        <HaloIcon height={30} />
      </span>
    );

  return rankMapping[rank] || rank;
}
