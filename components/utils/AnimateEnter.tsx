'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import { AnimateEnterProps } from '@/types'

const animation = {
  hide: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

export function AnimateEnter({ children, className }: AnimateEnterProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        className={className}
        initial="hide"
        animate="show"
        variants={animation}
        transition={{ delay: 0.3 }}
      >
        {children}
      </m.main>
    </LazyMotion>
  )
}
