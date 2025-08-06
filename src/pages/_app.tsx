import { Layout } from '@fa/components/layout/layout'
import { useIsomorphicLayoutEffect } from '@fa/hooks/useIsomorphicLayoutEffect'
import '@fa/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  variable: '--font-geist-sans',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  useIsomorphicLayoutEffect(() => {
    document.body.style.setProperty('--font-family', roboto.style.fontFamily)
    document.body.className = roboto.className
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
