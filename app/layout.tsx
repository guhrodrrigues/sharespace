import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'

import Header from '@/components/Header'

import Provider from '@/components/Provider'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ShareSpace',
  description:
    'Onde a inspiração se torna colaboração e as ideias se transformam em obras-primas.',
  category: 'developer',
  creator: 'Gustavo Rodrigues',
  authors: [
    { name: 'Gustavo Rodrigues', url: 'https://guhrodrigues.vercel.app' },
  ],
  icons: {
    apple: '/favicon.svg',
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  keywords: [
    'Design',
    'Frontend',
    'Web',
    'Developer',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'TailwindCSS',
    'NextAuth',
    'Mongoose',
    'Brazil',
  ],
  openGraph: {
    description:
      'Onde a inspiração se torna colaboração e as ideias se transformam em obras-primas.',
    images: [
      {
        url: 'https://i.imgur.com/Vw9RwGd.png',
        alt: 'ShareSpace',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'pt-BR',
    siteName: 'ShareSpace',
    title: 'ShareSpace',
    type: 'website',
    url: 'https://sharespacelab.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@guhrdss',
    title: 'Gustavo Rodrigues',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="max-w-6xl w-full px-4 mx-auto min-h-screen">
              <Header />
              {children}
            </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
