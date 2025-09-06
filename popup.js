document.getElementById('fillButton').addEventListener('click', async () => {
  // Получаем активную вкладку
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Отправляем сообщение в content script на этой вкладке
  chrome.tabs.sendMessage(tab.id, { action: "fillForm" }, (response) => {
    // Закрываем popup после нажатия
    window.close();
  });
});
