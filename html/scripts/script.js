document.querySelector(".floatingBtn").addEventListener(
  "click",
  function () {
    this.classList.remove("floatingBtn");
  },
  true
);

document.querySelector(".miniPlayer .close").addEventListener(
  "click",
  function () {
    document.querySelector(".miniPlayer").classList.add("floatingBtn");
  },
  true
);

// tooptip
document.querySelector(".progress").addEventListener(
  "mouseover",
  function () {
    document.querySelector(".tooltip").style.display = "block";
  },
  true
);

document.querySelector(".progress").addEventListener(
  "mouseout",
  function () {
    document.querySelector(".tooltip").style.display = "none";
  },
  true
);
