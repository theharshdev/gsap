// Register the plugin
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrambleTextPlugin,
  ScrollToPlugin
);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true,
});

const tl = gsap.timeline();

tl.to(".loadTxt", {
  scrambleText: {
    text: "100%",
    chars:
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?",
  },
  duration: 3,
});

tl.to(".loadTxt", {
  opacity: 0,
  y: -100,
  duration: 1,
});

tl.to(".loader", {
  scaleY: -1,
  opacity: 0,
  ease: "elastic.inOut(1.5,0.2)",
  stagger: {
    each: 0.01,
    from: "random",
  },
});

tl.to(".body", {
  height: "auto",
  duration: 0,
});

tl.from(".navbar p", {
  y: -20,
  opacity: 0,
  duration: 0.3,
});

tl.from(".navbar a", {
  y: -20,
  opacity: 0,
  duration: 0.7,
  stagger: {
    each: 0.3,
  },
});

gsap.from(".paragraph", {
  opacity: 0,
  scale: 2,
  duration: 3,
  scrollTrigger: {
    trigger: ".paragraph",
    toggleActions: "restart restart restart restart",
  },
});

gsap.from(".paragraph span", {
  opacity: 0,
  duration: 2,
  delay: 2,
  stagger: {
    each: 0.3,
    from: "random",
  },
  scrollTrigger: {
    trigger: ".paragraph",
    toggleActions: "restart restart restart restart",
  },
});

gsap.from("#mainBg", {
  opacity: 0,
  scale: 0,
  duration: 1.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".paragraph",
    toggleActions: "restart restart restart restart",
  },
});

gsap.from("#mainLink", {
  opacity: 0,
  y: 200,
  scale: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".paragraph",
    toggleActions: "restart restart restart restart",
  },
});

gsap.from(".mainPara", {
  opacity: 0,
  duration: 1.4,
  scale: 0,
  y: -100,
  delay: 1.2,
  scrollTrigger: {
    trigger: ".paragraph",
    toggleActions: "restart restart restart restart",
  },
});

