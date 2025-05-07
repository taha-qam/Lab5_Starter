window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  const hornAssets = {
    'air-horn': {
      img: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      img: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      img: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3'
    }
  };

  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    if (hornAssets[selected]) {
      hornImage.src = hornAssets[selected].img;
      audio.src = hornAssets[selected].audio;
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
