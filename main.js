const input = document.querySelector('input');

input.addEventListener('change', () => {
  if (input.value < 3 && input.value > 0.25) {
    let code = `document.querySelector('video').playbackRate = ${input.value}`;
    chrome.tabs.executeScript({ code: code });
  }
});
