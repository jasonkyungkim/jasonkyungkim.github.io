var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml6',
    opacity: 1,
    // duration: 1000,
    // easing: "easeOutExpo",
    // delay: 1000
  }).add({
    targets: '.ml15 .word',
    scale: [2,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 500,
    delay: (el, i) => 1100 * i
  }).add({
    targets: '.ml15',
    opacity: 1,
    // duration: 1000,
    // easing: "easeOutExpo",
    // delay: 1000
  });
;


// sleep(10);

  // anime.timeline({loop: false})
