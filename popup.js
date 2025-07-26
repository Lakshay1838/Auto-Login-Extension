document.getElementById('saveBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  chrome.storage.local.set({ wifiCreds: { username, password } }, () => {
    alert("Credentials saved!");
  });
});