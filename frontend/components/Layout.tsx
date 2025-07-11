import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Layout.module.css'
import { SEO } from './SEO'

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SEO
        title="Home"
        description="Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer."
        path="/"
      />

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={140} height={40} />
          </div>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            {[
              { href: '#solucoes', label: 'Soluções' },
              { href: '#processo', label: 'Processo' },
              { href: '#depoimentos', label: 'Depoimentos' },
              { href: '#chatbots', label: 'Chatbots' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                scroll={true}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contato" className={styles.btnCTA} scroll={true}>
              Orçamento
            </Link>
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
