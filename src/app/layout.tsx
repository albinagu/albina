import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const grotesk = Space_Grotesk({
  variable: "--font-grotesk-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Albina",
  description: "",
  openGraph: {
    title: "Albina",
    description: "Web developer's portfolio page",
    images: [
      {
        url: "https://bina.is/assets/personal/photo3.png",
        width: 200,
        alt: "my image",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="plausible-analytics"
          defer
          data-domain="bina.is"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={`${grotesk.variable} antialiased bg-white dark:bg-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
