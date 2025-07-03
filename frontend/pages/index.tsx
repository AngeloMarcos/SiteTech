import React, { useState } from 'react'
import axios from 'axios'
import { Layout } from '../components/Layout'
import { FeatureCard } from '../components/FeatureCard'
import { MockupCard } from '../components/MockupCard'
import { useProjects } from '../hooks/useProjects'
import styles from '../styles/Home.module.css'
import { TestimonialCard } from '../components/TestimonialCard'
import { TechCard } from '../components/TechCard'
import { ProcessStepCard } from '../components/ProcessStepCard'
import { ContactForm } from '../components/ContactForm'

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
            <img src="/Mockup.png" alt="Mockup" className={styles.heroImg} />
          </div>
        </div>
      </section>
      
{/* Como Trabalhamos */}
<section id="work" className="section">
  <div className="container">
    <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>
      Como Trabalhamos
    </h2>
    <div className="grid-4">
      {[
        {
          icon: '/icons/brief.svg',
          title: 'Briefing',
          description: 'Entendemos suas necessidades e objetivos.',
        },
        {
          icon: '/icons/design.svg',
          title: 'Design',
          description: 'Criamos identidade visual e protótipos interativos.',
        },
        {
          icon: '/icons/develop.svg',
          title: 'Desenvolvimento',
          description: 'Codificamos com as melhores práticas e performance.',
        },
        {
          icon: '/icons/launch.svg',
          title: 'Lançamento',
          description: 'Publicamos e monitoramos para garantir sucesso.',
        },
      ].map((step) => (
        <ProcessStepCard
          key={step.title}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  </div>
</section>
      <section id="hero" className={styles.heroSection}>
  <div className="container grid-2" style={{ alignItems: 'center' }}>
    <div>
      <h1 className={styles.heroTitle}>
        Infraestrutura Digital para <br /> Seu Negócio
      </h1>
      <p className={styles.heroSubtitle}>
        Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer.
      </p>
     
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
      {/* Soluções */}
      <section id="solucoes" className="section">
        <div className="container">
          <h2 className="center" style={{ marginBottom: '2rem', color: '#FFFFFF' }}>
            Nossas Soluções
          </h2>
          <div className="grid-4">
            <FeatureCard
              icon="/func-sites.png"
              title="Desenvolvimento de Sites"
              description="Sites responsivos, rápidos e alinhados à sua marca."
            />
            <FeatureCard
              icon="/func-apps.png"
              title="Aplicativos Móveis"
              description="Apps nativos e híbridos para iOS e Android."
            />
            <FeatureCard
              icon="/func-sistemas.png"
              title="Sistemas Sob Medida"
              description="Portais e ERPs que otimizam seus processos internos."
            />
            <FeatureCard
              icon="/func-bi.png"
              title="Dashboards Power BI"
              description="Relatórios interativos e insights em tempo real."
            />
          </div>
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

      {/* Como Trabalhamos */}
      <section id="work" className="section">
        <div className="container">
          <h2 className="center" style={{ marginBottom: '2rem', color: '#FFFFFF' }}>
            Do briefing ao resultado: Nosso processo em 4 passos
          </h2>

          <div className="grid-2" style={{ gap: '3rem' }}>
            {/* 1. Descoberta & Planejamento */}
            <div>
              <h3 style={{ color: '#1D4ED8' }}>1. Descoberta & Planejamento</h3>
              <p style={{ color: '#CBD5E1' }}>
                Entendemos profundamente seu negócio, público e metas através de workshops,
                mapeamento de requisitos e definição de roadmap – inclusive avaliando dados
                existentes para projetos de Power BI.
              </p>
            </div>

            {/* 2. Design & Prototipagem */}
            <div>
              <h3 style={{ color: '#1D4ED8' }}>2. Design & Prototipagem</h3>
              <p style={{ color: '#CBD5E1' }}>
                Criamos wireframes navegáveis e protótipos de alta fidelidade em Figma, validando
                usabilidade e ajustando identidade visual para garantir uma experiência intuitiva.
              </p>
            </div>

            {/* 3. Desenvolvimento Full-Stack */}
            <div>
              <h3 style={{ color: '#1D4ED8' }}>3. Desenvolvimento Full-Stack</h3>
              <p style={{ color: '#CBD5E1' }}>
                Transformamos o design em aplicações escaláveis: Next.js/React no frontend,
                NestJS/TypeORM no backend, CI/CD, testes automatizados e deploy seguro.
              </p>
            </div>

            {/* 4. Análise de Dados & Power BI */}
            <div>
              <h3 style={{ color: '#1D4ED8' }}>4. Análise de Dados & Power BI</h3>
              <p style={{ color: '#CBD5E1' }}>
                Conectamos fontes diversas, modelamos e limpamos dados, e criamos dashboards
                interativos no Power BI para que você tome decisões embasadas em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Depoimentos */}
      <section id="depoimentos" className="section">
        <div className="container">
          <h2 className="center" style={{ marginBottom: '2rem', color: '#FFFFFF' }}>
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
          <section id="stack" className="section">
  <div className="container">
    <h2
      className="center"
      style={{ marginBottom: '2rem', color: '#FFFFFF', fontSize: '2.5rem' }}
    >
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
      ].map((tech) => (
        <TechCard key={tech.name} name={tech.name} logo={tech.logo} />
      ))}
    </div>
  </div>
</section>
{/* Contato */}
<section id="contato" className="section">
  <div className="container">
    <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>
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
  className={styles.whatsappButton}
>
  Chat no WhatsApp
</a>

    </Layout>
  )
}
