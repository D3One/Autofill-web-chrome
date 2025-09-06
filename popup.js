document.getElementById('fillButton').addEventListener('click', async () => {
  // Get the tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Create message to content script on the tab
  chrome.tabs.sendMessage(tab.id, { action: "fillForm" }, (response) => {
    // ЗClose popup after click
    window.close();
  });
});
