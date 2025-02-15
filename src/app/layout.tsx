import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

import type React from "react" // Import React

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Prof. Marianna Lourenço",
  description: "Palestras e Desenvolvimento Profissional",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable}`}>{children}</body>
    </html>
  )
}

