// frontend/components/BlogCard.tsx
import React from 'react'
import Link from 'next/link'
import styles from './BlogCard.module.css'

export interface BlogPost {
  title: string
  excerpt: string
  slug: string     // ex: '5-dicas-para-site-rapido'
  date: string     // ex: 'Jul 1, 2025'
}

export function BlogCard({ title, excerpt, slug, date }: BlogPost) {
  return (
    <div className={styles.card}>
      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      {/* Novo uso: Link sem <a> interno */}
      <Link href={`/blog/${slug}`} className={styles.readMore}>
        Leia mais →
      </Link>
    </div>
  )
}
