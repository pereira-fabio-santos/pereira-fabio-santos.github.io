import { Geist, Geist_Mono } from "next/font/google"
import { Typography } from 'antd'
import "./globals.css"

const { Title } = Typography
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fabio Pereira"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div style={{ display: 'flex' }}>

          <div style={{ padding: 20, width: 400 }}>

            <Link href="/">
              <h1>Fabio Pereira dos Santos</h1>
            </Link>

            <Link href="/cv">
              <h3>Currículo</h3>
            </Link>

            <Link href="/projects">
              <h3>Projetos</h3>
            </Link>

          </div>

          {children}
        </div>

      </body>

    </html>
  );
}
