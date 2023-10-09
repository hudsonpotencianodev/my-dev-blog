import Layout from '@/components/layout'
import '@/styles/global.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: ['500'], subsets: ['latin'] })
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </main>
  )
}
