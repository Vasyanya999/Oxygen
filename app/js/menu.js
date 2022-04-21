// function isMobile() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }
function headerMenu() {
  const btnBurgerMenu = document.querySelector('.menu__btn-burger')
  const bodyMenu = document.querySelector('.menu__body')
  if (btnBurgerMenu) {
    btnBurgerMenu.addEventListener('click', () => {
      document.body.classList.toggle('_lock')
      btnBurgerMenu.classList.toggle('_active')
      bodyMenu.classList.toggle('_active')
    })
  }
  const mediaQuery = '(min-width:779.999px)';
  const mediaQueryList = window.matchMedia(mediaQuery);
  mediaQueryList.addEventListener('change', () => {
    if (mediaQueryList.matches) {
      document.body.classList.remove('_lock')
      btnBurgerMenu.classList.remove('_active')
      bodyMenu.classList.remove('_active')
    }
  })
}
headerMenu()