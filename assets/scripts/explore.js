
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voice_select = document.getElementById('voice-select');
  const speak_button = document.querySelector('button');
  const text_input = document.getElementById('text-to-speak');
  const face_image = document.querySelector('img');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voice_select.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      voice_select.appendChild(option);
      option.value = index;
    });
  }

  populateVoices();

  speak_button.addEventListener('click', () => {
    const speaking = new SpeechSynthesisUtterance(text_input.value);
    const voices = speechSynthesis.getVoices();
    const selectedIndex = voice_select.value;

    if (selectedIndex !== 'select' && voices[selectedIndex]) {
      speaking.voice = voices[selectedIndex];
    }

    face_image.src = 'assets/images/smiling-open.png';

    speaking.onend = () => {
      face_image.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(speaking);
  });
}
