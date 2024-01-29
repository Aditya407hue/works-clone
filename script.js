function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      duration: 0.5,
      delay: 0.5,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
}

loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
document.querySelector("#footer h3").addEventListener("click", () => {
  scroll.scrollTo(0);
});

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bg})`;
  });
  ele.addEventListener("mouseleave", function () {
    // Remove the background image on mouse leave
    page2.style.backgroundImage = "none";
  });
});
