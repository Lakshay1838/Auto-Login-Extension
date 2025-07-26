chrome.storage.local.get("wifiCreds", (data) => {
  const creds = data.wifiCreds;
  if (!creds) return;

  const userInput = document.querySelector('input[name="username"]');
  const passInput = document.querySelector('input[name="password"]');
  const form = document.querySelector('form');

  if (userInput && passInput && form) {
    userInput.value = creds.username;
    passInput.value = creds.password;

    setTimeout(() => {
      form.submit();
    }, 500);
  }

  // Coca Cola DOM replace
  document.body.innerHTML = `
    <div style="text-align:center; padding-top: 100px; font-family: sans-serif;">
      <h1>Refreshing your connection...</h1>
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Coca-Cola-Logo.png" width="300"/>
      <p>Enjoy the taste of fast Wi-Fi!</p>
    </div>
  `;
});