// frontend/pages/portfolio/[slug].tsx

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Layout } from '../../styles/Layout'
import { SEO } from '../../components/SEO'

export interface Project {
  title: string
  description: string
  slug: string
}

interface Props {
  project: Project | null
}

export default function ProjectDetail({ project }: Props) {
  const router = useRouter()

  // Fallback loading
  if (router.isFallback) {
    return (
      <Layout>
        <p>Carregando...</p>
      </Layout>
    )
  }

  if (!project) {
    return (
      <Layout>
        <p>Projeto não encontrado.</p>
        <Link href="/portfolio">← Voltar ao Portfólio</Link>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* SEO */}
      <SEO
        title={project.title}
        description={project.description}
        path={`/portfolio/${project.slug}`}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>

        {/* Você pode incorporar imagens ou detalhes extras aqui */}

        <Link href="/portfolio" className={styles.backLink}>
          ← Voltar ao Portfólio
        </Link>
      </main>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
  const res = await axios.get<Project[]>(`${API}/projects`)
  const paths = res.data.map((p) => ({
    params: { slug: p.slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string }
  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
  try {
    const res = await axios.get<Project>(`${API}/projects/${slug}`)
    return { props: { project: res.data }, revalidate: 60 }
  } catch {
    return { props: { project: null } }
  }
}
