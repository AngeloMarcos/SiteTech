// frontend/components/Layout.tsx
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Layout.module.css'

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>SiteTech</title>
        <meta name="description" content="Sites, Apps, Sistemas e Power BI sob medida" />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={120} height={40} />
          </div>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <Link href="#solucoes">Soluções</Link>
            <Link href="#work">Processo</Link>
            <Link href="#projetos">Portfólio</Link>
            <Link href="#depoimentos">Depoimentos</Link>
            <Link href="#solucoes">Soluções</Link>
           <Link href="#work">Processo</Link>
        <Link href="#depoimentos">Depoimentos</Link>
            <Link href="#contato" className={styles.btnCTA}>Orçamento</Link>
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
