// frontend/components/ProcessStepCard.tsx
import React from 'react'
import styles from './ProcessStepCard.module.css'

export interface ProcessStep {
  icon: string    // ex: '/icons/brief.svg'
  title: string
  description: string
}

export function ProcessStepCard({ icon, title, description }: ProcessStep) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  )
}
