'use client'

import { m } from 'framer-motion'

import { Feed } from '@/components/ui/Feed'

const animation = {
  hide: {
    y: 8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

export function HomeContent() {
  return (
    <m.section
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      className="w-full flex flex-col items-center justify-center"
    >
      <m.h1
        className="text-5xl md:text-6xl font-extrabold text-center"
        variants={animation}
      >
        Descubra & compartilhe <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          suas ideias com prompts
        </span>
      </m.h1>
      <m.p
        className="text-center mt-5 text-lg text-muted-foreground max-w-2xl"
        variants={animation}
      >
        ShareSpace — onde a inspiração se torna colaboração e as ideias se
        transformam em obras-primas.
      </m.p>

      <Feed />
    </m.section>
  )
}
