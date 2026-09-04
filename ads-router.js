/*
 * ads-router.js
 * Static-site Geo Ads Router for GitHub Pages.
 *
 * Usage:
 *   1. Upload ads-config.js and ads-router.js to your repository.
 *   2. Add the loader shown in README.md before </body>.
 *   3. Add one or more containers:
 *        <div class="geo-ad" data-ad-slot="auto"></div>
 *        <div class="geo-ad" data-ad-slot="banner300x250"></div>
 *
 * The router:
 * - Uses an IP-country lookup only to choose among your configured placements.
 * - Does NOT spoof a visitor's country or use a VPN/proxy.
 * - Uses an explicit provider allowlist.
 * - Does not auto-click, refresh, rotate rapidly, or conceal ad destinations.
 * - Fails closed if the provider is disabled or the destination is not allowed.
 */

(() => {
  "use strict";

  const C = window.GEO_ADS_CONFIG;
  if (!C || !C.enabled) return;

  const ALLOWED_HOSTS = new Set(["data527.click"]);
  const state = { injected: 0, country: "default", adId: null };

  const log = (...args) => {
    if (C.debug) console.log("[GeoAds]", ...args);
  };

  function isAllowedHttpsUrl(value) {
    try {
      const u = new URL(value, location.href);
      return u.protocol === "https:" && ALLOWED_HOSTS.has(u.hostname);
    } catch {
      return false;
    }
  }

  function getCountry() {
    return fetch(C.geoProvider, {
      method: "GET",
      headers: { "Accept": "application/json" },
      credentials: "omit",
      cache: "no-store"
    })
      .then(r => {
        if (!r.ok) throw new Error("Geo lookup failed");
        return r.json();
      })
      .then(data => String(data.country_code || "default").toUpperCase())
      .catch(() => "default");
  }

  function appendExternalScript(src, target) {
    if (!isAllowedHttpsUrl(src)) {
      console.warn("[GeoAds] Blocked non-allowlisted ad script:", src);
      return false;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.referrerPolicy = "strict-origin-when-cross-origin";
    target.appendChild(s);
    return true;
  }

  function renderScriptPlacement(target, placement) {
    if (!C.data527Enabled) {
      target.setAttribute("data-ads-disabled", "provider-disabled");
      return false;
    }
    return appendExternalScript(placement.src, target);
  }

  function renderBanner(target, placement) {
    if (!C.data527Enabled) {
      target.setAttribute("data-ads-disabled", "provider-disabled");
      return false;
    }

    if (!isAllowedHttpsUrl(placement.domain) ||
        !isAllowedHttpsUrl(placement.responsiveScript)) {
      console.warn("[GeoAds] Blocked banner because provider is not allowlisted.");
      return false;
    }

    const ins = document.createElement("ins");
    ins.style.width = `${Number(placement.width) || 300}px`;
    ins.style.height = `${Number(placement.height) || 250}px`;
    ins.dataset.width = String(Number(placement.width) || 300);
    ins.dataset.height = String(Number(placement.height) || 250);
    ins.className = placement.className || "";
    ins.dataset.domain = placement.domain;
    ins.dataset.affquery = placement.affquery;

    const script = document.createElement("script");
    script.src = placement.responsiveScript;
    script.async = true;
    script.referrerPolicy = "strict-origin-when-cross-origin";

    ins.appendChild(script);
    target.replaceChildren(ins);
    return true;
  }

  function render(target, slot, adId) {
    if (state.injected >= Number(C.maxAutoPlacements || 2)) {
      target.setAttribute("data-ads-disabled", "placement-limit");
      return;
    }

    if (slot === "banner300x250") {
      if (renderBanner(target, C.placements.banner300x250)) state.injected++;
      return;
    }

    const placement = C.placements[adId];
    if (!placement || placement.type !== "script") {
      target.setAttribute("data-ads-disabled", "unknown-placement");
      return;
    }

    if (renderScriptPlacement(target, placement)) state.injected++;
  }

  function routeAndRender() {
    getCountry().then(country => {
      state.country = country;
      const adId = C.routes[country] || C.routes.default;
      state.adId = adId;
      log("Country:", country, "Placement:", adId);

      const nodes = [...document.querySelectorAll(".geo-ad")];
      nodes.forEach(node => {
        const slot = node.dataset.adSlot || "auto";
        if (slot === "banner300x250") {
          render(node, slot, null);
        } else {
          render(node, slot, adId);
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", routeAndRender, { once: true });
  } else {
    routeAndRender();
  }

  window.GeoAds = {
    getState: () => ({ ...state }),
    render
  };
})();
