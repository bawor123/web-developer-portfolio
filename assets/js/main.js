/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/* ===== PROJECT DETAIL MODAL ===== */
const projectItems = document.querySelectorAll('.work__img');
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

function openModal({imgSrc, title, desc, link}){
    if(!modal) return;
    modalImg.src = imgSrc || '';
    modalImg.alt = title || '';
    modalTitle.textContent = title || '';
    modalDesc.textContent = desc || '';
    modalLink.href = link || '#';
    modal.classList.add('show-modal');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(){
    if(!modal) return;
    modal.classList.remove('show-modal');
    modal.setAttribute('aria-hidden', 'true');
}

projectItems.forEach(item =>{
    item.addEventListener('click', (e) =>{
        e.preventDefault();
        const img = item.querySelector('img');
        const imgSrc = img ? img.src : '';
        const title = item.dataset.title || '';
        const desc = item.dataset.desc || '';
        const link = item.dataset.link || '#';
        openModal({imgSrc, title, desc, link});
    })
});

if(modalClose) modalClose.addEventListener('click', closeModal);
if(modalOverlay) modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) =>{
    if(e.key === 'Escape') closeModal();
});
