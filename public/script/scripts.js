document.addEventListener('DOMContentLoaded', () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
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

    const menu = document.querySelector('#mobile-menu'),
        menuOpenBtn = document.querySelector('#mobile-menu-open'),
        menuCloseBtn = document.querySelector('#mobile-menu-close'),
        menuLinks = document.querySelectorAll('.mobile-menu__li a')

    let backdrop = document.createElement('div')
    backdrop.classList.add('backdrop')

    function openMenu() {
        document.body.style.overflow = 'hidden';
        menu.style.right = '0';
        document.body.append(backdrop)
    }

    function closeMenu() {
        document.body.style.overflow = '';
        menu.style.right = '-100vw';
        setTimeout(() => {
            document.body.removeChild(backdrop)
        }, 300)
    }

    menuOpenBtn.addEventListener('click', openMenu)
    menuCloseBtn.addEventListener('click', closeMenu)
    backdrop.addEventListener('click', closeMenu)

    menuLinks.forEach(a => {
        a.addEventListener('click', closeMenu)
    })

    const enrollCourseButtons = document.querySelectorAll('.enroll-course'),
        enrollCourseForm = document.querySelector('.enroll-backdrop'),
        enrollCourseClose = document.querySelector('.enroll-close')

    function closeEnrollCourse() {
        enrollCourseForm.classList.remove('open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0';
    }

    enrollCourseButtons.forEach(button => {
        button.addEventListener('click', () => {
            enrollCourseForm.classList.add('open');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollbarWidth + 'px';
        })
    })

    enrollCourseClose.addEventListener('click', (e) => {
        closeEnrollCourse()
    })

    enrollCourseForm.addEventListener('click', (e) => {
        if (e.target.classList.contains('enroll-backdrop')) {
            closeEnrollCourse()
        }
    })

    document.addEventListener('keyup', e => {
        if (e.key === 'Escape') {
            closeEnrollCourse()
        }
    })
})
