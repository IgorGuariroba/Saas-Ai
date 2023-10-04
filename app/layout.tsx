import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ClerkProvider} from "@clerk/nextjs";
import {ModalProvider} from "@/components/modal-provider/modal-provider";
import {ToasterProvider} from "@/components/toast-provider/toast-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TecnoMente',
  description: 'TecnoMento foi pensado em te apoiar nas novas descobertas do mundo conectado a Mente mestra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="pt-BR">
        <body className={inter.className}>
        <ModalProvider />
        <ToasterProvider />
        {children}
        </body>
        </html>
      </ClerkProvider>
  )
}
