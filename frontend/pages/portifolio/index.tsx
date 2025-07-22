// frontend/pages/portfolio/index.tsx

import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { Layout } from '../../styles/Layout'
import { SEO } from '../../components/SEO'
import styles from './Portfolio.module.css';

export interface Project {
  title: string
  description: string
  slug: string
}

export default function PortfolioPage({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      {/* Metadados SEO */}
      <SEO
        title="Portfólio"
        description="Veja alguns dos nossos projetos de sites e sistemas sob medida."
        path="/portfolio"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Portfólio</h1>
        <div className={styles.grid}>
          {projects.map(p => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className={styles.card}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get<Project[]>(
    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/projects`
  )
  return {
    props: {
      projects: res.data
    },
    revalidate: 60, // opcional: regenera a cada 60s
  }
}
