import{A as E,S as p,a as L,i as v,b as S}from"./assets/vendor-ac3b3f94.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const i={openModalBtn:document.querySelector(".head-btn"),closeModalBtn:document.querySelector(".modal-close-btn"),modal:document.querySelector(".mobile-modal"),titleBtn:document.querySelector(".nav-title-btn"),menuItems:document.querySelectorAll(".menu-item"),modalLinks:document.querySelectorAll(".modal-menu-item a"),closeButton:document.querySelector(".modal-close-btn"),mobileModal:document.querySelector(".mobile-modal"),modalOrderBtns:document.querySelectorAll(".modal-order-btn")};function q(){i.mobileModal&&(i.mobileModal.classList.add("is-hidden"),document.body.classList.remove("no-scroll"))}function I(){i.modalOrderBtns.forEach(function(e){e.addEventListener("click",q)})}document.addEventListener("DOMContentLoaded",I());function m(){document.body.classList.remove("no-scroll")}function b(){i.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function k(){i.openModalBtn.addEventListener("click",b),i.closeModalBtn.addEventListener("click",b)}function j(){i.titleBtn.addEventListener("click",e),document.addEventListener("click",t);function e(){i.menuItems[0].classList.contains("active")?s():o()}function t(a){a.target.closest(".nav-title-btn")||s()}function s(){i.menuItems.forEach(n)}function n(a,r){setTimeout(()=>{a.classList.contains("opacity")||(a.style.opacity=0,a.classList.remove("active"),a.classList.contains("active")||a.classList.add("pointer-events-none"))},(i.menuItems.length-r)*50)}function o(){i.menuItems.forEach(c)}function c(a,r){setTimeout(()=>{a.classList.contains("opacity")||(a.style.opacity=0,a.classList.add("active"),a.classList.contains("active")&&a.classList.remove("pointer-events-none"),setTimeout(()=>{a.style.opacity=1},50))},r*150)}i.menuItems.forEach(function(r){r.classList.add("hidden-modal")}),i.titleBtn.addEventListener("click",d);function d(){i.menuItems.forEach(w)}function w(a){a.classList.remove("hidden-modal")}}function M(){document.addEventListener("DOMContentLoaded",e);function e(){i.modalLinks.forEach(n=>{n.addEventListener("click",m)}),i.closeButton.addEventListener("click",m),i.menuItems.forEach(n=>{n.addEventListener("click",t)}),i.modalLinks.forEach(n=>{n.classList.contains("modal-link-yk")&&n.addEventListener("click",s)})}function t(){m(),i.modal.classList.add("is-hidden")}function s(){i.modal.classList.add("is-hidden")}}j();k();M();const x="/return-js/assets/hero-1-5938e493.png",B="/return-js/assets/hero-2-2caefb3c.png",O="/return-js/assets/hero-3-dd16fb0a.png",T="/return-js/assets/hero-4-16ae08c7.png",P="/return-js/assets/hero-6-27455b7d.png",F="/return-js/assets/hero_mob@1x-90f2c2e0.png",A="/return-js/assets/mon-1-3e0df557.jpg",V="/return-js/assets/mob-2-6ab8484e.jpg",H="/return-js/assets/mob-3-b3ff7a5c.jpg",C="/return-js/assets/mob-4-bb4b6a76.jpg",$="/return-js/assets/hero_tab@1x-8fd2c1dd.png",N="/return-js/assets/tab-1-ce5eca12.jpg",R="/return-js/assets/tab-2-6ff18667.jpg",_="/return-js/assets/tab-3-63bc94f3.jpg",D="/return-js/assets/tab-4-144c1ec6.jpg",f={heroBack:document.querySelector("#background")},y=[x,B,O,T,P],z=[$,N,R,_,D],G=[F,A,V,H,C];let g=0;function J(){f.heroBack.opacity=0,setTimeout(function(){let e;window.innerWidth>=1440?e=y:window.innerWidth>=768?e=z:e=G,f.heroBack.style.backgroundImage="url("+e[g]+")",f.heroBack.style.opacity=1},2500),g=(g+1)%y.length}setInterval(J,5e3);new E(".about-me-secondlist",{openOnInit:[0],showMultiple:!0});new p(".swiper-about",{autoplay:{delay:2500},centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".about-button-next"},spaceBetween:0,on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,s)=>{s===e?t.classList.add("active-action"):t.classList.remove("active-action")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,s)=>{s===e?t.classList.add("active-action"):t.classList.remove("active-action")})}},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});new p(".myswiper",{slidesPerView:1,spaceBetween:800,keyboard:{enabled:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});const W={accordionItemsFaq:document.querySelectorAll(".faq")};function Y(e){const t=e.querySelector(".faq-question-container"),s=e.querySelector(".faq-answer-container"),n=t.querySelector(".faq-list-btn");e.classList.toggle("active"),s.style.maxHeight?(s.style.maxHeight=null,n.classList.remove("rotated")):(s.style.maxHeight=s.scrollHeight+"px",n.classList.add("rotated"))}function K(){W.accordionItemsFaq.forEach(e=>{e.addEventListener("click",()=>Y(e))})}document.addEventListener("DOMContentLoaded",K);document.querySelector(".marquee-inner");new IntersectionObserver(e=>{e.forEach(t=>{t.target.querySelectorAll(".marquee__line").forEach(n=>{t.isIntersecting?n.style.animationPlayState="paused":n.style.animationPlayState="running"})})},{threshold:.9});const U=document.querySelector("#review-card");async function Q(){return(await L("https://portfolio-js.b.goit.study/api/reviews")).data}async function X(){try{const e=await Q();console.log(e),U.insertAdjacentHTML("afterbegin",e.map(({_id:t,author:s,avatar_url:n,review:o})=>`
          <li class="review-card   swiper-slide"  id="${t}">
        <img class="revem-img" src="${n}" alt="${s}"  width="48" height="48" loading="lazy"/>
        <div class="position">
        <h3 class="review-card-name">${s}</h3>
        <p class="review-card-text">${o.trim()}</p>
     </div>
        </li>`).join(""))}catch(e){alert(e.message)}}X();new p("#reviews-swiper",{direction:"horizontal",slidesPerView:1,slidesPerGroup:1,keyboard:{enabled:!0},autoHeight:!0,mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".btn-next-review",prevEl:".btn-prev-review"}});async function Z(e){return await L.post("https://portfolio-js.b.goit.study/api/requests",e)}const ee="/return-js/assets/x-4bd8af26.svg",h=document.querySelector(".footer-form");h.addEventListener("submit",te);async function te(e){e.preventDefault();const{userEmail:t,comments:s}=e.currentTarget.elements;if(!t.value.trim()||!s.value.trim()){v.error({message:"Your query does not contain any letters!",position:"topRight"});return}const n={email:t.value,comment:s.value};try{const o=await Z(n);console.log(o);const c=S.create(`