gsap.from(".head", {
  opacity: 0,
  x: -400,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".head",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from(".head2", {
  opacity: 0,
  x: 400,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".head2",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#box01", {
  scrollTrigger: {
    trigger: "#box01",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
  scale: 0.8,
  borderRadius: "50%",
});

const splitHerotxt = SplitText.create("#box01 h3");

gsap.from(splitHerotxt.chars, {
  scrollTrigger: {
    trigger: splitHerotxt.chars,
    start: "top 60%",
    end: "top 40%",
    scrub: 2.5,
  },
  stagger: 0.3,
  opacity: 0,
  x: 150,
});

gsap.from(".txt-1", {
  opacity: 0,
  scale: 20,
  duration: 2,
  delay: 1,
  ease: "elastic.out(1,0.4)",
});

gsap.to(".horiTxt", {
  scrollTrigger: {
    trigger: ".bodyBox",
    scrub: 1,
    pin: true,
    start: "top 0%",
    end: "top -300%",
  },
  transform: "translateX(-55%)",
});

const stringLine = document.getElementById("stringLine");

stringLine.addEventListener("mousemove", (e) => {
  let x = e.x;
  let y = e.y;
  if (x > window.innerWidth / 2) {
    x = x / 2;
  }
  if (y > window.innerHeight / 2) {
    y = y / 2;
  }
  gsap.to("#stringLine path", {
    attr: { d: `M 10 100 Q ${x} ${y} 990 100` },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
});

stringLine.addEventListener("mouseleave", () => {
  gsap.to("#stringLine path", {
    attr: { d: `M 10 100 Q 500 100 990 100` },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
});

gsap.from(".imgCont .img1", {
  scrollTrigger: {
    trigger: ".imgCont .img1",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 0,
  y: 200,
  scale: 0.5,
  duration: 2.5,
  ease: "back.out(1.7)",
});

gsap.from(".imgCont .img2", {
  scrollTrigger: {
    trigger: ".imgCont .img2",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 0,
  y: 200,
  scale: 0.5,
  duration: 2.5,
  ease: "back.out(1.7)",
});

gsap.from(".imgCont .img3", {
  scrollTrigger: {
    trigger: ".imgCont .img3",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 0,
  y: 200,
  scale: 0.5,
  duration: 2.5,
  ease: "back.out(1.7)",
});

gsap.from(".imgCont .img4", {
  scrollTrigger: {
    trigger: ".imgCont .img4",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 0,
  y: 200,
  scale: 0.5,
  duration: 2.5,
  ease: "back.out(1.7)",
});

window.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    duration: 1.5,
    ease: "elastic.out(1,0.4)",
  });
});

const imgCursor = document.querySelectorAll(".imgCursor");

imgCursor.forEach((imgCursors) => {
  imgCursors.addEventListener("mousemove", () => {
    gsap.to("#cursor", {
      scale: 15,
      duration: 2,
      opacity: 0.5,
      ease: "elastic.out(1,0.4)",
    });
    document.getElementById("cursor").innerHTML = "View More";
  });
  imgCursors.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      scale: 1,
      duration: 2,
      ease: "elastic.out(1,0.4)",
    });
    document.getElementById("cursor").innerHTML = "";
  });
});

const menuBtn = document.querySelector(".menuBtn");
const closeMenu = document.querySelector(".closeMenu");
const menuBox = document.querySelector(".menuBox");

const timeMenu = gsap.timeline();
const timeMenu2 = gsap.timeline();

timeMenu.to("#smooth-content", {
  opacity: 0,
  duration: 1,
});

timeMenu2.to("#smooth-content", {
  duration: 1,
});

timeMenu.from(menuBox, {
  opacity: 0,
  x: "100%",
});

timeMenu.from(".menuBox a", {
  opacity: 0,
  x: 100,
  stagger: 0.15,
});

timeMenu.from(closeMenu, {
  opacity: 0,
  y: -100,
});

timeMenu2.from(".menuBox2", {
  opacity: 0,
  x: "-100%",
});

timeMenu2.from(".menuBox2 p", {
  opacity: 0,
  x: -100,
  stagger: 0.15,
});

timeMenu.pause();
timeMenu2.pause();

menuBtn.addEventListener("click", () => {
  timeMenu.play();
  timeMenu2.play();
});

closeMenu.addEventListener("click", () => {
  timeMenu.reverse();
  timeMenu2.reverse();
});

gsap.to("#revealPara", {
  scrollTrigger: {
    toggleActions: "restart restart restart restart",
    trigger: "#revealPara",
    scrub: 1.5,
    start: "top 70%",
  },
  backgroundSize: "100%",
  duration: 2,
});

let split = SplitText.create(".split", { type: "words, chars" });

gsap.from(split.chars, {
  scrollTrigger: {
    toggleActions: "restart restart restart restart",
    trigger: ".split",
    scrub: 2,
    start: "top 70%",
    end: "top 40%",
  },
  duration: 1,
  y: 100,
  autoAlpha: 0,
  stagger: 0.2,
});

let skillSplit = SplitText.create(".skills p");

gsap.from(skillSplit.chars, {
  scrollTrigger: {
    toggleActions: "restart restart restart restart",
    trigger: skillSplit.chars,
    scrub: 2,
    start: "top 80%",
    end: "top 40%",
  },
  opacity: 0,
  scale: 3,
  autoAlpha: 0,
  stagger: 0.3,
});

document.addEventListener("mousemove", (e) => {
  const x = Math.floor((e.clientX / window.innerWidth - 0.5) * 50);
  const y = Math.floor((e.clientY / window.innerHeight - 0.5) * 50);

  gsap.to(".mainBgImg", {
    x: x,
    y: y,
    duration: 2,
  });
});

const paraImgs = document.querySelectorAll(".paraImg");

paraImgs.forEach((paraImg) => {
  gsap.from(paraImg, {
    scrollTrigger: {
      trigger: paraImg,
      toggleActions: "restart restart restart restart",
      scrub: 2,
    },
    y: 200,
  });
});

gsap.to(".marque", {
  transform: "translateX(0)",
  duration: 4,
  repeat: -1,
  ease: "none",
});

let splitPara = SplitText.create(".splitPara");

gsap.from(splitPara.lines, {
  scrollTrigger: {
    trigger: splitPara.lines,
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 0,
  scaleY: -1,
  stagger: 0.5,
});

const services = document.querySelectorAll(".services h3");
const serviceBoxs = document.querySelectorAll(".services");

serviceBoxs.forEach((serviceBox, i) => {
  gsap.from(serviceBox, {
    scrollTrigger: {
      trigger: serviceBox,
      toggleActions: "restart restart restart restart",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
    opacity: 0,
    y: 35 * (i + 1),
    duration: 0.5,
  });
});

services.forEach((service) => {
  const splittxt = SplitText.create(service);
  gsap.from(splittxt.chars, {
    scrollTrigger: {
      trigger: splittxt.chars,
      toggleActions: "restart restart restart restart",
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
    },
    opacity: 0,
    x: 20,
    duration: 0.5,
    stagger: 0.03,
  });
});

const serviceParas = document.querySelectorAll(".services p");

serviceParas.forEach((servicePara) => {
  const splitPara = SplitText.create(servicePara);
  gsap.from(splitPara.lines, {
    scrollTrigger: {
      trigger: splitPara.lines,
      toggleActions: "restart restart restart restart",
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
    },
    opacity: 0,
    x: 30,
    ease: "elastic",
    duration: 0.5,
    stagger: 0.03,
  });
});

gsap.from("#footerTxt", {
  scrollTrigger: {
    trigger: "#footerTxt",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
  opacity: 0,
  y: 150,
  duration: 0.4,
  ease: "back",
});

gsap.from("footer h3", {
  scrollTrigger: {
    trigger: "footer h3",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
  y: 120,
  opacity: 0,
  duration: 1,
});

gsap.from("footer a", {
  scrollTrigger: {
    trigger: "footer a",
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
  y: 120,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

const hoverTxts = document.querySelectorAll(".hoverTxt");

hoverTxts.forEach((hoverTxt) => {
  const hoverTxtCont = hoverTxt.textContent;
  function hoverTxtFnc() {
    gsap.to(hoverTxt, {
      duration: 1.5,
      scrambleText: {
        text: hoverTxtCont,
        chars:
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?",
      },
    });
  }
  hoverTxt.addEventListener("mouseover", hoverTxtFnc);
  hoverTxt.addEventListener("mouseleave", hoverTxtFnc);
});

const splitYPara = SplitText.create(".yellowPara");

gsap.from(splitYPara.words, {
  scrollTrigger: {
    trigger: splitYPara.words,
    toggleActions: "restart restart restart restart",
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
  },
  scrambleText: {
    chars:
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?",
  },
  stagger: 0.5,
  duration: 2,
  ease: "back",
});
function wheelScroll(e) {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrollPercent = Math.floor(
    (scrollTop / (fullHeight - windowHeight)) * 100 + 1
  );

  if (e.deltaY > 0) {
    gsap.to(".marque", {
      scrollTrigger: {
        trigger: ".marque",
      },
      transform: "translateX(-200%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      scrollTrigger: {
        trigger: ".marque",
      },
      rotate: 180,
      duration: 0.5,
    });
    gsap.to("#scroll-spy-img", {
      rotate: `${scrollPercent * 10}deg`,
      duration: 1,
      ease: "power.inout",
    });
  } else {
    gsap.to(".marque", {
      scrollTrigger: {
        trigger: ".marque",
      },
      transform: "translateX(0%)",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      scrollTrigger: {
        trigger: ".marque",
      },
      rotate: 0,
      duration: 0.5,
    });
    gsap.to("#scroll-spy-img", {
      rotate: `${scrollPercent * 10}deg`,
      duration: 1,
      ease: "power.inout",
    });
  }
}

window.addEventListener("wheel", wheelScroll);
window.addEventListener("scroll", wheelScroll);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  const scrollPercent = Math.floor(
    (scrollTop / (fullHeight - windowHeight)) * 100 + 1
  );

  if (scrollPercent === 100) {
    gsap.to("#scrollTopBtn", {
      rotate: "180deg",
      duration: 0.4,
    });
  } else if (scrollPercent === 1) {
    gsap.to("#scrollTopBtn", {
      rotate: "0deg",
      duration: 0.4,
    });
  }

  gsap.to("#scroll-spy", {
    height: `${scrollPercent}%`,
  });
});

document.getElementById("scrollTopBtn").addEventListener("click", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  const scrollPercent = Math.floor(
    (scrollTop / (fullHeight - windowHeight)) * 100 + 1
  );
  if (scrollPercent === 100) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
