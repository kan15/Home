window.onscroll = function(e) {
  let wScroll = document.documentElement.scrollTop;
  let pageHeight = document.documentElement.clientHeight;

  document.querySelector(".logo").style.transform = `translate(0px, ${wScroll / 2}%)`;

  document.querySelector(".back-bird").style.transform = `translate(0px, ${wScroll / 4}%)`;

  document.querySelector(".fore-bird").style.transform = `translate(0px, -${wScroll / 80}%)`;

  //появление картинок
  let figures = document.querySelectorAll(".figure");

  if (wScroll > figures[0].getBoundingClientRect().top - pageHeight / 2.2) {
    for (let i = 0; i < figures.length; i++) {
      setTimeout(function() {
        figures[i].classList.add("is-showing");
      }, 200 * (i + 1));
    }
  }

  //опасити при появлении
  document.querySelector(".promo-text").style.opacity =
    Math.abs(document.querySelector(".promo-text").getBoundingClientRect().top - pageHeight) / 525;

  //posts
  let postTop = document.querySelector(".posts").getBoundingClientRect().top;

  let PostOffset =  document.querySelector(".posts").getBoundingClientRect().top + pageYOffset;

  if (postTop - pageHeight < 0) {
    var offset = Math.min(0, wScroll - PostOffset + pageHeight -400);

    document.querySelector(".post-1").style.transform = `translate(${offset}px, ${Math.abs(-offset * 0.2)}px)`;
    document.querySelector(".post-3").style.transform = `translate(${-offset}px, ${Math.abs(-offset * 0.2)}px)`;
  }
};

//темная тема
if (localStorage.getItem("themeParalax") == 1) {
  document.body.classList.add("black-theme");
  for (let i = 0; i < document.querySelectorAll(".post .cta").length; i++) {
    document.querySelectorAll(".post .cta")[i].classList.add("cta-black");
    document.querySelectorAll(".post")[i].classList.add("post-black");
    document.querySelectorAll(".content")[i].classList.add("content-black");
    document.querySelector("footer").classList.add("footer-black");
  }
}

document.querySelector(".bb-logo").onclick = function() {
  document.body.classList.toggle("black-theme");
  for (let i = 0; i < document.querySelectorAll(".post .cta").length; i++) {
    document.querySelectorAll(".post .cta")[i].classList.toggle("cta-black");
    document.querySelectorAll(".post")[i].classList.toggle("post-black");
    document.querySelectorAll(".content")[i].classList.toggle("content-black");
    document.querySelector("footer").classList.toggle("footer-black");
  }
  localStorage.getItem("themeParalax") == 0 ? localStorage.setItem("themeParalax", 1) : localStorage.setItem("themeParalax", 0);
};
