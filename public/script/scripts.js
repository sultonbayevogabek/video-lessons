document.addEventListener('DOMContentLoaded', () => {
    const feedbacks = [
        {
            author: `Nurbek`,
            text: `Assalomu alaykum. Men Fulfil Educationga grand taqdim qilgani uchun 
            rahmat aytaman. Bundan keyingi ishlarida omad tilayman.`
        },
        {
            author: `Javlonbek Xabibullayev`,
            text: `Darslar sifati a'lo, maydalab tushuntirilgan. Ustozning ham dars o'tishlari ajoyib. Maydalab, donalab tushuntirib o'tganlar.  Alloh rozi bo'lsin.`
        },
        {
            author: `Mujgan`,
            text: `Frontend kursi juda ham tushunarli qilib tushuntirilgan ekan. Menga bu kursni berganingiz uchun rahmat kattakon.
                    Alloh rozi bo'lsin😊`
        },
        {
            author: `Jamshid Xudoyberdiyev`,
            text: `Darslar sifati yaxshi. Ustozning tushuntirishi ham yaxshi.
                    Aniq tartib bor darslar o'tilish jarayonida. React kursini hali boshlamadim.`
        },
        {
            author: `Abdulaziz`,
            text: `Dars zo'r olib borilgan. Qadamma-qadam o'rgatib borilgan. Men ham o'zimga anchagina narsa o'rganib oldim shu darsliklardan. 
            Sizlarga ham katta rahmat`
        },
        {
            author: `Zokirjon`,
            text: `Assalomu alaykum. Yaxshi bilimlarga ega bo'ldim bu kurs orqali.
                    Haqiqatda kursga gap bo'lishi mumkin emas. Kursni maksimal holatda tushuntirib bergan.`
        },
        {
            author: `Dilshodbek`,
            text: `Kursni to'liq tugata olmadim. O'z ishimdan vaqt ajratib, o'rganmoqchi edim. Eplolmadim, lekin menga yoqdi.
                    Sizga katta rahmat. Iloji boricha fikrimni bildirib o'taman. Kattakon rahmat.`
        },
        {
            author: `Nozima`,
            text: `Assalomu alaykum. Avvalo dars uchun katta rahmat.
                    Darsni mayldalab, hammasini chaynab og'zimizga solib qo'ygansiz qaysidir ma'noda.
                    Faqat yutish qolgan. Menga yoqqan.`
        },
        {
            author: `Doniyor`,
            text: `Kurs juda zo'r. Ustozga gap yo'q. 0 dan o'rgangan odam ham 
            bemalol videolarni ko'rib, qat'iyat bilan o'rgansa, albatta ishlab keta oladi.
             Sizga ham katta rahmat, ishlaringizga omad 👍👍`
        },
        {
            author: `Asliddin`,
            text: `Assalomu alaykum. Rahmat avvalambor. Men o'zi Backend sohasidaman, lekin sizning Frontend boʻyicha bergan darslaringiz juda manfaatli boʻldi
             va hozirda ham ba'zi darslarni takrorlab turaman.`
        },
        {
            author: `Guzal Anvarovna`,
            text: `Rosti menga bu Frontend onlayn kursi juda ham yoqdi. O'zi anchadan buyon o'rganmoqchi bo'lib yurgandim,
                    ammo mablag'im yo'q edi. Rosti bu kursni grant sifatida taqdim etdingiz, rahmat yana bir bor.`
        },
        {
            author: `JarvisKL`,
            text: `Ustoz Og'abek Sultonbayevga alohida rahmat, 
            kurs juda ham zo'r va qiziqarli, manfaatli bo'lgan. Kursni tugatgandan keyin ham katta rejalarim bor. 
            ReactJS va nextJS ni ham o'rganib, biron-bir IT kompaniyaga stajyor bo'lib yollanmoqchiman.`
        },
        {
            author: `Sabina Muxammadiyeva`,
            text: `Frontend darslariga keladigan bo'lsak, ular juda ham foydali darslar. Oson, sodda tilda tushuntirilgan. 
            Ayniqsa, dars o'rtasidagi takrorlash darslari menga juda ham foydali bo'lyapti. Video darslarni 1 martagina emas, 
            balki qayta-qayta ko'ryapman️`
        },
        {
            author: `Zokir`,
            text: `Menga kurs juda ham yoqdi ustozga gap boʻlishi mumkinmas. Har bir element, detalga eʼtibor berib
                    oʻtganlar.
                    Juda sodda, chiroyli holatda tushuntirish berib oʻtganlar. Men bu kursdan bir narsaga amin boʻldimki,
                    agar
                    kursga qatnashayotgan har bir tinglovchining oʻzida xohish-istak boʻlsa, bu kursdan bemalol
                    yetarlicha
                    bilimga ega boʻladi.`
        },
        {
            author: `Hayotillo Numonov`,
            text: `Fulfil Education admini bilan tanishib undan Og'abek Sultonboyevni darslarini olganimdan
                    keyin hayotim butunlay o'zgardi. Og'abek ham juda chiroyli va tushunarli dars berar ekan. Hayotim
                    butunlay o'zgardi, IT ga bo'lgan qiziqishim ming chandon ortdi, savollarga va Youtube darsliklarga
                    hojat qolmadi.`
        },
    ]
    const courseProjects = [
        {
            img: 'img/course-projects/1.png',
            title: 'EDCT',
            description: 'Photoshop maketdan HTML va CSS yordamida maket verstka qilinadi'
        },
        {
            img: 'img/course-projects/2.png',
            title: 'Az-Pharm',
            description: 'Az-Pharm online dorixonasi uchun landing sahifa'
        },
        {
            img: 'img/course-projects/3.png',
            title: 'Bella Olonje',
            description: 'HTML va CSS yordamida verstka qilinadi'
        },
        {
            img: 'img/course-projects/4.png',
            title: 'Smart English Official',
            description: `Smart English Official o'quv markazi uchun landing sahifa`
        },
        {
            img: 'img/course-projects/5.png',
            title: 'Login sahifasi',
            description: 'Form elementlaridan foydalangan holatda verstka qilinadi'
        },
        {
            img: 'img/course-projects/6.png',
            title: 'Shiplace',
            description: 'HTML va CSS yordamida verstka qilinadi'
        },
        {
            img: 'img/course-projects/7.png',
            title: `Amanatrade platformasining ro'yxatdan o'tish uchun sahifasi`,
            description: 'Form elementlaridan foydalangan holatda verstka qilinadi'
        },
        {
            img: 'img/course-projects/8.png',
            title: 'Burger House',
            description: 'HTML va CSS yordamida verstka qilinadi'
        },
        {
            img: 'img/course-projects/9.png',
            title: 'Flower Store',
            description: 'Photoshop maketdan HTML va CSS yordamida maket verstka qilinadi'
        },
        {
            img: 'img/course-projects/10.png',
            title: 'Yoga',
            description: 'Photoshop maketdan HTML va CSS yordamida maket verstka qilinadi'
        },
        {
            img: 'img/course-projects/11.png',
            title: 'Musicology',
            description: 'Photoshop maketdan HTML va CSS yordamida maket verstka qilinadi'
        },
        {
            img: 'img/course-projects/12.jpg',
            title: 'Kinolar sayti',
            description: 'JavaScript yordamida kichik kinolar katalogi sayti'
        }
    ]

    const feedbackCardsWrapper = document.querySelector('.feedback__slider .splide__list')
    const courseProjectsCardsWrapper = document.querySelector('.course-projects__slider .splide__list')

    feedbacks.forEach(feedback => {
        feedbackCardsWrapper.innerHTML += `
          <li class="splide__slide">
            <div class="feedback__card">
                <div class="feedback__author">
                    <div class="feedback__icon">
                        <img src="img/feedback/chat.svg" alt="man chat icon" loading="lazy">
                    </div>

                    <div class="feedback__name">${feedback.author}</div>
                </div>
                <p class="feedback__text">${feedback.text}</p>
            </div>
          </li>
        `
    })

    courseProjects.forEach(project => {
        courseProjectsCardsWrapper.innerHTML += `
            <li class="splide__slide">
                <div class="course-projects__card">
                    <div class="course-projects__img skeleton">
                        <img src="${project.img}" alt="${project.title} image" loading="lazy">
                    </div>
                    <h3 class="course-projects__title">${project.title}</h3>
                    <p class="course-projects__text">${project.description}</p>
                </div>
            </li>
        `
    })

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


    new Splide('.course-projects__slider', {
            type: 'loop',
            speed: 1000,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 3,
            perMove: 1,
            gap: '20px',
            pagination: false,
            breakpoints: {
                '1366': {
                    perPage: 3,
                    arrows: false
                },
                '970': {
                    perPage: 2,
                    gap: '10px',
                    arrows: false,
                },
                '560': {
                    perPage: 1,
                    arrows: false,
                }
            }
        }).mount()

    new Splide('.feedback__slider', {
        type: 'loop',
        speed: 1000,
        autoplay: true,
        arrows: true,
        interval: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        perPage: 3,
        perMove: 1,
        gap: '20px',
        pagination: false,
        breakpoints: {
            '1366': {
                perPage: 3,
                arrows: false
            },
            '970': {
                perPage: 2,
                gap: '10px',
                arrows: false,
            },
            '560': {
                perPage: 1,
                arrows: false,
            }
        }
    }).mount()
})
