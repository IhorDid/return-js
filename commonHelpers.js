import{A as E,S as g,a as L,i as v,b as S}from"./assets/vendor-ac3b3f94.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();const i={openModalBtn:document.querySelector(".head-btn"),closeModalBtn:document.querySelector(".modal-close-btn"),modal:document.querySelector(".mobile-modal"),titleBtn:document.querySelector(".nav-title-btn"),menuItems:document.querySelectorAll(".menu-item"),modalLinks:document.querySelectorAll(".modal-menu-item a"),closeButton:document.querySelector(".modal-close-btn")};function m(){document.body.classList.remove("no-scroll")}function y(){i.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function q(){i.openModalBtn.addEventListener("click",y),i.closeModalBtn.addEventListener("click",y)}function k(){i.titleBtn.addEventListener("click",e),document.addEventListener("click",t);function e(){i.menuItems[0].classList.contains("active")?o():s()}function t(r){r.target.closest(".nav-title-btn")||o()}function o(){i.menuItems.forEach(n)}function n(r,a){setTimeout(()=>{r.classList.contains("opacity")||(r.style.opacity=0,r.classList.remove("active"))},(i.menuItems.length-a)*50)}function s(){i.menuItems.forEach(c)}function c(r,a){setTimeout(()=>{r.classList.contains("opacity")||(r.style.opacity=0,r.classList.add("active"),setTimeout(()=>{r.style.opacity=1},50))},a*150)}i.menuItems.forEach(function(a){a.classList.add("hidden-modal")}),i.titleBtn.addEventListener("click",d);function d(){i.menuItems.forEach(b)}function b(r){r.classList.remove("hidden-modal")}}function I(){document.addEventListener("DOMContentLoaded",e);function e(){i.modalLinks.forEach(n=>{n.addEventListener("click",m)}),i.closeButton.addEventListener("click",m),i.menuItems.forEach(n=>{n.addEventListener("click",t)}),i.modalLinks.forEach(n=>{n.classList.contains("modal-link-yk")&&n.addEventListener("click",o)})}function t(){m(),i.modal.classList.add("is-hidden")}function o(){i.modal.classList.add("is-hidden")}}k();q();I();const x="/return-js/assets/hero-1-5938e493.png",M="/return-js/assets/hero-2-2caefb3c.png",B="/return-js/assets/hero-3-dd16fb0a.png",O="/return-js/assets/hero-4-16ae08c7.png",P="/return-js/assets/hero-6-27455b7d.png",f={heroBack:document.querySelector("#background")},w=[x,M,B,O,P];let p=0;function j(){f.heroBack.opacity=0,setTimeout(function(){f.heroBack.style.backgroundImage="url("+w[p]+")",f.heroBack.style.opacity=1},2e3),p=(p+1)%w.length}setInterval(j,1500);new E(".about-me-secondlist",{openOnInit:[0],showMultiple:!0});new g(".swiper-about",{autoplay:{delay:2500},centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".about-button-next"},spaceBetween:0,on:{slideChange:function(e){const t=e.activeIndex,o=e.slides;o.forEach(n=>{n.removeAttribute("id")}),o[t].setAttribute("id","active")}},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});new g(".myswiper",{slidesPerView:1,spaceBetween:800,keyboard:{enabled:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});const T={accordionItemsFaq:document.querySelectorAll(".faq")};function A(e){const t=e.querySelector(".faq-question-container"),o=e.querySelector(".faq-answer-container"),n=t.querySelector(".faq-list-btn");e.classList.toggle("active"),o.style.maxHeight?(o.style.maxHeight=null,n.classList.remove("rotated")):(o.style.maxHeight=o.scrollHeight+"px",n.classList.add("rotated"))}function V(){T.accordionItemsFaq.forEach(e=>{e.addEventListener("click",()=>A(e))})}document.addEventListener("DOMContentLoaded",V);const F=document.querySelector(".js-list");async function H(){return(await L("https://portfolio-js.b.goit.study/api/reviews")).data}async function C(){try{const e=await H();console.log(e),F.insertAdjacentHTML("afterbegin",e.map(({author:t,avatar_url:o,review:n})=>`
          <div class="swiper-slide review-card">
        <img src="${o}" alt="${t}" class="review-card-foto"/>
        <h3 class="review-card-name">${t}</h3>
        <p class="review-card-text">${n}</p>
      </div>`).join(""))}catch(e){alert(e.message)}}C();new g("#reviews-swiper",{direction:"horizontal",slidesPerView:1,slidesPerGroup:1,autoHeight:!0,mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".btn-next-review",prevEl:".btn-prev-review"}});async function $(e){return await L.post("https://portfolio-js.b.goit.study/api/requests",e)}const N="/return-js/assets/x-4bd8af26.svg",h=document.querySelector(".footer-form");h.addEventListener("submit",R);async function R(e){e.preventDefault();const{userEmail:t,comments:o}=e.currentTarget.elements;if(!t.value.trim()||!o.value.trim()){v.error({message:"Your query does not contain any letters!",position:"topRight"});return}const n={email:t.value,comment:o.value};try{const s=await $(n);console.log(s);const c=S.create(`
<div class="footer-modal">
  <div class="footer-modal-window">
    <button
      class="close-modal-button"
      aria-label="button to close the message"
    >
      <svg class="icon-close-modal" width="22" height="22">
        <use xlink:href="${N}#icon-close-modal"></use>
      </svg>
    </button>
    <h2 class="footer-modal-title">
      ${s.data.title}
    </h2>
    <p class="footer-modal-text">
      ${s.data.message}
    </p>
  </div>
</div>

`);c.show(),document.querySelector("body").classList.add("fix-scroll"),l.classList.add("is-hidden"),localStorage.removeItem(u),D(c.close),e.target.reset()}catch(s){v.error({message:s.message,position:"topRight"})}}function D(e){document.addEventListener("click",t),document.addEventListener("keydown",t);function t(o){(o.target.classList.contains("icon-close-modal")||o.target.classList.contains("footer-modal")||o.target.classList.contains("close-modal-button"))&&(e(),document.querySelector("body").classList.remove("fix-scroll"),l.classList.remove("is-hidden")),o.key==="Escape"&&(e(),document.querySelector("body").classList.remove("fix-scroll"),l.classList.remove("is-hidden"))}}const u="footer-form-state";localStorage.getItem(u)&&J();h.addEventListener("input",G);function G(e){const t=JSON.parse(localStorage.getItem(u))||{},o=e.target.value;t[e.target.name]=o.trim(),localStorage.setItem(u,JSON.stringify(t))}function J(){const e=JSON.parse(localStorage.getItem(u)),t=e.userEmail,o=e.comments,{userEmail:n,comments:s}=h.elements;n.value=t||"",s.value=o||""}const l=document.querySelector(".to-top");window.addEventListener("scroll",Y);l.addEventListener("click",z);function Y(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t?l.classList.remove("is-hidden"):l.classList.add("is-hidden")}function z(){window.scrollY>0&&window.scrollTo(0,0)}
//# sourceMappingURL=commonHelpers.js.map
