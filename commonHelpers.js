import{A as f,S as l,N as p,a as g,i as u,b as v}from"./assets/vendor-361c038e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const r={openModalBtn:document.querySelector(".head-btn"),closeModalBtn:document.querySelector(".modal-close-btn"),modal:document.querySelector(".mobile-modal"),titleBtn:document.querySelector(".nav-title-btn"),menuItems:document.querySelectorAll(".menu-item"),modalLinks:document.querySelectorAll(".modal-menu-item a"),closeButton:document.querySelector(".modal-close-btn")};function m(){document.body.classList.remove("no-scroll")}function y(){r.openModalBtn.addEventListener("click",e),r.closeModalBtn.addEventListener("click",e);function e(){r.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}}function b(){r.titleBtn.addEventListener("click",function(){r.menuItems[0].classList.contains("active")?e():o()}),document.addEventListener("click",function(t){t.target.closest(".nav-title-btn")||e()});function e(){r.menuItems.forEach(function(t,n){setTimeout(()=>{t.style.opacity=0,setTimeout(()=>{t.classList.remove("active")},500)},(r.menuItems.length-n)*50)})}function o(){r.menuItems.forEach(function(t,n){setTimeout(()=>{t.style.opacity=0,t.classList.add("active"),setTimeout(()=>{t.style.opacity=1},50)},n*150)})}}function w(){document.addEventListener("DOMContentLoaded",function(){r.modalLinks.forEach(e=>{e.addEventListener("click",o=>{m()})}),r.closeButton.addEventListener("click",()=>{m()})})}b();y();w();new f("#acc3",{openOnInit:[0],showMultiple:!0});new l(".swiper-about",{centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".about-button-next"},spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});new l(".myswiper",{slidesPerView:1,spaceBetween:800,keyboard:{enabled:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});const h={accordionItemsFaq:document.querySelectorAll(".faq")};function L(e){const o=e.querySelector(".faq-question-container"),t=e.querySelector(".faq-answer-container"),n=o.querySelector(".faq-list-btn");e.classList.toggle("active"),t.style.maxHeight?(t.style.maxHeight=null,n.classList.remove("rotated")):(t.style.maxHeight=t.scrollHeight+"px",n.classList.add("rotated"))}function q(){h.accordionItemsFaq.forEach(e=>{e.addEventListener("click",()=>L(e))})}document.addEventListener("DOMContentLoaded",q);const S=document.querySelector(".js-list");async function E(){return(await fetch("https://portfolio-js.b.goit.study/api/reviews")).json()}E().then(e=>{S.insertAdjacentHTML("afterbegin",e.map(({author:o,avatar_url:t,review:n})=>`
    <div class="swiper-slide review-card">
        <img src="${t}" alt="${o}" class="review-card-foto" />
        <h3 class="review-card-name">${o}</h3>
        <p class="review-card-text">${n}</p>
    </div>`).join("")),I.update()});const x=document.querySelector(".reviews-swiper"),I=new l(x,{modules:[p],slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:4,spaceBetween:16}},direction:"horizontal",navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"}});async function M(e){return await g.post("https://portfolio-js.b.goit.study/api/requests",e)}const k="/return-js/assets/x-4bd8af26.svg",d=document.querySelector(".footer-form");d.addEventListener("submit",B);async function B(e){e.preventDefault();const{userEmail:o,comments:t}=e.currentTarget.elements;if(!o.value.trim()||!t.value.trim()){u.error({message:"Your query does not contain any letters!",position:"topRight"});return}const n={email:o.value,comment:t.value};try{const s=await M(n);console.log(s);const i=v.create(`
<div class="footer-modal">
  <div class="footer-modal-window">
    <button
      class="close-modal-button"
      aria-label="button to close the message"
    >
      <svg class="icon-close-modal" width="22" height="22">
        <use xlink:href="${k}#icon-close-modal"></use>
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

`);i.show(),document.querySelector("body").classList.add("fix-scroll"),localStorage.removeItem(c),O(i.close),e.target.reset()}catch(s){u.error({message:s.message,position:"topRight"})}}function O(e){document.addEventListener("click",o),document.addEventListener("keydown",o);function o(t){(t.target.classList.contains("icon-close-modal")||t.target.classList.contains("footer-modal")||t.target.classList.contains("close-modal-button"))&&(e(),document.querySelector("body").classList.remove("fix-scroll")),t.key==="Escape"&&(e(),document.querySelector("body").classList.remove("fix-scroll"))}}const c="footer-form-state";localStorage.getItem(c)&&P();d.addEventListener("input",V);function V(e){const o=JSON.parse(localStorage.getItem(c))||{},t=e.target.value;o[e.target.name]=t.trim(),localStorage.setItem(c,JSON.stringify(o))}function P(){const e=JSON.parse(localStorage.getItem(c)),o=e.userEmail,t=e.comments,{userEmail:n,comments:s}=d.elements;n.value=o||"",s.value=t||""}
//# sourceMappingURL=commonHelpers.js.map
