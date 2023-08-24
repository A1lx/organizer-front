export default class Controller {
  constructor(emojis) {
    this.emojis = emojis;
    this.open = false;
  }

  toggleEmojiBox() {
    const container = document.querySelector('.container');
    const emojiButton = document.querySelector('.emoji-button');
    const elem = this.emojis.create();
    
    emojiButton.addEventListener('click', () => {
      if (this.open === false) {
        container.appendChild(elem);
        // метод добавления смайлика из класса Emojis сунул сюда
        // плодим миллион лишних событий
        this.emojis.addEmoji();
        
        this.open = true;
      } else {
        container.removeChild(elem);
        this.open = false;
      }
    });
  }
}