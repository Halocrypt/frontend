export const IS_INTRA =
  location.host.includes("intra") || process.env.IS_INTRA === "true";

export const EVENT = IS_INTRA ? "intra" : "main";

export const GITHUB_URL = "https://github.com/Halocrypt";
export const INSTAGRAM_URL = "https://instagr.am/halocrypt";
export const DISCORD_URL = "https://discord.gg/npyUemcmfN";
export const TWITTER_URL = "https://twitter.com/Halocrypt1";
