window.onload = () => {
  const progress = document.getElementById('progress');
  setTimeout(() => {
    progress.style.width = "100%";
  }, 500);
};

function notifyMe() {
  alert("Thanks! We'll notify you when the site is live.");
}
