document.addEventListener('DOMContentLoaded', () => {
   function drawTickerBg() {
      const tickerBg = document.querySelector('.ticker__bg');
      const width = window.innerWidth;
      const height = window.innerWidth * 0.092 / 2;
      tickerBg.style.cssText = `
         border-top: ${height / 2}px solid transparent;
         border-left: ${width / 2}px solid transparent;
         border-bottom: ${height / 2}px solid #FFFFFF;
         border-right: ${width / 2}px solid #FFFFFF;
      `
   }

   drawTickerBg();
   window.addEventListener('resize', drawTickerBg);

   const tickerTrack = document.querySelector('.ticker__track');
   for (let i = 0; i < 100; i++) {
      tickerTrack.innerHTML += `<div class="ticker__item">Qabul ochiq</div>`
   }

   const items = document.querySelectorAll(".accordion__header");

   function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');

      if (itemToggle === 'true') {
         this.setAttribute('aria-expanded', 'false');
         return;
      }

      this.setAttribute('aria-expanded', 'true');
   }

   items.forEach(item => item.addEventListener('click', toggleAccordion));

   const menu = document.querySelector('#menu'),
      menuOpenBtn = document.querySelector('#menu-open'),
      menuCloseBtn = document.querySelector('#menu-close')

   let backdrop = document.createElement('div')
   backdrop.classList.add('backdrop')

   function openMenu() {
      document.body.style.overflow = 'hidden';
      menu.style.right = '0';

      setTimeout(() => {
         document.body.append(backdrop)
      }, 100)
   }

   function closeMenu() {
      document.body.style.overflow = '';
      menu.style.right = '-100vh';

      setTimeout(() => {
         document.body.removeChild(backdrop)
      }, 400)
   }

   menuOpenBtn.addEventListener('click', openMenu)
   menuCloseBtn.addEventListener('click', closeMenu)
   backdrop.addEventListener('click', closeMenu)
})
