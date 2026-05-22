'use client'
import StaggeredMenu from "@/components/ui/ReactBits/StaggeredMenu/StaggeredMenu"

const menuItems = [
  { label: 'Inicio', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Sobre mi', ariaLabel: 'Go to about page', link: '/#about' },
  { label: 'Proyectos', ariaLabel: 'Go to projects page', link: '/#projects' },
  { label: 'Experiencia', ariaLabel: 'Go to experience page', link: '/#experience' },
  { label: 'Skills', ariaLabel: 'Go to skills page', link: '/#skills' },
  { label: 'Formaciones', ariaLabel: 'Go to formations page', link: '/#formations' },
  { label: 'Contacto', ariaLabel: 'Go to contact page', link: '/#contact' },

];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/juampimedina06' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/' },
];

const NavBar = () => {
  return (
    <header className="fixed z-[100] w-full h-16">
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        /* Button color — matches portfolio cyan palette */
        menuButtonColor="#e2f8fd"
        openMenuButtonColor="#22D3EE"
        changeMenuColorOnOpen={true}
        /* Sweep layer colors — deep navy to match dark glass panel */
        colors={['#000000ff', '#000000ff']}
        accentColor="#22D3EE"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </header>
  )
}

export default NavBar