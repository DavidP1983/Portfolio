const hamburger = document.querySelector(".hamburger"),
   //   menu = document.querySelector('.menu'),
   menu = document.getElementById("block"),
   main = document.getElementById("main"),
   overlay = document.querySelector(".menu__overlay"),
   close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
   //   menu.classList.add('active');
   menu.style.width = "345px";
   main.style.marginLeft = "180px";
   overlay.style.cssText = `
               background: rgba(0,0,0,0.4);
               z-index: 1; 
               `;
});

close.addEventListener("click", () => {
   //   menu.classList.remove('active');
   menu.style.width = "0";
   main.style.marginLeft = "0";
   overlay.style.cssText = `
          background: transparent;
          z-index: -2; 
          `;
});


const el = document.querySelectorAll(".skills__progressbar-bar"),
   elText = document.querySelectorAll('.skills__progressbar-rate');


function fillOutOnScroll(el, elText, index = 0) {
   const elem = el[index];
   const elemTetx = elText[index];
   if (!elem) return;
   let width = 0;
   const id = setInterval(() => {
      if (width < elem.dataset.wid) {
         width++;
         elem.firstChild.style.width = width + "%";
         elemTetx.innerHTML = width + "%";

      } else {
         clearInterval(id);
         fillOutOnScroll(el, elText, index + 1);
      }
   }, 10);

}

function actionOnscroll() {
   if (document.documentElement.scrollTop > 2500) {
      fillOutOnScroll(el, elText);
      window.removeEventListener('scroll', actionOnscroll);
   }

}

window.addEventListener('scroll', actionOnscroll);