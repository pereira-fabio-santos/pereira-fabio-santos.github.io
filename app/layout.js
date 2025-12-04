import { Geist, Geist_Mono } from "next/font/google"
import { Button, Row, Typography } from 'antd'
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

        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>

          <Link href="/" style={{ marginLeft: '5%' }}>
            <h1>Home</h1>
          </Link>

          <Link href="/cv" style={{ marginLeft: '5%' }}>
            <h3>Currículo</h3>
          </Link>

          <Link href="/projects" style={{ marginLeft: '5%' }}>
            <h3>Projetos</h3>
          </Link>

          {children}

        </Row>

      </body>

    </html>
  );
}
