import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.png'
import styles from './Layout.module.css'
export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Head>
        <title>AngloTech</title>
        <meta name="description" content="Soluções tech sob medida" />
      </Head>
      <header className={styles.header}>
        <div className="container flex">
          <Image src={logo} alt="AngloTech" width={120} height={40} />
          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <a href="#hero">Início</a>
            <a href="#solucoes">Soluções</a>
            <a href="#servicos">Serviços</a>
            <a href="#precos">Preços</a>
            <a href="#contato" className={styles.btnSignIn}>Contato</a>
          </nav>
          <button className={styles.menuToggle} onClick={() => setOpen(!open)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className="container center">
          <div className={styles.socialIcons}>
            <Image src="/icon-instagram.png" alt="Instagram" width={24} height={24}/>
            <Image src="/icon-linkedin.png" alt="LinkedIn" width={24} height={24}/>
            <Image src="/icon-whatsapp.png" alt="WhatsApp" width={24} height={24}/>
          </div>
          <p>© 2025 AngloTech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
