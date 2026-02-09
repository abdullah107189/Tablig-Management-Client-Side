// app/[locale]/layout.tsx
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { i18n } from '@/lib/i18n/config'
import { LocaleProvider } from '@/components/locale-provider'
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale as 'en' | 'bn')

  return {
    title: dictionary.app.name,
    description: dictionary.app.description,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale as 'en' | 'bn')

  return (
    <LocaleProvider locale={locale as 'en' | 'bn'} dictionary={dictionary}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 bg-muted/40">
            {children}
          </main>
        </div>
      </div>
    </LocaleProvider>
  )
}