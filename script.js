let pauseTimer = null;
let isPaused = false;

function pauseContent() {
  if (isPaused) return;

  isPaused = true;
  document.getElementById("status").innerText = "Status: Paused";

  const delay = parseInt(
    document.getElementById("pauseDelay").value
  );

  pauseTimer = setTimeout(() => {
    showPauseAd();
  }, delay);
}

function resumeContent() {
  isPaused = false;
  document.getElementById("status").innerText = "Status: Playing";

  clearTimeout(pauseTimer);
  hidePauseAd();
}

function showPauseAd() {
  if (!isPaused) return;

  document.getElementById("pauseAd").classList.remove("hidden");
  document.getElementById("status").innerText = "Status: Pause Ad Showing";
}

function hidePauseAd() {
  document.getElementById("pauseAd").classList.add("hidden");
}
