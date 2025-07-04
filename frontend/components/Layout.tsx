// frontend/components/Layout.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Layout.module.css'
import { SEO } from './SEO'

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Metadados SEO */}
      <SEO
        title="Home"
        description="Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer."
        path="/"
      />

      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={120} height={40} />
          </div>

          {/* Navegação */}
          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <Link href="#solucoes">Soluções</Link>
            <Link href="#work">Processo</Link>
            <Link href="#depoimentos">Depoimentos</Link>
            <Link href="/chatbots">Chatbots</Link>
            <Link href="#contato" className={styles.btnCTA}>
              Orçamento
            </Link>
          </nav>

          {/* Toggle para mobile */}
          <button
            className={styles.toggle}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.main}>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
