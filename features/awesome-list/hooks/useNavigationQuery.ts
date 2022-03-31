export const sideNavigationEffect = () => {
  const useNavigationQuery = () => {
    const width =		window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth

    if (width < 500) return

    const main = document?.querySelector('.main-content') as HTMLElement
    const sideNavigation = document?.querySelector(
      '.side-navigation'
    ) as HTMLElement

    if (!main || !sideNavigation) return

    if (sideNavigation.classList.contains('active')) {
      main.classList.add('active')
    } else {
      main.classList.remove('active')
    }
  }
  return { useNavigationQuery }
}
