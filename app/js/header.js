function headerScroll() {
  let header = document.querySelector('.header')
  const mediaQuery = window.matchMedia('(min-width: 779.999px)')
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 40 && mediaQuery.matches) {
      header.classList.add('_active')
    } else {
      header.classList.remove('_active')
    }
  })
}

headerScroll()