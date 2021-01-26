anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [4,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 5000,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 1,
  });
