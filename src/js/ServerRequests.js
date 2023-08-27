import newMessages from './newMessages';

// класс для общения с сервером
export default class ServerRequests {
  constructor() {
    // this.ws = new WebSocket('ws://localhost:7070/ws');
    this.ws = new WebSocket('wss://organizer-back-production.up.railway.app//ws');
    this.reader = new FileReader();
  }

  // отправка новых сообщений
  sendMessages() {
    const sendForm = document.querySelector('.send-form');
    const sendFormInput = document.querySelector('.send-form-input');

    sendForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = sendFormInput.value;

      if (!message.trim()) {
        return;
      }

      this.ws.send(JSON.stringify(message));
      sendFormInput.value = '';
    });
  }

  // получение, обновление, добавление сообщений с сервера
  wsMethods() {
    this.ws.addEventListener('open', (e) => {
      console.log(e);
      console.log('ws open');
    });

    this.ws.addEventListener('close', (e) => {
      console.log(e);
      console.log('ws close');
    });

    this.ws.addEventListener('error', (e) => {
      console.log(e);
      console.log('ws error');
    });

    this.ws.addEventListener('message', (e) => {
      const data = JSON.parse(e.data);
      newMessages(data);
    });
  }

  // отправка файлов (пока пытаемся с картинками) на сервер
  sendFiles() {
    const iconBox = document.querySelector('.add-file-icon-box');
    const fileInput = document.querySelector('.overlapped');
    const body = document.querySelector('body');

    const displayContent = (e) => {
      const sentFile = e.target.result;
      console.log(e.target.result);
      this.ws.send(JSON.stringify(sentFile));
    };

    iconBox.addEventListener('click', () => {
      fileInput.dispatchEvent(new MouseEvent('click'));
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;

      this.reader.addEventListener('load', displayContent);
      this.reader.readAsDataURL(file);
    });
    // драг и дроп
    body.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    body.addEventListener('drop', (e) => {
      e.preventDefault();
      const droppedFile = e.dataTransfer.files && e.dataTransfer.files[0];
      if (!droppedFile) return;

      this.reader.addEventListener('load', displayContent);
      this.reader.readAsDataURL(droppedFile);
    });
  }
}
