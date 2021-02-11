document.addEventListener("DOMContentLoaded", () => {
  var mainBlocks = document.querySelector(".main-blocks");
  var mainContent = document.querySelector(".main-content");
  if (mainBlocks) {
    mainBlocks.addEventListener("mouseenter", function (event) {
      mainContent.classList.add("main-content__active");
    });
    mainContent.addEventListener("mouseleave", function (event) {
      mainContent.classList.remove("main-content__active");
    });
  }
  const singleVideo = document.querySelector("#PostVideo");
  const singleVideoWrapper = document.querySelector(".main-video");
  if (singleVideo) {
    singleVideo.volume = 0.4;
    singleVideo.pause();
    singleVideo.addEventListener("mouseenter", function (event) {
      singleVideoWrapper.classList.add("active");
      singleVideo.play();
    });
    singleVideo.addEventListener("mouseleave", function (event) {
      singleVideo.pause();
      singleVideoWrapper.classList.remove("active");
    });
  }
  // Sliders
  function slidersOnClick() {
    const sliders = document.querySelectorAll(".block-slider");
    sliders.forEach((slider) => {
      const thumbs = slider.querySelectorAll(".thumb");
      const slides = slider.querySelectorAll(".slide");
      for (let j = 1; j <= thumbs.length; j++) {
        thumbs[j - 1].addEventListener("click", (event) => {
          for (let k = 1; k <= thumbs.length; k++) {
            slider.classList.remove(`active-${k}`);
          }
          slider.classList.add(`active-${j}`);
        });
      }
      slides.forEach((slide) => {
        slide.addEventListener("swiped-right", changeSlideBack);
        slide.addEventListener("swiped-left", changeSlide);
      });

      function changeSlide() {
        let n = 0;
        for (let k = 1; k <= thumbs.length; k++) {
          if (slider.classList.contains(`active-${k}`)) {
            n = k;
            slider.classList.remove(`active-${k}`);
          }
        }
        n = n % thumbs.length;
        slider.classList.add(`active-${n + 1}`);
      }
      function changeSlideBack() {
        let n = 0;
        for (let k = thumbs.length; k >= 1; k--) {
          if (slider.classList.contains(`active-${k}`)) {
            n = k;
            slider.classList.remove(`active-${k}`);
          }
        }

        n = (n % thumbs.length) - 1;
        if (n == 0) {
          n = thumbs.length;
        }
        if (n == -1) {
          n = thumbs.length - 1;
        }
        slider.classList.add(`active-${n}`);
      }

      setInterval(changeSlide, 5500);
    });
  }

  if (document.querySelector(".block-slider")) {
    slidersOnClick();
  }

  function geoSlider() {
    const geo = document.querySelector(".geo");
    const blocks = geo.querySelectorAll(".block");
    const arrows = {};
    arrows[0] = blocks[0].querySelectorAll(".arrow");
    arrows[1] = blocks[1].querySelectorAll(".arrow");
    const slider = geo.querySelector(".block-sliders");
    const thumbs = slider.querySelectorAll(".thumb");
    toggleSlide(thumbs);
    toggleSlide(arrows[0]);
    toggleSlide(arrows[1]);
    function toggleSlide(elements) {
      for (let j = 1; j <= elements.length; j++) {
        elements[j - 1].addEventListener("click", () => {
          for (let k = 1; k <= elements.length; k++) {
            slider.classList.remove(`active-${k}`);
          }
          slider.classList.add(`active-${j}`);
        });
      }
    }
  }
  if (document.querySelector(".geo")) {
    geoSlider();
  }

  function mainBlocksSlider() {
    blocks = document.querySelector(".main-blocks");
    links = blocks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("swiped-right", changeSlideBack);
      link.addEventListener("swiped-left", changeSlide);
    });
    function changeSlide() {
      let n = 0;
      for (let k = 1; k <= links.length; k++) {
        if (blocks.classList.contains(`active-${k}`)) {
          n = k;
          blocks.classList.remove(`active-${k}`);
        }
      }
      n = n % links.length;
      blocks.classList.add(`active-${n + 1}`);
    }

    function changeSlideBack() {
      let n = 0;
      for (let k = links.length; k >= 1; k--) {
        if (blocks.classList.contains(`active-${k}`)) {
          n = k;
          blocks.classList.remove(`active-${k}`);
        }
      }

      n = (n % links.length) - 1;
      if (n == 0) {
        n = links.length;
      }
      if (n == -1) {
        n = links.length - 1;
      }
      blocks.classList.add(`active-${n}`);
    }
  }

  if (document.querySelector(".main-blocks")) {
    mainBlocksSlider();
  }

  // GSAP Scroll Animation

  var controller = new ScrollMagic.Controller();
  if (window.matchMedia("(min-width: 981px)").matches) {
    new ScrollMagic.Scene({ triggerHook: "1", duration: "50" })
      .setClassToggle(".nav", "visible") // add class toggle
      .addTo(controller);
    new ScrollMagic.Scene({ triggerHook: "1", duration: "50" })
      .setClassToggle(".main-content", "visible") // add class toggle
      .addTo(controller);

    if (document.querySelector(".strategy")) {
      new ScrollMagic.Scene({
        triggerHook: "1",
        duration: "1000",
        offset: "-300",
      })
        .setClassToggle(".main", "active")
        .addTo(controller);

      var tween = TweenMax.staggerFromTo(
        ".soldier",
        1.5,
        { left: "15%", bottom: "3%", scale: 1, height: "120vh" },
        { left: "50px", bottom: "0", scale: 1.4 }
      );

      var scene = new ScrollMagic.Scene({ triggerHook: "1", duration: "500" })
        .setTween(tween)
        .addTo(controller);

      var tween2 = TweenMax.staggerFromTo(
        ".frame_3",
        1.4,
        { scale: 1 },
        { scale: 1.3 }
      );

      var scene = new ScrollMagic.Scene({ triggerHook: "1", duration: "500" })
        .setTween(tween2)
        .addTo(controller);

      var tween3 = TweenMax.staggerFromTo(
        ".frame_4",
        1.4,
        { scale: 1 },
        { scale: 1.1 }
      );

      var scene = new ScrollMagic.Scene({ triggerHook: "1", duration: "500" })
        .setTween(tween3)
        .addTo(controller);

      var tween4 = TweenMax.staggerFromTo(
        ".frame_2",
        1.4,
        { scale: 1 },
        { scale: 1.2 }
      );

      var scene = new ScrollMagic.Scene({ triggerHook: "1", duration: "500" })
        .setTween(tween4)
        .addTo(controller);

      var tween5 = TweenMax.staggerFromTo(
        ".frame_1",
        1.4,
        { scale: 1.1 },
        { scale: 1 }
      );

      var scene = new ScrollMagic.Scene({ triggerHook: "1", duration: "500" })
        .setTween(tween5)
        .addTo(controller);

      var trailer = document.querySelector("#trailer");
      trailer.volume = 0.2;

      var scene = new ScrollMagic.Scene({
        triggerHook: "1",
        duration: 800,
        offset: 1000,
      })
        .addTo(controller)
        .on("enter", function (e) {
          document
            .getElementById("trailer")
            .scrollIntoView({ block: "end", behavior: "smooth" });
          trailer.play();
        })
        .on("leave", function (e) {
          trailer.pause();
        });

      var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: "onLeave",
          duration: "200%",
        },
      });
      new ScrollMagic.Scene({
        triggerElement: ".video",
        triggerHook: "onLeave",
        duration: "200%",
      })
        .setPin(".video", { pushFollowers: false })
        .addTo(controller);
    }
  }
});

//mobile-menu
if (window.matchMedia("(max-width: 980px)").matches) {
  const nav = document.querySelector(".nav");
  const toggleBtn = nav.querySelector(".nav-toggle");
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
