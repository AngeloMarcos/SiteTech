// frontend/components/ContactForm.tsx
import React, { useState } from 'react'
import axios from 'axios'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle'|'saving'|'error'|'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('saving')
    try {
      await axios.post('http://localhost:3001/projects', { title, description })
      setTitle('')
      setDescription('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título do projeto"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        rows={4}
        placeholder="Descrição do projeto"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary" disabled={status==='saving'}>
        {status === 'saving' ? 'Enviando...' : 'Enviar Projeto'}
      </button>
      {status === 'error' && <p className={styles.error}>Erro ao enviar. Tente novamente.</p>}
      {status === 'success' && <p className={styles.success}>Projeto enviado com sucesso!</p>}
    </form>
  )
}
