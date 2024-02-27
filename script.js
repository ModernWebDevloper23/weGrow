window.addEventListener("load", function () {
  document.querySelector('.loader').style.display = 'none';
})
  
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  // follwoing line is not required to work pinning on touch screen

   pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.to(".nav",{
  y: '120px',
  position: 'fixed',
  scrollTrigger: {
    trigger: "page-1",
    scroller: '.main',
    // markers: true,
    start: 'top top',
    end: 'top -5%',
    scrub: 1,
  }
})
gsap.to(".nav-in",{
  y: '-120px',
  scrollTrigger: {
    trigger: "page-1",
    scroller: '.main',
    // markers: true,
    start: 'top top',
    end: 'top -5%',
    scrub: 1,
  }
})

gsap.from('.Header-logo', {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".our-process-section",
    scroller: ".main",
    start: 'top 80%',
    end: 'top 60%',
    scrub: 1,
  }
})

// gsap.from('.Header h1', {
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".our-process-section",
//     scroller: ".main",
//     start: 'top 85%',
//     end: 'top 65%',
//     scrub: 1,
//   }
// })