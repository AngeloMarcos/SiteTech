// frontend/components/Layout.tsx
import React, { useState } from 'react'
import styles from './Layout.module.css'

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="SiteTech" width={120} height={40} />
          </div>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <a href="#hero">Início</a>
            <a href="#solucoes">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#chatbots">Chatbots</a>
            <a href="#contato" className={styles.btnCTA}>Orçamento</a>
          </nav>

          <button
            className={styles.toggle}
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
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
