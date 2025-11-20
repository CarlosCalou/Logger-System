function typingLoop(
  elementId,
  text,
  typeSpeed,
  deleteSpeed,
  afterTypeDelay,
  afterDeleteDelay
) {
  const element = document.getElementById(elementId);
  let index = 0;
  let deleting = false;

  function loop() {
    element.classList.add("typing");

    if (!deleting) {
      element.textContent = text.substring(0, index);
      index++;

      if (index <= text.length) {
        setTimeout(loop, typeSpeed);
      } else {
        setTimeout(() => {
          deleting = true;
          loop();
        }, afterTypeDelay);
      }
    } else {
      element.textContent = text.substring(0, index);
      index--;

      if (index >= 0) {
        setTimeout(loop, deleteSpeed);
      } else {
        setTimeout(() => {
          deleting = false;
          loop();
        }, afterDeleteDelay);
      }
    }
  }

  loop();
}
typingLoop("title", "LOGGER SYSTEM", 120, 80, 8000, 1000);

typingLoop(
  "subtitle",
  "SYSTEM FOR USER REGISTRATION AND LOGIN",
  90,
  60,
  5000,
  1000
);
