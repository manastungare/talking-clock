/**
 * A clock that speaks the current time at regular intervals.
 * Author: Manas Tungare.
 * License: Public Domain.
 */

var clockEl = document.getElementById('clock');
clockEl.style.fontSize = (0.5 * window.innerHeight) + 'px';

window.setInterval(onClockTick, 1000);

function onClockTick() {
  var now = new Date();
  var formattedTime = (now.getHours() % 12) + ':' + zeroPad(now.getMinutes());
  clockEl.innerText = formattedTime;
  if (now.getSeconds() == 0) {
    speakTime(formattedTime.replace(':', ' '));
  }
}

function speakTime(message) {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(message));
}

function zeroPad(num) {
  return (num < 10 ? '0' : '') + num;
}
