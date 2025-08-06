import { Button } from '@fa/components/ui/button'
import { ActiveLink } from './active-link'

const NAV_LINKS = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

export const Navbar = () => {
  return (
    <nav className='flex items-center gap-6'>
      {NAV_LINKS.map((route) => {
        return (
          <ActiveLink key={route.label} href={route.href}>
            {route.label}
          </ActiveLink>
        )
      })}

      <Button variant='secondary'>Começar</Button>
    </nav>
  )
}
