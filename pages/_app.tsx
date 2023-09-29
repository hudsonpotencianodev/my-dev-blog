import Layout from '@/components/layout'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: ['500'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
