import React from 'react'
import Image from 'next/image'
import styles from './FeatureCard.module.css'

export interface FeatureProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={title} width={56} height={56} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
