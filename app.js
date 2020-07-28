window.onload = () => {
  document.querySelector(".loader").style.display = "none";
};
//----------------------Arrow navigation---------------------------------
document.getElementsByClassName("right")[0].addEventListener("click", () => {
  window.scroll({
    left: window.innerWidth + 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("right")[1].addEventListener("click", () => {
  window.scroll({
    left: window.innerWidth + 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("left")[0].addEventListener("click", () => {
  window.scroll({
    left: -window.innerWidth - 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("left")[1].addEventListener("click", () => {
  window.scroll({
    left: -window.innerWidth - 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("up")[0].addEventListener("click", () => {
  window.scroll({
    top: -window.innerHeight - 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("up")[1].addEventListener("click", () => {
  window.scroll({
    top: -window.innerHeight - 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("down")[0].addEventListener("click", () => {
  window.scroll({
    top: window.innerHeight + 1,
    behavior: "smooth",
  });
});
document.getElementsByClassName("down")[1].addEventListener("click", () => {
  window.scroll({
    top: window.innerHeight + 1,
    behavior: "smooth",
  });
});
anime({
  targets: [".arrow"],
  loop: true,
  opacity: 1,
  easing: "easeInOutSine",
  duration: 1400,
  direction: "alternate",
});

//--------------------------------LANDING-------------------------------------------------

let burger = document.getElementById("burger");
let navbar = document.getElementById("navbar");

window.addEventListener("load", () => {
  anime({
    targets: [".line "],
    height: {
      value: ["33.33%", "15%"],
      duration: 1200,
      delay: 700,
    },
    margin: {
      value: "3% 0%",
      duration: 1500,
      delay: 1900,
    },
  });
  anime({
    targets: "#burger",
    height: "40px",
    width: "45px",
    left: "2.5vw",
    top: "3vh",
    delay: 1000,
    easing: "easeInOutQuad",
  });
  document.querySelector(".colorit").style.color = "#2005bb";
  document.querySelector(".colorit").style.textShadow = "0px 0px 12px #2005bb";
});

//Background sphere animation
function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, { scale: 1 });
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }
  resize();
  window.addEventListener("resize", resize);
}

var sphereAnimation = (function () {
  var sphereEl = document.querySelector(".sphere-animation");
  var spherePathEls = sphereEl.querySelectorAll(".sphere path");
  var pathLength = spherePathEls.length;
  var aimations = [];

  fitElementToParent(sphereEl);

  var breathAnimation = anime({
    begin: function () {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(
          anime({
            targets: spherePathEls[i],
            stroke: {
              value: ["rgba(27,3,163,1)", "rgba(80,80,80,.35)"],
              duration: 500,
            },
            translateX: [2, -4],
            translateY: [2, -4],
            easing: "easeOutQuad",
            autoplay: false,
          })
        );
      }
    },
    update: function (ins) {
      aimations.forEach(function (animation, i) {
        var percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false,
  });

  var introAnimation = anime
    .timeline({
      autoplay: false,
    })
    .add(
      {
        targets: spherePathEls,
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 3900,
          easing: "easeInOutCirc",
          delay: anime.stagger(190, { direction: "reverse" }),
        },
        duration: 2000,
        delay: anime.stagger(60, { direction: "reverse" }),
        easing: "linear",
      },
      0
    );

  var shadowAnimation = anime(
    {
      targets: "#sphereGradient",
      x1: "25%",
      x2: "25%",
      y1: "0%",
      y2: "75%",
      duration: 30000,
      easing: "easeOutQuint",
      autoplay: false,
    },
    0
  );

  function init() {
    introAnimation.play();
    breathAnimation.play();
    shadowAnimation.play();
  }

  init();
})();

//navbar appear animation

let nav = false;

burger.addEventListener("click", () => {
  nav = !nav;

  if (nav) {
    navbar.style.width = "100%";
    navbar.style.height = "100%";
    burger.style.cursor = "default";

    anime({
      targets: [".line "],

      margin: {
        value: ["3% , 0%", "0% 0%"],
        duration: 300,
        delay: 100,
        easing: "linear",
      },
      height: {
        value: ["15%", "33.33%"],
        duration: 100,
        delay: 550,
        easing: "linear",
      },
    });
    anime({
      targets: "#burger",
      height: "100%",
      width: "100%",
      left: "0",
      top: "0",
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#back",
      width: {
        value: "3.5rem",
        delay: 1500,
      },
      rotate: {
        value: 360,
        delay: 1700,
        duration: 700,
        easing: "easeInOutSine",
      },
    });
  } else {
    anime({
      targets: "#back",
      rotate: {
        value: 0,
        duration: 1000,
        easing: "easeInOutSine",
      },
      width: {
        value: "0",
        delay: 500,
        duration: 1000,
      },
    });

    anime({
      targets: [".line "],
      margin: {
        value: ["0% 0%", "3% 0%"],
        duration: 500,
        delay: 1000,
        easing: "linear",
      },
      height: {
        value: ["33.33%", "15%"],
        duration: 100,
        delay: 500,
        easing: "linear",
      },
    });
    burger.style.height = "40px";
    burger.style.width = "45px";
    anime({
      targets: "#burger",
      left: "2.5vw",
      top: "3vh",
      duration: "500",
      easing: "easeInOutQuad",
    });
    navbar.style.width = "0";
    navbar.style.height = "0";
    burger.style.cursor = "pointer";
  }
});

//--------------------------------ABOUT-------------------------------------------------

let about = document.getElementById("about");
let words = [
  "Vtrix",
  "WEB-D",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Vue",
  "SASS",
  "BootStrap",
  "MaterialUI",
  "NodeJS",
  "MongoDB",
];
window.addEventListener("load", function () {
  let randoms = document.getElementsByClassName("randoms");
  for (let i = 0; i < randoms.length; i++) {
    changeWord(randoms[i]);
  }
});

function changeWord(a) {
  a.style.opacity = "0.5";
  a.innerHTML = words[getRandomInt(0, words.length - 1)];
  setTimeout(function () {
    a.style.opacity = "1";
  }, 600);
  setTimeout(function () {
    changeWord(a);
  }, getRandomInt(800, 1000));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-----------------------------------------------Contact Form---------------------------------------
let inputClick = (ele) => {
  ele.children[0].style.top = 0;
  ele.children[0].style.fontSize = "1.2rem";
  ele.children[0].style.color = "#3215d6";
  ele.children[0].style.textShadow = "0px 0px 12px #3215d6";
  ele.children[1].style.borderBottom = "1px solid #3215d6";
};
let inputBlur = (ele) => {
  if (!ele.children[1].value) {
    ele.children[0].style.top = "15px";
    ele.children[0].style.fontSize = "1rem";
  }
  ele.children[0].style.color = "whitesmoke";
  ele.children[0].style.textShadow = "0px 0px 0px #000000";
  ele.children[1].style.borderBottom = "1px solid whitesmoke";
};

let inputs = document.querySelectorAll(".formFeild");

inputs[0].children[1].addEventListener("click", () => {
  inputClick(inputs[0]);
});
inputs[1].children[1].addEventListener("click", () => {
  inputClick(inputs[1]);
});
inputs[2].children[1].addEventListener("click", () => {
  inputClick(inputs[2]);
});
inputs[3].children[1].addEventListener("click", () => {
  inputClick(inputs[3]);
});

inputs[0].children[1].addEventListener("blur", () => {
  inputBlur(inputs[0]);
});
inputs[1].children[1].addEventListener("blur", () => {
  inputBlur(inputs[1]);
});

inputs[2].children[1].addEventListener("blur", () => {
  inputBlur(inputs[2]);
});
inputs[3].children[1].addEventListener("blur", () => {
  inputBlur(inputs[3]);
});
