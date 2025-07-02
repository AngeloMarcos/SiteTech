// frontend/components/Layout.tsx
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
        <meta name="description" content="Sites, Apps, Sistemas e Power BI sob medida" />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={120} height={40} />
          </div>

          {/* Navegação Principal */}
          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <a href="#solucoes">Soluções</a>
            <a href="#work">Processo</a>
            <a href="#projetos">Portfólio</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#blog">Blog</a>
            <a href="#contato" className={styles.btnCTA}>Orçamento</a>
          </nav>

          {/* Botão Mobile */}
          <button
            className={styles.toggle}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className={styles.main}>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
