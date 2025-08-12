console.log('GoblinReach content loaded on', window.location.href);
chrome.runtime.onMessage.addListener((msg, _sender, reply) => {
  if (msg?.cmd === 'injectBanner') {
    const b = document.createElement('div');
    b.textContent = 'GoblinReach is installed ✔';
    Object.assign(b.style, {
      position: 'fixed', zIndex: 2147483647, top: '12px', right: '12px',
      padding: '10px 14px', background: '#0f1412', color: '#35f18a',
      border: '1px solid rgba(53,241,138,.4)', borderRadius: '10px',
      boxShadow: '0 8px 30px rgba(53,241,138,.35)', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'
    });
    document.body.appendChild(b);
    setTimeout(()=> b.remove(), 4000);
    reply && reply({ ok: true });
  }
  if (msg?.cmd === 'checkIgLogin') {
    const loggedIn =
      !!document.querySelector('a[href^="/direct/inbox/"]') ||
      !!document.querySelector('a[href^="/accounts/"] img') ||
      !!document.querySelector('svg[aria-label="Home"]');
    reply && reply({ loggedIn });
  }
});