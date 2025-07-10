// frontend/pages/index.tsx
import React, { useState } from 'react'
import axios from 'axios'
import { Layout } from '../components/Layout'
import { FeatureCard } from '../components/FeatureCard'
import { MockupCard } from '../components/MockupCard'
import { ProcessStepCard } from '../components/ProcessStepCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { TechCard } from '../components/TechCard'
import { ContactForm } from '../components/ContactForm'
import { useProjects } from '../hooks/useProjects'
import styles from '../styles/Home.module.css'
import techStyles from '../styles/TechSolutions.module.css'

export default function Home() {
  const { projects, mutate } = useProjects()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'error' | 'success'>('idle')

  const features = [
    { icon: '/func-sites.png',       title: 'Sites Personalizados',   description: 'Sites responsivos, rápidos e alinhados à sua marca.' },
    { icon: '/func-apps.png',        title: 'Aplicativos Móveis',     description: 'Apps nativos e híbridos para iOS e Android.' },
    { icon: '/func-sistemas.png',    title: 'Sistemas Sob Medida',    description: 'Portais e ERPs que otimizam seus processos internos.' },
    { icon: '/func-bi.png',          title: 'Dashboards Power BI',    description: 'Relatórios interativos e insights em tempo real.' },
  ]

  const mockups = [
    { src: '/mockup-dashboard.png', title: 'Dashboard Moderno' },
    { src: '/mockup-login.png',     title: 'Página de Login'     },
    { src: '/mockup-controle.png',  title: 'Painel de Controle'  },
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
      {/* ======= HERO ======= */}
      <section id="hero" className={styles.heroSection}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 className={styles.heroTitle}>
              Infraestrutura Digital para <br/> Seu Negócio
            </h1>
            <p className={styles.heroSubtitle}>
              Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer.
            </p>
            <div className="actions">
              <a href="#contato" className="btn-primary">Solicite Orçamento</a>
              <a href="#solucoes" className="btn-outline">Nossas Soluções</a>
            </div>
          </div>
          <div>
            <img
              src="/mockup-dashboard.png"
              alt="Mockup Dashboard"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* ======= FEATURES ======= */}
      <section id="solucoes" className="section">
        <div className="container">
          <h2 className="center title">Nossas Soluções</h2>
          <div className="grid-4">
            {features.map(f => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======= SOLUÇÕES TECNOLÓGICAS DETALHADAS ======= */}
      <section id="soltec" className={techStyles.sectionTech}>
        <div className="container">
          <div className={techStyles.inner}>
            <h2>Soluções Tecnológicas</h2>

            {/* Sites e Apps */}
            <div className={techStyles.block}>
              <h3>Desenvolvimento de Sites e Aplicativos</h3>
              <p className="subtitle">
                Criamos plataformas digitais robustas e intuitivas, desde websites institucionais e e-commerce
                até aplicativos móveis personalizados, garantindo uma experiência de usuário excepcional e
                performance otimizada.
              </p>
              <ul>
                <li><strong>Websites Responsivos:</strong> Sites que se adaptam a qualquer dispositivo.</li>
                <li><strong>E-commerce:</strong> Lojas virtuais seguras e de alta conversão.</li>
                <li><strong>Aplicativos Mobile:</strong> Soluções nativas e híbridas para iOS e Android.</li>
                <li><strong>Sistemas Web Personalizados:</strong> Ferramentas sob medida para otimizar processos.</li>
              </ul>
            </div>

            {/* Marketing */}
            <div className={techStyles.block}>
              <h3>Marketing Digital Estratégico</h3>
              <p className="subtitle">
                Impulsione sua presença online com estratégias de marketing focadas em resultados.
                Atraia, engaje e converta seu público-alvo com nossas soluções:
              </p>
              <ul>
                <li><strong>SEO:</strong> Aumente sua visibilidade orgânica.</li>
                <li><strong>Campanhas Pagas:</strong> Google Ads, Facebook Ads e mais.</li>
                <li><strong>Redes Sociais:</strong> Engajamento de comunidades online.</li>
                <li><strong>Marketing de Conteúdo:</strong> Conteúdo relevante que educa e converte.</li>
              </ul>
            </div>

            {/* Chatbot */}
            <div className={techStyles.block}>
              <h3>Chatbot e Automação de Atendimentos</h3>
              <p className="subtitle">
                Revolucione seu atendimento com chatbots inteligentes no WhatsApp:
              </p>
              <img
                src="/banner-chatbot.png"
                alt="Chatbot no WhatsApp"
                className={techStyles.mockupImg}
              />
              <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                <FeatureCard icon="/icon-247.png"           title="Atendimento 24/7"        description="Seu negócio nunca para!"/>
                <FeatureCard icon="/icon-personalizado.png" title="Experiência Personalizada" description="Aprendizado contínuo."/>
                <FeatureCard icon="/icon-leads.png"         title="Qualificação de Leads"  description="Foque nos prospects certos."/>
              </div>
              <div className="center" style={{ marginTop: '1.5rem' }}>
                <a href="https://wa.me/5511999999999" className="btn-primary">
                  🚀 Quero meu Chatbot Agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= BI & ANALYTICS ======= */}
      <section id="bi" className="section">
        <div className="container">
          <h2 className="center title">Análise de Dados &amp; BI</h2>
          <p className={styles.subtitle}>
            Transforme dados brutos em insights acionáveis com nossas soluções de análise de dados e Power BI.
            Visualize seu negócio em dashboards claros e tome decisões estratégicas em tempo real.
          </p>
          <ul className={styles.featureList}>
            <li><strong>Dashboards Interativos:</strong> Monitoramento de KPIs em tempo real.</li>
            <li><strong>Relatórios Personalizados:</strong> Insights estratégicos para decisões certeiras.</li>
            <li><strong>Modelagem de Dados:</strong> Estruturação eficiente para análises precisas.</li>
            <li><strong>Consultoria em BI:</strong> Setup e otimização de Power BI.</li>
          </ul>
        </div>
      </section>

      {/* ======= PROCESSO ======= */}
      <section id="processo" className="section darkSection">
        <div className="container">
          <h2 className="center title">Nosso Processo em 4 Passos</h2>
          <div className="grid-4">
            <ProcessStepCard icon="/icons/brief.svg"   title="Briefing"       description="Entendemos suas necessidades."/>
            <ProcessStepCard icon="/icons/design.svg"  title="Design"         description="Protótipos interativos."/>
            <ProcessStepCard icon="/icons/develop.svg"title="Desenvolvimento"description="Código com performance."/>
            <ProcessStepCard icon="/icons/launch.svg" title="Lançamento"     description="Deploy e monitoramento."/>
          </div>
        </div>
      </section>

      {/* ======= DEPOIMENTOS ======= */}
      <section id="depoimentos" className="section">
        <div className="container">
          <h2 className="center title">O que dizem nossos clientes</h2>
          <div className="grid-3">
            <TestimonialCard avatarUrl="/clientes/1.jpg" quote="Transformou nossa presença online!" author="Ana Silva"    role="CEO, Empresa X"/>
            <TestimonialCard avatarUrl="/clientes/2.jpg" quote="Insights que dobraram nossa receita." author="Bruno Costa"   role="CFO, Startup Y"/>
            <TestimonialCard avatarUrl="/clientes/3.jpg" quote="App essencial para engajamento."     author="Carla Pereira" role="CMO, Marca Z"/>
          </div>
        </div>
      </section>

      {/* ======= STACK TECNOLÓGICA ======= */}
      <section id="stack" className="section darkSection">
        <div className="container">
          <h2 className="center title">Nossa Stack Tecnológica</h2>
          <div className="grid-4">
            {['react','nextjs','nestjs','typeorm','powerbi','nodejs','postgres','docker'].map(name => (
              <TechCard
                key={name}
                name={name.toUpperCase()}
                logo={`/tech-${name}.png`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======= CONTATO ======= */}
      <section id="contato" className="section">
        <div className="container">
          <h2 className="center title">Fale Conosco</h2>
          <ContactForm />
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos os direitos reservados.</p>
      </footer>
    </Layout>
  )
}
