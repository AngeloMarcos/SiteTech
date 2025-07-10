import React, { useState } from 'react'
import axios from 'axios'
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
  const { projects, mutate } = useProjects()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'error' | 'success'>('idle')

  const features = [
    { icon: '/func-sites.png', title: 'Sites Personalizados', description: 'Sites responsivos e alinhados à sua marca.' },
    { icon: '/func-apps.png', title: 'Apps Móveis', description: 'Soluções nativas e híbridas para iOS e Android.' },
    { icon: '/func-sistemas.png', title: 'Sistemas Web', description: 'Portais e ERPs para seus processos internos.' },
    { icon: '/func-bi.png', title: 'Power BI', description: 'Dashboards e relatórios interativos em tempo real.' },
  ]

  const mockups = [
    { src: '/mockup-dashboard.png', title: 'Dashboard Moderno' },
    { src: '/mockup-login.png', title: 'Tela de Login' },
    { src: '/mockup-controle.png', title: 'Painel de Controle' },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('saving')
    try {
      await axios.post('http://localhost:3001/projects', { title, description })
      setTitle(''); setDescription('')
      setStatus('success'); mutate()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className={styles.heroSection}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 className={styles.heroTitle}>
              Infraestrutura Digital para <br/> Seu Negócio
            </h1>
            <p className={styles.heroSubtitle}>
              Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer.
            </p>
            <a href="#contato" className={styles['btn-primary']} style={{ marginRight: '1rem' }}>
              Solicite Orçamento
            </a>
            <a href="#solucoes" className={styles['btn-outline']}>
              Nossas Soluções
            </a>
          </div>
          <div>
            <img
              src="/mockup-dashboard.png"
              alt="Mockup Dashboard"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <section id="solucoes" className="section">
        <div className="container">
          <h2 className={styles.title}>Nossas Soluções</h2>
          <p className={styles.subtitle}>Descubra como podemos transformar seu negócio</p>
          <div className="grid-4">
            {features.map(f => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Soluções Detalhadas */}
      <section id="soltec" className="section" style={{ background: '#0F172A', color: '#FFF' }}>
        <div className="container">
          <h2 className={styles.title}>Soluções Tecnológicas</h2>

          <div className={styles['tech-block']}>
            <h3>Desenvolvimento de Sites e Apps</h3>
            <p className={styles.subtitle}>
              Criamos plataformas digitais robustas e intuitivas, desde websites institucionais e
              e-commerce até aplicativos móveis personalizados.
            </p>
            <ul className={styles['feature-list']}>
              <li><strong>Websites Responsivos:</strong> Se adaptam a qualquer dispositivo.</li>
              <li><strong>E-commerce:</strong> Lojas virtuais seguras e de alta conversão.</li>
              <li><strong>Apps Mobile:</strong> Soluções nativas e híbridas para iOS/Android.</li>
              <li><strong>Sistemas Web:</strong> Ferramentas sob medida para seus processos.</li>
            </ul>
          </div>

          <div className={styles['tech-block']}>
            <h3>Marketing Digital Estratégico</h3>
            <p className={styles.subtitle}>
              Impulsione sua presença online com campanhas pagas, SEO, redes sociais e conteúdo.
            </p>
            <ul className={styles['feature-list']}>
              <li><strong>SEO:</strong> Aumente sua visibilidade orgânica.</li>
              <li><strong>Ads:</strong> Google & Facebook Ads para resultados rápidos.</li>
              <li><strong>Redes Sociais:</strong> Engajamento de comunidades.</li>
              <li><strong>Conteúdo:</strong> Artigos e posts que educam e convertem.</li>
            </ul>
          </div>

          <div className={styles['tech-block']}>
            <h3>Chatbot & Automação</h3>
            <p className={styles.subtitle}>
              Revolucione seu atendimento com IA no WhatsApp:
            </p>
            <img
              src="/banner-chatbot.png"
              alt="Chatbot WhatsApp"
              style={{ width: '100%', borderRadius: 8, marginBottom: '1rem' }}
            />
            <div className="grid-3">
              <FeatureCard icon="/icon-247.png" title="24/7" description="Seu negócio nunca para."/>
              <FeatureCard icon="/icon-personalizado.png" title="Personalização" description="Chats que aprendem."/>
              <FeatureCard icon="/icon-leads.png" title="Qualificação" description="Direcione leads antes."/>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <a href="https://wa.me/5511999999999" className={styles['btn-primary']}>
                🚀 Quero meu Chatbot!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BI */}
      <section id="bi" className="section">
        <div className="container">
          <h2 className={styles.title}>Análise de Dados & BI</h2>
          <p className={styles.subtitle}>
            Transforme dados em insights acionáveis com Power BI e relatórios sob medida.
          </p>
          <ul className={styles['feature-list']}>
            <li><strong>Dashboards:</strong> KPIs em tempo real.</li>
            <li><strong>Relatórios:</strong> Apoio à decisão estratégica.</li>
            <li><strong>Modelagem:</strong> Dados organizados e prontos.</li>
            <li><strong>Consultoria:</strong> Otimização de BI.</li>
          </ul>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="section" style={{ background: '#0F172A', color: '#FFF' }}>
        <div className="container">
          <h2 className={styles.title}>Nosso Processo em 4 Passos</h2>
          <div className="grid-4">
            <ProcessStepCard icon="/icons/brief.svg" title="Briefing" description="Mapeamos suas metas." />
            <ProcessStepCard icon="/icons/design.svg" title="Design" description="Protótipos no Figma." />
            <ProcessStepCard icon="/icons/develop.svg" title="Dev" description="Código escalável." />
            <ProcessStepCard icon="/icons/launch.svg" title="Deploy" description="Publicação e testes." />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="section">
        <div className="container">
          <h2 className={styles.title}>O que dizem nossos clientes</h2>
          <div className="grid-3">
            <TestimonialCard avatarUrl="/clientes/1.jpg" quote="Transformou nossa presença!" author="Ana Silva" role="CEO" />
            <TestimonialCard avatarUrl="/clientes/2.jpg" quote="Insights que dobraram receita." author="Bruno Costa" role="CFO" />
            <TestimonialCard avatarUrl="/clientes/3.jpg" quote="App essencial ao engajar." author="Carla Pereira" role="CMO" />
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="section" style={{ background: '#0F172A', color: '#FFF' }}>
        <div className="container">
          <h2 className={styles.title}>Nossa Stack Tecnológica</h2>
          <div className="grid-4">
            {['react','nextjs','nestjs','typeorm','powerbi','nodejs','postgres','docker'].map(name => (
              <TechCard key={name} name={name.toUpperCase()} logo={`/tech-${name}.png`} />
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section">
        <div className="container">
          <h2 className={styles.title}>Fale Conosco</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos direitos reservados.</p>
      </footer>
    </Layout>
  )
}
