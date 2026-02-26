const counters=document.querySelectorAll("[data-target]");

counters.forEach(counter=>{
  const target=+counter.getAttribute("data-target");
  let count=0;
  const increment=target/300;

  function update(){
    if(count<target){
      count+=increment;
      counter.innerText=Math.ceil(count);
      setTimeout(update,16);
    }else{
      counter.innerText=target;
    }
  }
  update();
});

// ====================================== second section ============================================

const nxmSection = document.querySelector(".nxm-health-sec");

window.addEventListener("scroll",()=>{
  const trigger = window.innerHeight * 0.8;
  const top = nxmSection.getBoundingClientRect().top;

  if(top < trigger){
    nxmSection.classList.add("nxm-visible");
  }
});

const nxmDots = document.querySelectorAll(".nxm-dot");
const nxmCards = document.querySelectorAll(".nxm-review-card");

nxmDots.forEach((dot,index)=>{
  dot.addEventListener("click",()=>{
    nxmDots.forEach(d=>d.classList.remove("active"));
    nxmCards.forEach(c=>c.classList.remove("active"));

    dot.classList.add("active");
    nxmCards[index].classList.add("active");
  });
});

// ====================================== second section ============================================
// ====================================== third section ============================================

const hadiSlides = document.querySelectorAll(".hadi-slide");
let hadiIndex = 0;

function hadiSlider(){
  hadiSlides.forEach(slide=>slide.classList.remove("active"));
  hadiIndex++;
  if(hadiIndex >= hadiSlides.length){
    hadiIndex = 0;
  }
  hadiSlides[hadiIndex].classList.add("active");
}

setInterval(hadiSlider,6000);

// ====================================== fourth section ============================================

// TYPEWRITER ANIMATION LEFT TEXT
const insuranceTitle = document.querySelector('.insurance-title');
const text = insuranceTitle.innerText;
insuranceTitle.innerText = '';
insuranceTitle.style.opacity = 1;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    insuranceTitle.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 70); // ~3s
  }
}

// SCROLL ANIMATION FOR CARDS
let cardsAnimated = false;

function animateCards() {
  if (cardsAnimated) return;
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, i) => {
    card.style.transform = 'translateY(50px)';
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = 'all 1s ease';
      card.style.transform = 'translateY(0)';
      card.style.opacity = 1;
    }, i * 200);
  });
  cardsAnimated = true;
}

// TRIGGER ANIMATIONS ON SCROLL
window.addEventListener('scroll', () => {
  const section = document.querySelector('.insurance-section');
  const rect = section.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100) {
    typeWriter();
    animateCards();
  }
});

// ====================================== last section ============================================ 

// SCROLL ANIMATION
const finalLeft = document.querySelector('.final-left-box');
const finalCenter = document.querySelector('.final-center-box');
const finalRight = document.querySelector('.final-right-box');

function animateFinalSection() {
  const section = document.querySelector('.clinic-final-section');
  const rect = section.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100) {
    finalLeft.style.transition = 'all 1.5s ease';
    finalLeft.style.opacity = 1;
    finalLeft.style.transform = 'translateY(0)';

    finalCenter.style.transition = 'all 1.5s ease 0.2s';
    finalCenter.style.opacity = 1;
    finalCenter.style.transform = 'translateY(0)';

    finalRight.style.transition = 'all 1.5s ease 0.4s';
    finalRight.style.opacity = 1;
    finalRight.style.transform = 'translateY(-50%) scale(1)'; 
  }
}

window.addEventListener('scroll', animateFinalSection);

// ====================================== last section ============================================  