import React, { useState } from 'react'
import axios from 'axios'
import { Layout } from '../components/Layout'
import { FeatureCard } from '../components/FeatureCard'
import { MockupCard } from '../components/MockupCard'
import { useProjects } from '../hooks/useProjects'
import styles from '../styles/Home.module.css'
import { TestimonialCard } from '../components/TestimonialCard'
import { TechCard } from '../components/TechCard'
import { BlogCard } from '../components/BlogCard'
import { ProcessStepCard } from '../components/ProcessStepCard'


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
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#contato" className="btn-primary" style={{ marginRight: '1rem' }}>
          Solicite um Orçamento
        </a>
        <a href="#projetos" className="btn-primary" style={{ background: 'transparent', color: '#FFFFFF', border: '2px solid #FFFFFF' }}>
          Veja Portfólio
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
{/* Blog / Insights */}
<section id="blog" className="section">
  <div className="container">
    <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem' }}>
      Insights & Artigos
    </h2>
    <div className="grid-3">
      {[
        {
          title: '5 Dicas para um Site Ultra-Rápido',
          excerpt: 'Saiba como otimizar imagens, recursos e cache para entregar performance máxima.',
          slug: '5-dicas-para-site-rapido',
          date: 'Jul 1, 2025',
        },
        {
          title: 'Por que investir em Dashboards Power BI',
          excerpt: 'Entenda os benefícios de dashboards interativos para decisões mais assertivas.',
          slug: 'por-que-investir-em-power-bi',
          date: 'Jun 25, 2025',
        },
        {
          title: 'Melhores Práticas em Mobile UX',
          excerpt: 'Confira como criar apps que realmente encantam o usuário em dispositivos móveis.',
          slug: 'melhores-praticas-mobile-ux',
          date: 'Jun 20, 2025',
        },
      ].map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
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
