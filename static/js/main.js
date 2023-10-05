//Burger

const burgerMenu = document.querySelector('.header__burger',);

if (burgerMenu) {
  const navBody = document.querySelector('.header__nav');
  burgerMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    navBody.classList.toggle('_active');
    
  });
}

//Sound

const soundOn = document.querySelector('.main-content__btn-sound',);
const video = document.querySelector('video');

soundOn.addEventListener('click', function (e) {
  if(video.muted) {
    video.muted = false 
  } else {
    video.muted = true
  }
  
  
});

// popup

const toggleBodyScroll = () => {
  document.body.classList.toggle('lock');
};

const popupLinks = document.querySelectorAll('.popup_link');
const popup = document.getElementById('popup');

if (popupLinks.length > 0) {
  popupLinks.forEach((singleLink) => {
    singleLink.addEventListener('click', () => {
      popup.classList.toggle('open');
      toggleBodyScroll();
    });
  });
}

const popupClose = document.querySelector('.close-popup');

popupClose.addEventListener('click', function (e) {
  popup.classList.toggle('open');
  toggleBodyScroll();
});

//tabs

const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItem = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let curentBtn = item
        let tabId = curentBtn.getAttribute('data-tab')
        let curentTab = document.querySelector(tabId)
        
            curentBtn.classList.toggle('active')
            curentTab.classList.toggle('active')

            // tabsBtn.forEach(function (item) {
            //     item.classList.remove('active')
            // })
    
            // tabsItem.forEach(function (item) {
            //     item.classList.remove('active')
            // })
    
    
            // curentBtn.classList.add('active')
            // curentTab.classList.add('active')
        
    })
}) 

document.querySelector('.tabs__nav-btn').click()

const secTabsBtn = document.querySelectorAll('.tabs__nav-btn_2')



secTabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let secCurentBtn = item

        secTabsBtn.forEach(function (item) {
                item.classList.remove('active')
        })

        secCurentBtn.classList.add('active')
    })
})





// Swiper


var swiper = new Swiper(".mySwiper", {
    
});


//Popup

// const popupLinks = document.querySelectorAll('.popup_link')
// const body = document.querySelector('body')
// const lockPadding = document.querySelectorAll('.lock-padding')

// let unlock = true

// const timeout = 800

// if (popupLinks.length > 0) {
//     for (let i = 0; i < popupLinks.length; i++) {
//         const popupLink = popupLinks[i]
//         popupLink.addEventListener('click', function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '')
//             const curentPopup = document.getElementById(popupName)
//             popupOpen(curentPopup)
//             e.preventDefault()
//         })
//     }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup')
// if (popupCloseIcon.length > 0) {
//     for (let i = 0; i < popupCloseIcon.length; i++) {
//         const el = popupCloseIcon[i]
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'))
//             e.preventDefault()
//         })
//     }
// }

// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open')
//         if (popupActive) {
//             popupClose(popupActive, false)
//             // } else  {
//             //     bodyLock()
//             // }
//             curentPopup.classList.add('open')
//             curentPopup.addEventListener('click', function (e) {
//                 if (!e.target.closest('.popup__content')) {
//                     popupClose(e.target.closest('.popup'))
//                 }
//         })
//     }
// }

// function popupClose(popupActive, doUnlock = true) {
//         if (unlock) {
//             popupActive.classList.remove('open')
//             if (doUnlock) {
//                 bodyUnLock()
//             }
//         }
// }

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('wrapper').offsetWidth + 'px'
//     if (lockPadding.length > 0) {
//         for (let i = 0; i < lockPadding.length; i++) {
//             const el = lockPadding[i]
//             el.style.paddingRight = lockPaddingValue
//         }
//     }
//     body.style.paddingRight = lockPaddingValue
//     body.classList.add('lock')

//     unlock = false
//     setTimeout(function () {
//         unlock = true
//     }, timeout)
// }

// function bodyUnLock() {
//     setTimeout(function () {
//         if (lockPadding.length > 0) {
//             for (let i = 0; i < lockPadding.length; i++) {
//                 const el = lockPadding[i]
//                 el.style.paddingRight = '0px'
//             }
//         }
//         body.style.paddingRight = '0px'
//         body.classList.remove('lock')
//     }, timeout)

//     unlock = false
//     setTimeout(function () {
//         unlock = true
//     }, timeout)
// }

// document.addEventListener('keydown', function (e) {
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open')
//         popupClose(popupActive)
//     }
// })
