import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Layout } from '../../components/Layout'
import { SEO } from '../../components/SEO'
import styles from '../../styles/Admin.module.css'
import { Lead, useLeads } from '../../hooks/useLeads'

export default function AdminPage({ initialLeads }: { initialLeads: Lead[] }) {
  // usamos SWR para revalidação em tempo real
  const { leads, isLoading, isError } = useLeads()

  const data = leads.length > 0 ? leads : initialLeads

  return (
    <Layout>
      <SEO
        title="Admin"
        description="Painel de gestão de leads"
        path="/admin"
      />

      <main className={styles.main}>
        <h1>Leads Recebidos</h1>

        {isLoading && <p>Carregando...</p>}
        {isError   && <p>Erro ao carregar leads.</p>}

        {!isLoading && data.length === 0 && <p>Não há leads.</p>}

        {data.length > 0 && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Mensagem</th>
                <th>Criado em</th>
              </tr>
            </thead>
            <tbody>
              {data.map(lead => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name || '—'}</td>
                  <td>{lead.email || '—'}</td>
                  <td>{lead.message}</td>
                  <td>{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </Layout>
  )
}

// Carrega leads no servidor para SEO/SSG
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<Lead[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/leads`
  )
  return {
    props: { initialLeads: res.data }
  }
}
