import React, { useState } from 'react'
import axios from 'axios'
import { Layout } from '../components/Layout'
import { FeatureCard } from '../components/FeatureCard'
import { MockupCard } from '../components/MockupCard'
import { useProjects } from '../hooks/useProjects'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { projects, mutate } = useProjects()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'error' | 'success'>('idle')

  const features = [
    {
      icon: '/func-sites.png',
      title: 'Sites Personalizados',
      description: 'Desenvolvemos sites modernos, rápidos e com design exclusivo.',
    },
    {
      icon: '/func-mobile.png',
      title: 'Otimização Mobile',
      description: 'Navegação perfeita em qualquer dispositivo.',
    },
    {
      icon: '/func-paineis.png',
      title: 'Painéis Administrativos',
      description: 'Interfaces intuitivas para gerenciar seu negócio com facilidade.',
    },
    {
      icon: '/func-integracoes.png',
      title: 'Integrações Automatizadas',
      description: 'Conecte sistemas e dados com segurança e agilidade.',
    },
  ]

  const mockups = [
    { src: '/mockup-dashboard.png', title: 'Dashboard Moderno' },
    { src: '/mockup-login.png', title: 'Página de Login' },
    { src: '/mockup-controle.png', title: 'Painel de Controle' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('saving')
    try {
      await axios.post('http://localhost:3001/projects', { title, description })
      setTitle('')
      setDescription('')
      setStatus('success')
      mutate()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Layout>
      {/* Hero */}
      <section id="hero" className={styles.hero}>
        <div className="container grid-2">
          <div>
            <h1>Tecnologia para o futuro do seu negócio</h1>
            <p>Soluções inteligentes com identidade visual e performance sob medida.</p>
            <a href="#contato" className="btn-primary">Solicite um orçamento</a>
          </div>
          <div>
            <img src="/placeholder.png" alt="Mockup" className={styles.heroImg} />
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="features">
        <div className="container grid-4">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      {/* Mockups */}
      <section id="servicos" className="mockups">
        <div className="container grid-3">
          {mockups.map((m) => (
            <MockupCard key={m.title} src={m.src} title={m.title} />
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="features">
        <div className="container">
          <h2 className="center" style={{ marginBottom: '2rem' }}>Projetos</h2>
        </div>
        <div className="container grid-3">
          {projects.map((p) => (
            <div key={p.id} className={styles.projectCard}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contact">
        <div className="container form-container">
          <h2>Fale conosco</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título do projeto"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              rows={4}
              placeholder="Descrição do projeto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" disabled={status === 'saving'}>
              {status === 'saving' ? 'Enviando...' : 'Enviar Projeto'}
            </button>
          </form>
          {status === 'error' && <p className={styles.error}>Erro ao enviar. Tente novamente.</p>}
          {status === 'success' && <p className={styles.success}>Projeto enviado com sucesso!</p>}
        </div>
      </section>
    </Layout>
  )
}
