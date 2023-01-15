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

  // Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
  //   var msnry = new Masonry('.grid');
  //   msnry.layout();
  // });

  var $grid = document.querySelector('.row');
        var msnry = new Masonry($grid, {
            itemSelector: '.col',
            percentPosition: true
        });

        var $images = $grid.querySelectorAll('.card img');
        $images.forEach(function (el) {
            el.addEventListener('load', function () {
                console.log("Image is loaded: " + el.getAttribute("src"));
                msnry.layout();
            });
        });