// kimjh7669.github.io page-load beacon. No cookie, visitor ID, or public statistics UI.
// Copy to the site as /js/visit.js and add before </body>:
//   <script src="/js/visit.js" defer></script>
(function (win) {
  var ENDPOINT = 'https://kimjh7669-visit-log.odyssey-private-visit-log.workers.dev/visit';
  if (win.location.origin !== 'https://kimjh7669.github.io' || win.__kimjhVisitSent) return;
  win.__kimjhVisitSent = true;
  var send = function () {
    if (win.document.visibilityState !== 'visible') return;
    win.document.removeEventListener('visibilitychange', send);
    if (win.navigator.doNotTrack === '1' || win.navigator.globalPrivacyControl) return;
    try {
      var referrer = '';
      try { referrer = new URL(win.document.referrer).origin; } catch (e) { /* Direct visit. */ }
      win.fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: win.crypto.randomUUID(), path: win.location.pathname, referrer: referrer }),
        credentials: 'omit',
        keepalive: true,
        referrerPolicy: 'no-referrer',
      }).catch(function () {});
    } catch (e) { /* Logging must never interfere with the page. */ }
  };
  if (win.document.visibilityState === 'visible') send();
  else win.document.addEventListener('visibilitychange', send);
})(window);
