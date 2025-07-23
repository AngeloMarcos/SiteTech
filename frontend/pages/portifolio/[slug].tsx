import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string }
  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

  try {
    const res = await axios.get<Project>(`${API}/projects/${slug}`)
    return { props: { project: res.data } }
  } catch (error: any) {
    console.warn('Erro ao buscar project no getServerSideProps:', error.message)
    return { props: { project: null } }
  }
}
