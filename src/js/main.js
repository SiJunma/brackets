// Sliders
if(document.querySelector('#categories .categories-mobile__list')) {
    let categorySlider = new Splide( '#categories .categories-mobile__list', {
      type   : 'slide',
      drag   : 'free',
      autoWidth: true,
      perPage: 1,
      gap: '0px',
      trimSpace: true,
      updateOnMove: false,
      mediaQuery: 'min',
      destroy: false,
      pagination: false,

      breakpoints: {
        991: {
          destroy: true
        }
      }
    });
  
    categorySlider.mount();
}

if(document.querySelector('#bottomSliderTop .slider-bottom__list')) {
    let topSlider = new Splide( '#bottomSliderTop .slider-bottom__list', {
      type   : 'slide',
      drag   : true,
      gap: '10px',
      perPage: 1,
      fixedWidth: false,
      pagination: false,
      mediaQuery: 'min',
  
      breakpoints: {

        768: {
          fixedWidth: '275px',
          perPage: 2,
          gap: '20px'
        },
  
        992: {
          fixedWidth: '347px',
          gap: '10px',
        },
  
        1200: {
          fixedWidth: false,
          perPage: 3,
          gap: '30px',
        },

        1400: {
          fixedWidth: false,
          perPage: 3,
          gap: '30px',
        }
      }
    } );
    
    topSlider.mount();
}

// To Top
document.querySelectorAll('.topButton__link').forEach(el => {
    el.onclick = function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
  }}
);
  
// Sticky top
function sticky(elem) {
  let navbar = document.querySelector(elem);
  if(navbar) {
      window.onscroll = function() {stickyElement()};
          function stickyElement() {
              if (navbar && window.pageYOffset >= 10) {
              navbar.classList.add("sticky")
              } else {
              navbar.classList.remove("sticky");
              }
          }
  }
}
sticky('#navFixed');

//btn open popup
function btnPopup (btn) {
    let btns = document.querySelectorAll(btn);
    btns.forEach((el) => {
        el.addEventListener('click', function(evt) {
            evt.preventDefault();
            let target = evt.target.getAttribute('data-target');
            if(document.querySelector(target)) {
                document.querySelector(target).classList.add('show');
            }
            document.body.classList.add('fixed');
        });
    });
}
btnPopup('.js-modal-open');

//modal-backdrop close popup
function backdrop(modal) {
  let modals = document.querySelectorAll(modal);
  modals.forEach((el) => {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        let target = evt.target.closest('.modal.show');
        if(target) {
            target.classList.remove('show');
        }
        document.body.classList.remove('fixed');
    });
  });
}

// Modals timeOut
function showModal(modalId, modalTimeout) {
  setTimeout(function () {
    document.getElementById(modalId).classList.add('show');
    document.body.classList.add('fixed');
  }, modalTimeout);
};

//btn-close close popup
function btnClose(btn) {
  let btns = document.querySelectorAll(btn);
  btns.forEach((el) => {
      el.addEventListener('click', function(evt) {
          evt.preventDefault();
          let target = evt.target.closest('.modal.show');
          if(target) {
              target.classList.remove('show');
          }
          document.body.classList.remove('fixed');
      });
  });
  backdrop('.modal-backdrop');
};

showModal('mainModal', '5000');
btnClose('.btn-close');