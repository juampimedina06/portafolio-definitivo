'use client'
import { useRouter, usePathname } from "next/navigation"
import StaggeredMenu, { type StaggeredMenuItem } from "@/components/ui/ReactBits/StaggeredMenu/StaggeredMenu"
import { getLenis } from "@/components/ui/SmoothScroll"

const menuItems = [
  { label: 'Inicio', ariaLabel: 'Go to home page', link: '/#inicio' },
  { label: 'Sobre mi', ariaLabel: 'Go to about page', link: '/#sobre-mi' },
  { label: 'Experiencia', ariaLabel: 'Go to experience page', link: '/#experiencia' },
  { label: 'Skills', ariaLabel: 'Go to skills page', link: '/#skills' },
  { label: 'Proyectos', ariaLabel: 'Go to projects page', link: '/#proyectos' },
  { label: 'Formaciones', ariaLabel: 'Go to formations page', link: '/#formaciones' },
  { label: 'Contacto', ariaLabel: 'Go to contact page', link: '/#contacto' },
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/juampimedina06' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/' },
];

const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (item: StaggeredMenuItem) => {
    const isOnHome = pathname === "/"
    const isHashLink = item.link.startsWith("/#")

    if (isOnHome && isHashLink) {
      const id = item.link.slice(2)
      const el = document.getElementById(id)
      const lenis = getLenis()
      if (el && lenis) {
        lenis.scrollTo(el, { duration: 1.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        return
      }
    }

    router.push(item.link)
  }

  return (
    <header className="fixed z-[100] w-full h-16">
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#e2f8fd"
        openMenuButtonColor="#22D3EE"
        changeMenuColorOnOpen={true}
        colors={['#000000ff', '#000000ff']}
        accentColor="#22D3EE"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
        onItemClick={handleNavClick}
      />
    </header>
  )
}

export default NavBar