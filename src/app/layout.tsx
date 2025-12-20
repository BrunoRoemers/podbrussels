import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "pod.brussels - Free subdomains for community projects in Brussels",
  description:
    "Free subdomains for community projects in Brussels. Claim your pod.brussels subdomain for your neighborhood committee, volunteer initiative, or collective project.",
  keywords: [
    "Brussels",
    "community",
    "subdomain",
    "neighborhood",
    "volunteer",
    "collective",
    "grassroots",
    "pod.brussels",
  ],
  openGraph: {
    title: "pod.brussels - Free subdomains for community projects",
    description:
      "Free subdomains for community projects in Brussels. Build your community's online home.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
