async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  return tab?.id;
}

document.getElementById('openIg').addEventListener('click', async () => {
  chrome.tabs.create({ url: 'https://www.instagram.com/' });
});

document.getElementById('checkLogin').addEventListener('click', async () => {
  const id = await getActiveTabId();
  if (!id) { alert('Open an Instagram tab first.'); return; }
  try {
    const res = await chrome.tabs.sendMessage(id, { cmd: 'checkIgLogin' });
    const el = document.getElementById('status');
    if (res?.loggedIn) { el.textContent = 'Status: ✅ Logged in'; el.style.color = '#35f18a'; }
    else { el.textContent = 'Status: ❌ Not logged in — please log in on instagram.com first'; el.style.color = '#f1c40f'; }
  } catch(e){ alert('Could not check. Make sure a normal instagram.com tab is active.'); }
});

document.getElementById('inject').addEventListener('click', async () => {
  const id = await getActiveTabId();
  if (!id) { alert('Open a tab first (not chrome://).'); return; }
  try { await chrome.tabs.sendMessage(id, { cmd: 'injectBanner' }); }
  catch(e){ alert('Could not inject. Make sure a normal webpage is open.'); }
});

document.getElementById('save').addEventListener('click', async () => {
  const key = document.getElementById('license').value.trim();
  await chrome.storage.local.set({ licenseKey: key });
  alert('Saved locally.');
});