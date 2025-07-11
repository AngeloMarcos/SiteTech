// frontend/components/Layout.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Ajuste o caminho abaixo para 'components', não 'styles'
import styles from '../components/Layout.module.css'  

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={140} height={40} />
          </div>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <Link href="#solucoes"><a className={styles.navLink}>Soluções</a></Link>
            <Link href="#processo"><a className={styles.navLink}>Processo</a></Link>
            <Link href="#chatbots"><a className={styles.navLink}>Chatbot</a></Link>
            <Link href="#depoimentos"><a className={styles.navLink}>Depoimentos</a></Link>
            <Link href="#contato"><a className={styles.btnCTA}>Orçamento</a></Link>
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
