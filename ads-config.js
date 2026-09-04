/*
 * ads-config.js
 * GitHub Pages-compatible configuration for the Geo Ads Router.
 *
 * IMPORTANT:
 * - This is an allowlist-based router. It does not spoof location, force clicks,
 *   hide destinations, or generate artificial impressions.
 * - Verify every ad provider/destination and its publisher terms before enabling it.
 */

window.GEO_ADS_CONFIG = {
  enabled: true,

  // Set false until you have independently verified the supplied provider.
  data527Enabled: true,

  geoProvider: "https://ipapi.co/json/",

  // Country-code routing. Add/remove countries according to your ad contracts.
  // "default" is used when country lookup fails or is unavailable.
  routes: {
    US: "ad1",
    CA: "ad1",
    GB: "ad1",
    AU: "ad1",
    DE: "ad2",
    FR: "ad2",
    NL: "ad2",
    NG: "ad3",
    GH: "ad3",
    KE: "ad3",
    ZA: "ad3",
    default: "ad2"
  },

  placements: {
    ad1: {
      type: "script",
      src: "https://data527.click/2556c891524f76bfe89c/2dab0522c9/?placementName=default"
    },
    ad2: {
      type: "script",
      src: "https://data527.click/192589d7bb7d77fa3687/e99a08a9df/?placementName=default"
    },
    ad3: {
      type: "script",
      src: "https://data527.click/c1ff860139d4e102c874/91bdaa654e/?placementName=default"
    },
    banner300x250: {
      type: "ins",
      width: 300,
      height: 250,
      className: "ve2e51b4f1a",
      domain: "https://data527.click",
      affquery: "/bccd080ceebaa818f5f5/e2e51b4f1a/?placementName=default",
      responsiveScript: "https://data527.click/js/responsive.js"
    }
  },

  // Prevent multiple automatic injections on a single page.
  maxAutoPlacements: 2,

  // Set to true to display a small debug panel in the browser console.
  debug: false
};
