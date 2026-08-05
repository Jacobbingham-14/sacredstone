/* ─────────────────────────────────────────────────────────────────────────
   Sacred Stone — PostHog analytics

   ► TO TURN THIS ON: paste your PostHog project key into POSTHOG_KEY below.
     Until you do, this file does nothing at all — no network requests, no
     cookies, no tracking. Safe to ship as-is.

     Get the key: posthog.com → your project → Settings → Project API key.
     It starts with "phc_". It is a PUBLIC key and is safe in this repo.
     (Do NOT put a "phx_" personal API key here — that one is secret.)

   ► PRIVACY — read this before changing anything.
     This site's order form asks people to type the name of a dead relative.
     Session replay is configured so that ALL form inputs are masked: you can
     see WHERE someone hesitated or gave up, but never WHAT they typed. Do not
     turn maskAllInputs off. If in doubt, set DISABLE_SESSION_REPLAY = true
     below — the funnel events are the valuable part anyway.
   ───────────────────────────────────────────────────────────────────────── */

(function () {
  var POSTHOG_KEY = 'phc_PASTE_YOUR_KEY_HERE';
  var POSTHOG_HOST = 'https://us.i.posthog.com';   // EU projects: https://eu.i.posthog.com
  var DISABLE_SESSION_REPLAY = false;

  // Inert until a real key is present.
  if (!POSTHOG_KEY || POSTHOG_KEY.indexOf('PASTE_YOUR_KEY') !== -1) return;

  // Don't record local development in your production numbers.
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) || location.protocol === 'file:') return;

  /* PostHog loader snippet */
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: '2026-05-30',
    persistence: 'localStorage+cookie',
    disable_session_recording: DISABLE_SESSION_REPLAY,
    session_recording: {
      // Never capture what people type. See the privacy note above.
      maskAllInputs: true,
      maskTextSelector: '[data-private]'
    }
  });

  /* ── Funnel events ─────────────────────────────────────────────────────
     These are the numbers actually worth watching, in order:
       $pageview  →  pricing_changed  →  order_started  →  order_submitted
     If lots of people hit pricing_changed but few reach order_started, the
     price is the problem. If they reach order_started but not
     order_submitted, the form is the problem.
     ──────────────────────────────────────────────────────────────────── */

  function track(name, props) {
    if (window.posthog && posthog.capture) posthog.capture(name, props || {});
  }

  document.addEventListener('DOMContentLoaded', function () {

    // Someone interacted with the homepage pricing calculator.
    var pricing = document.getElementById('plans');
    if (pricing) {
      var pricingDebounce;
      pricing.addEventListener('click', function (e) {
        if (!e.target.closest('.mode-tab, .freq-opt, #mkPlus, #mkMinus')) return;
        clearTimeout(pricingDebounce);
        pricingDebounce = setTimeout(function () {
          var count = document.getElementById('mkCount');
          var price = document.getElementById('pcPrice');
          var recurring = document.getElementById('freqBlock');
          track('pricing_changed', {
            mode: recurring && recurring.hidden ? 'one-time' : 'recurring',
            markers: count ? Number(count.textContent) : null,
            displayed_price: price ? price.textContent : null
          });
        }, 600);
      });
    }

    // Landed on the order form — and with which plan preselected.
    var orderForm = document.getElementById('orderForm');
    if (orderForm) {
      var p = new URLSearchParams(location.search);
      track('order_started', {
        plan: p.get('plan') || 'none',
        markers: Number(p.get('markers')) || 1,
        came_from_calculator: p.has('plan')
      });

      orderForm.addEventListener('submit', function () {
        var summary = document.getElementById('orderSummary');
        track('order_submitted', {
          markers: document.querySelectorAll('.marker-card').length,
          summary: summary ? summary.value : null
        });
      });

      var addBtn = document.getElementById('addMarker');
      if (addBtn) addBtn.addEventListener('click', function () {
        track('marker_added', { total: document.querySelectorAll('.marker-card').length });
      });
    }

    // Contact form submitted.
    var contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', function () {
      track('contact_submitted');
    });

    // Phone taps are conversions too — on mobile they're often the main one.
    document.addEventListener('click', function (e) {
      var tel = e.target.closest('a[href^="tel:"]');
      if (tel) track('phone_clicked', { location: location.pathname });
    });
  });
})();
