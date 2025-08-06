import { Header } from '@fa/components/header/header'
import { PropsWithChildren } from 'react'
import { Footer } from '../footer/footer'

type LayoutProps = PropsWithChildren

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='relative flex min-h-screen flex-col dark'>
      <Header />

      <main className='flex-1 flex flex-col mb-12'>{children}</main>

      <Footer />
    </div>
  )
}
