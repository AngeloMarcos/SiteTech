// frontend/pages/chatbots.tsx
import React from 'react';
import { Layout } from '../components/Layout';
import { SEO }    from '../components/SEO';
import styles     from '../styles/Chatbots.module.css';

export default function ChatbotsPage() {
  return (
    <Layout>
      <SEO
        title="Chatbots"
        description="Chatbots programáveis que atendem seus clientes 24/7 e aumentam sua conversão."
        path="/chatbots"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Chatbots Inteligentes</h1>
        <p className={styles.subtitle}>
          Automatize seu atendimento, capture leads e ofereça suporte imediato com bots configuráveis.
        </p>

        <div className={styles.mockups}>
          <img src="/mockup-bot1.png" alt="Chatbot 1" />
          <img src="/mockup-bot2.png" alt="Chatbot 2" />
          <img src="/mockup-bot3.png" alt="Chatbot 3" />
        </div>

        <a
          href="https://wa.me/5511999999999?text=Olá!%20Quero%20um%20chatbot%20para%20meu%20site."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Quero um Bot
        </a>
      </main>
    </Layout>
  );
}
