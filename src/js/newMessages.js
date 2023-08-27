// вынес в отдельную функцию, не придумав ничего лучше
// создание и редактирование сообщений

// const hljs = require('highlight.js');

export default function newMessages(data) {
  const messagesArea = document.querySelector('.messages-area');
  const messagesArr = [...document.querySelectorAll('.messages')];

  // очищаем поле
  for (let i = messagesArr.length - 1; i >= 0; i--) {
    messagesArr[i].remove();
  }

  // проверка на ссылку, не работает с локалхост
  // eslint-disable-next-line
  const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  // заполняем поле
  data.forEach((el) => {
    const newMessage = document.createElement('div');
    newMessage.classList.add('messages');
    let text = newMessage.innerText;
    // применяем неработающую подсветку кода к полученному от сервера тексту
    // newMessage.innerText = hljs.highlightAuto(el.text).value;
    text = el.text;
    messagesArea.appendChild(newMessage);
    // превращение текста в ссылку
    newMessage.innerHTML = text.replace(pattern, '<a href="$&">$&</a>');
    // проверяем на картинку
    if (text.includes('data:image')) {
      newMessage.innerHTML = `
        <img src="${text}" class="received-file">
      `;
    }
    // проверяем на аудио
    if (text.includes('data:audio')) {
      newMessage.innerHTML = `
        <audio controls src="${text}"></audio>
      `;
    }
    // проверяем на видео
    if (text.includes('data:video')) {
      newMessage.innerHTML = `
        <video controls src="${text}"></video>
      `;
    }
  });
}
