// frontend/pages/index.tsx
import React from 'react'
import { Layout } from '../components/Layout'
import { FeatureCard } from '../components/FeatureCard'
import { MockupCard } from '../components/MockupCard'
import { useProjects } from '../hooks/useProjects'
import { ProcessStepCard } from '../components/ProcessStepCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { TechCard } from '../components/TechCard'
import { ContactForm } from '../components/ContactForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { projects } = useProjects()

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

  return (
    <Layout>
      {/* Hero */}
      <section id="hero" className={styles.heroSection}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 className={styles.heroTitle}>
              Infraestrutura Digital para <br /> Seu Negócio
            </h1>
            <p className={styles.heroSubtitle}>
              Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="#contato" className="btn-primary">
                Solicite um Orçamento
              </a>
            </div>
          </div>
          <div>
            <img
              src="/mockup-dashboard.png"
              alt="Mockup de Dashboard"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <section id="solucoes" className="section">
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem', fontSize: '2.5rem' }}>
            Nossas Soluções
          </h2>
          <div className="grid-4">
            {features.map(f => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Mockups */}
      <section id="servicos" className="mockups section">
        <div className="container grid-3">
          {mockups.map(m => (
            <MockupCard key={m.title} {...m} />
          ))}
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section id="work" className="section">
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem', fontSize: '2.5rem' }}>
            Como Trabalhamos
          </h2>
          <div className="grid-4">
            {[
              { icon: '/icons/brief.svg', title: 'Briefing', description: 'Entendemos suas necessidades e objetivos.' },
              { icon: '/icons/design.svg', title: 'Design', description: 'Criamos identidade visual e protótipos interativos.' },
              { icon: '/icons/develop.svg', title: 'Desenvolvimento', description: 'Codificamos com as melhores práticas e performance.' },
              { icon: '/icons/launch.svg', title: 'Lançamento', description: 'Publicamos e monitoramos para garantir sucesso.' },
            ].map(step => (
              <ProcessStepCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="section">
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem', fontSize: '2.5rem' }}>
            O que dizem nossos clientes
          </h2>
          <div className="grid-3">
            <TestimonialCard
              avatarUrl="/clientes/cliente1.jpg"
              quote="O novo site transformou nossa presença online. Suporte e entrega impecáveis!"
              author="Ana Silva"
              role="CEO, Empresa X"
            />
            <TestimonialCard
              avatarUrl="/clientes/cliente2.jpg"
              quote="O dashboard em Power BI nos deu insights que dobraram nossa receita."
              author="Bruno Costa"
              role="CFO, Startup Y"
            />
            <TestimonialCard
              avatarUrl="/clientes/cliente3.jpg"
              quote="O app móvel que eles desenvolveram foi essencial para engajar nossos usuários."
              author="Carla Pereira"
              role="CMO, Marca Z"
            />
          </div>
        </div>
      </section>

      {/* Stack Tecnológica */}
      <section id="stack" className="section">
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem', fontSize: '2.5rem' }}>
            Nossa Stack Tecnológica
          </h2>
          <div className="grid-4">
            {[
              { name: 'React', logo: '/tech-react.png' },
              { name: 'Next.js', logo: '/tech-nextjs.png' },
              { name: 'NestJS', logo: '/tech-nestjs.png' },
              { name: 'TypeORM', logo: '/tech-typeorm.png' },
              { name: 'Power BI', logo: '/tech-powerbi.png' },
              { name: 'Node.js', logo: '/tech-nodejs.png' },
              { name: 'PostgreSQL', logo: '/tech-postgres.png' },
              { name: 'Docker', logo: '/tech-docker.png' },
            ].map(tech => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section">
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem', fontSize: '2.5rem' }}>
            Fale Conosco
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Botão WhatsApp fixo */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappButton"
      >
        Chat no WhatsApp
      </a>
    </Layout>
  )
}
