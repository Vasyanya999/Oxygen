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

  const menuLinksElements = document.querySelectorAll('[data-goto]');
  if (menuLinksElements.length > 0) {
    menuLinksElements.forEach(menuLink => {
      menuLink.addEventListener("click", (event) => {
        onMenuLinkClick(menuLink, event)
      });
    });
    function onMenuLinkClick(menuLink, event) {

      const gotoSectionElement = document.querySelector(menuLink.dataset.goto);

      if (btnBurgerMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        btnBurgerMenu.classList.remove("_active");
        bodyMenu.classList.remove("_active");
      }

      if (menuLink.dataset.goto && gotoSectionElement) {
        const decorationTopIndent = 50;

        const gotoSectionValue = gotoSectionElement.getBoundingClientRect().top + window.pageYOffset - decorationTopIndent;

        window.scrollTo({
          top: gotoSectionValue,
          behavior: "smooth"
        });
        event.preventDefault();
      }
    }
  }
}
headerMenu()

