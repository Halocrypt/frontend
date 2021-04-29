const { minify } = require("terser");
const IS_INTRA = process.env.IS_INTRA;
const get = () =>
  minify(
    `(${function (is_intra) {
      if (
        location.host.indexOf("localhost") > -1 ||
        navigator.doNotTrack ||
        new URLSearchParams(location.search).has("dnt")
      )
        return;
      var prop = JSON.stringify({
        token:
          window.location.host.includes("intra") || is_intra
            ? /**intra token */ "97bf3340284b4328a65bdc4dc7ee2961"
            : /**main token */ "b965342347484e5282354f6e39e3e3e5",
      });
      var script = document.createElement("script");
      script.src = "https://static.cloudflareinsights.com/beacon.min.js";
      script.setAttribute("data-cf-beacon", prop);
      script.defer = true;
      document.head.appendChild(script);
    }})(${IS_INTRA})`
  );
module.exports.script = async () => `<script>${(await get()).code}</script>`;
