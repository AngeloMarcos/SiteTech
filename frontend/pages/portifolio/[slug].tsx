// frontend/pages/portifolio/[slug].tsx

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Layout } from '../../styles/Layout'
import { SEO } from '../../components/SEO'
import styles from './Portfolio.module.css'

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
        <Link href="/portifolio">← Voltar ao Portfólio</Link>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        path={`/portifolio/${project.slug}`}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>

        <Link href="/portifolio" className={styles.backLink}>
          ← Voltar ao Portfólio
        </Link>
      </main>
    </Layout>
  )
}

// MOCK local, substitui a chamada da API
const mockProjects: Project[] = [
  {
    slug: 'projeto-exemplo',
    title: 'Projeto Exemplo',
    description: 'Este é um projeto de exemplo estático.'
  }
]

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockProjects.map((p) => ({
    params: { slug: p.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string }
  const project = mockProjects.find((p) => p.slug === slug)

  return {
    props: {
      project: project || null
    },
    revalidate: 60
  }
}
