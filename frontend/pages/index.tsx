// frontend/pages/index.tsx
import React from 'react'
import { Layout } from '../components/Layout'
import { FeatureCard } from '../components/FeatureCard'
import { ProcessStepCard } from '../components/ProcessStepCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { TechCard } from '../components/TechCard'
import { ContactForm } from '../components/ContactForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  const features = [
    { icon: '/func-sites.png',    title: 'Sites Personalizados',   description: 'Sites responsivos e alinhados à sua marca.' },
    { icon: '/func-apps.png',     title: 'Apps Móveis',           description: 'Soluções nativas e híbridas para iOS e Android.' },
    { icon: '/func-sistemas.png', title: 'Sistemas Web',          description: 'Portais e ERPs para seus processos internos.' },
    { icon: '/func-bi.png',       title: 'Power BI',              description: 'Dashboards e relatórios interativos em tempo real.' },
  ]

  const processSteps = [
    { icon: '/icons/brief.svg',   title: 'Briefing',        description: 'Mapeamos suas metas e necessidades.' },
    { icon: '/icons/design.svg',  title: 'Design',          description: 'Protótipos interativos no Figma.' },
    { icon: '/icons/develop.svg', title: 'Desenvolvimento', description: 'Código escalável e performático.' },
    { icon: '/icons/launch.svg',  title: 'Lançamento',      description: 'Deploy e monitoramento contínuo.' },
  ]

  const chatbotCards = [
    { icon: '/icons/bot-24-7.svg',          title: '24/7 Disponível',          description: 'Nunca perca um cliente: respostas automáticas o tempo todo.' },
    { icon: '/icons/bot-personalizado.svg', title: 'Personalização',           description: 'Fluxos sob medida para o seu negócio.' },
    { icon: '/icons/bot-leads.svg',         title: 'Qualificação de Leads',   description: 'Identifique e classifique potenciais clientes.' },
  ]

  const techStack = ['react','nextjs','nestjs','typeorm','powerbi','nodejs','postgres','docker']

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className={styles.heroSection}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 className={styles.heroTitle}>
              Infraestrutura Digital<br/>para Seu Negócio
            </h1>
            <p className={styles.heroSubtitle}>
              Sites, Apps, Sistemas e Dashboards Power BI sob medida para você crescer.
            </p>
            <div className={styles.heroCtas}>
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

      {/* NOSSAS SOLUÇÕES */}
      <section id="solucoes" className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Nossas Soluções</h2>
          <p className={styles.sectionSubtitle}>Descubra como podemos transformar seu negócio</p>
          <div className="grid-4">
            {features.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="section alternate">
        <div className="container">
          <h2 className={styles.sectionTitle}>Nosso Processo em 4 Passos</h2>
          <div className="grid-4">
            {processSteps.map(s => <ProcessStepCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* CHATBOTS */}
      <section id="chatbots" className="section alternate">
        <div className="container">
          <h2 className={styles.sectionTitle}>Chatbot & Automação</h2>
          <p className={styles.sectionSubtitle}>
            Revolucione seu atendimento com bots inteligentes no WhatsApp.
          </p>
          <div className="grid-3">
            {chatbotCards.map(c => <FeatureCard key={c.title} {...c} />)}
          </div>
          <div className="center" style={{ marginTop: '2rem' }}>
            <a
              href="https://wa.me/5511999999999"
              className="btn-secondary large"
            >
              🚀 Solicitar meu Chatbot
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>O que dizem nossos clientes</h2>
          <div className="grid-3">
            <TestimonialCard
              avatarUrl="/clientes/1.jpg"
              quote="Transformou nossa presença online!"
              author="Ana Silva"
              role="CEO"
            />
            <TestimonialCard
              avatarUrl="/clientes/2.jpg"
              quote="Insights que dobraram nossa receita."
              author="Bruno Costa"
              role="CFO"
            />
            <TestimonialCard
              avatarUrl="/clientes/3.jpg"
              quote="App essencial para engajar usuários."
              author="Carla Pereira"
              role="CMO"
            />
          </div>
        </div>
      </section>

      {/* STACK TECNOLÓGICA */}
      <section id="stack" className="section alternate">
        <div className="container">
          <h2 className={styles.sectionTitle}>Nossa Stack Tecnológica</h2>
          <div className="grid-4">
            {techStack.map(name => (
              <TechCard key={name} name={name.toUpperCase()} logo={`/tech-${name}.png`} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Fale Conosco</h2>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos os direitos reservados.</p>
      </footer>
    </Layout>
  )
}
