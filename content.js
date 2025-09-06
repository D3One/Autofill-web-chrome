// Объект с данными для заполнения.
// Ключ - это идентификатор поля (name, id или класс).
// Значение - это текст, который будет в него вставлен.
const fieldPresets = {
  "username": "Ваше_стандартное_имя",
  "user-email": "your.email@example.com",
  "phone": "+7 (999) 123-45-67",
  "address": "ул. Примерная, д. 1",
  "password": "strong_password_123", // Для демонстрации! НЕ храни пароли тут!
  "message": "Это стандартное сообщение, заполненное моим крутым расширением!",
  // Добавь другие поля здесь...
};

// Функция для поиска и заполнения поля
function fillField(selector, value) {
  // Пробуем найти по name
  let field = document.querySelector(`input[name="${selector}"], textarea[name="${selector}"]`);
  // Если не нашли по name, ищем по id
  if (!field) {
    field = document.getElementById(selector);
  }
  // Если опять не нашли, ищем по классу (берем первый элемент)
  if (!field) {
    const fieldsByClass = document.getElementsByClassName(selector);
    if (fieldsByClass.length > 0) {
      field = fieldsByClass[0];
    }
  }

  // Если поле найдено, заполняем его
  if (field) {
    field.value = value;
    // Создаем событие 'change' или 'input', чтобы некоторые сайты "поняли", что данные изменились
    field.dispatchEvent(new Event('change', { bubbles: true }));
    field.dispatchEvent(new Event('input', { bubbles: true }));
    console.log(`Заполнено поле: ${selector}`);
  }
}

// Главная функция, которая запускает заполнение
function fillAllFields() {
  console.log("Запуск автозаполнения...");
  for (const [fieldName, fieldValue] of Object.entries(fieldPresets)) {
    fillField(fieldName, fieldValue);
  }
}

// Мы можем запускать заполнение по сообщению от popup.js или просто при загрузке страницы.
// Вариант 1: Запустить сразу (может быть слишком рано, если форма подгружается динамически)
// fillAllFields();

// Вариант 2: Запустить по горячей клавише (лучше и безопаснее)
document.addEventListener('keydown', (event) => {
  // Например, комбинация Ctrl+Shift+F (можно поменять)
  if (event.ctrlKey && event.shiftKey && event.code === 'KeyF') {
    fillAllFields();
  }
});

// Вариант 3: Слушать сообщения от Popup страницы или фонового скрипта.
// Это самый правильный способ: пользователь нажимает на кнопку в popup -> форма заполняется.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    fillAllFields();
    sendResponse({status: "success"});
  }
});
