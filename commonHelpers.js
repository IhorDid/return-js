import{A as f,S as u,N as p,a as y,i as l}from"./assets/vendor-0e5f7713.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const c={openModalBtn:document.querySelector(".head-btn"),closeModalBtn:document.querySelector(".modal-close-btn"),modal:document.querySelector(".mobile-modal"),titleBtn:document.querySelector(".nav-title-btn"),menuItems:document.querySelectorAll(".menu-item"),modalLinks:document.querySelectorAll(".modal-menu-item a"),closeButton:document.querySelector(".modal-close-btn")};function d(){document.body.classList.remove("no-scroll")}function g(){c.openModalBtn.addEventListener("click",e),c.closeModalBtn.addEventListener("click",e);function e(){c.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}}function v(){c.titleBtn.addEventListener("click",function(){c.menuItems[0].classList.contains("active")?e():n()}),document.addEventListener("click",function(o){o.target.closest(".nav-title-btn")||e()});function e(){c.menuItems.forEach(function(o,s){setTimeout(()=>{o.style.opacity=0,setTimeout(()=>{o.classList.remove("active")},500)},(c.menuItems.length-s)*50)})}function n(){c.menuItems.forEach(function(o,s){setTimeout(()=>{o.style.opacity=0,o.classList.add("active"),setTimeout(()=>{o.style.opacity=1},50)},s*150)})}}function L(){document.addEventListener("DOMContentLoaded",function(){c.modalLinks.forEach(e=>{e.addEventListener("click",n=>{d()})}),c.closeButton.addEventListener("click",()=>{d()})})}v();g();L();document.addEventListener("DOMContentLoaded",function(){new f(" .accordion-about-container")});new u(".swiper",{slidesPerView:1,spaceBetween:800,keyboard:{enabled:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"}});function h(){document.querySelectorAll(".faq").forEach(n=>{const o=n.querySelector(".faq-question-container"),s=n.querySelector(".faq-answer-container"),t=o.querySelector(".faq-list-btn");o.addEventListener("click",function(){n.classList.toggle("active"),s.style.maxHeight?(s.style.maxHeight=null,t.classList.remove("rotated")):(s.style.maxHeight=s.scrollHeight+"px",t.classList.add("rotated"))})})}document.addEventListener("DOMContentLoaded",h);const b=document.querySelector(".js-list");async function w(){return(await fetch("https://portfolio-js.b.goit.study/api/reviews")).json()}w().then(e=>{b.insertAdjacentHTML("afterbegin",e.map(({author:n,avatar_url:o,review:s})=>`
    <div class="swiper-slide">
        <img src="${o}" alt="${n}" />
        <h2>${n}</h2>
        <p>${s}</p>
    </div>`).join("")),E.update()});const E=new u(".swiper",{slidesPerView:4,modules:[p],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});async function q(e){return await y.post("https://portfolio-js.b.goit.study/api/requests",e)}const a=document.querySelector(".footer-modal");a.addEventListener("click",m);document.addEventListener("keydown",m);function m(e){(e.target.classList.contains("icon-close-modal")||e.target.classList.contains("footer-modal")||e.target.classList.contains("close-modal-button"))&&e.currentTarget.classList.add("is-hidden"),e.key==="Escape"&&a.classList.add("is-hidden")}const M=document.querySelector(".footer-form");M.addEventListener("submit",S);async function S(e){e.preventDefault();const{userEmail:n,comments:o}=e.currentTarget.elements;if(!n.value.trim()||!o.value.trim()){l.error({message:"Your query does not contain any letters!",position:"topRight"});return}const s={email:n.value,comment:o.value};try{const t=await q(s);a.classList.remove("is-hidden"),console.log(t)}catch(t){l.error({message:t.message,position:"topRight"})}finally{e.target.reset()}}
//# sourceMappingURL=commonHelpers.js.map
