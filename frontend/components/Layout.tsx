import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Layout.module.css'

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>SiteTech</title>
        <meta name="description" content="Soluções tech sob medida" />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={120} height={40} />
          </div>
          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <a href="#hero">Início</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
          </nav>
          <button
            className={styles.toggle}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
