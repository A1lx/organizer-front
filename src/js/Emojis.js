export default class Emojis {
  // eslint-disable-next-line
  create() {
    const emojis = document.createElement('div');
    emojis.classList.add('emojis-box');
    emojis.innerHTML = `
      <ul class="emojis-list">
        <li class="emoji">&#128515;</li>
        <li class="emoji">&#128517;</li>
        <li class="emoji">&#129315;</li>
        <li class="emoji">&#128521;</li>
        <li class="emoji">&#128519;</li>
        <li class="emoji">&#129392;</li>
        <li class="emoji">&#129322;</li>
        <li class="emoji">&#129297;</li>
        <li class="emoji">&#129303;</li>
        <li class="emoji">&#129300;</li>
        <li class="emoji">&#128528;</li>
        <li class="emoji">&#128554;</li>
        <li class="emoji">&#128564;</li>
        <li class="emoji">&#129398;</li>
        <li class="emoji">&#129395;</li>
        <li class="emoji">&#128526;</li>
        <li class="emoji">&#129488;</li>
        <li class="emoji">&#128558;</li>
        <li class="emoji">&#128560;</li>
        <li class="emoji">&#128557;</li>
      </ul>
    `;
    return emojis;
  }

  // добавление смайлика в инпут
  // eslint-disable-next-line
  addEmoji() {
    const allEmoji = [...document.querySelectorAll('.emoji')];
    const sendFormInput = document.querySelector('.send-form-input');

    allEmoji.forEach((el) => {
      el.addEventListener('click', () => {
        sendFormInput.value += el.innerText;
      });
    });
  }
}