<div class="footer-modal">
  <div class="footer-modal-window">
    <button
      class="close-modal-button"
      aria-label="button to close the message"
    >
      <svg class="icon-close-modal" width="22" height="22">
        <use xlink:href="${ee}#icon-close-modal"></use>
      </svg>
    </button>
    <h2 class="footer-modal-title">
      ${o.data.title}
    </h2>
    <p class="footer-modal-text">
      ${o.data.message}
    </p>
  </div>
</div>

`);c.show(),document.querySelector("body").classList.add("fix-scroll"),l.classList.add("is-hidden"),localStorage.removeItem(u),se(c.close),e.target.reset()}catch(o){v.error({message:o.message,position:"topRight"})}}function se(e){document.addEventListener("click",t),document.addEventListener("keydown",t);function t(s){(s.target.classList.contains("icon-close-modal")||s.target.classList.contains("footer-modal")||s.target.classList.contains("close-modal-button"))&&(e(),document.querySelector("body").classList.remove("fix-scroll"),l.classList.remove("is-hidden")),s.key==="Escape"&&(e(),document.querySelector("body").classList.remove("fix-scroll"),l.classList.remove("is-hidden"))}}const u="footer-form-state";localStorage.getItem(u)&&ne();h.addEventListener("input",oe);function oe(e){const t=JSON.parse(localStorage.getItem(u))||{},s=e.target.value;t[e.target.name]=s.trim(),localStorage.setItem(u,JSON.stringify(t))}function ne(){const e=JSON.parse(localStorage.getItem(u)),t=e.userEmail,s=e.comments,{userEmail:n,comments:o}=h.elements;n.value=t||"",o.value=s||""}const l=document.querySelector(".to-top");window.addEventListener("scroll",ie);l.addEventListener("click",ae);function ie(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t?l.classList.remove("is-hidden"):l.classList.add("is-hidden")}function ae(){window.scrollY>0&&window.scrollTo(0,0)}
//# sourceMappingURL=commonHelpers.js.map
