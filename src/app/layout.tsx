import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
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
        url: "./assets/personal/photo3.png",
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
      <body className={`${grotesk.variable} antialiased`}>{children}</body>
    </html>
  )
}
