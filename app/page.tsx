import { Feed } from '@/components/ui/Feed'

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center">
        Descubra & compartilhe <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          suas ideias com prompts
        </span>
      </h1>
      <p className="text-center mt-5 text-lg text-muted-foreground max-w-2xl">
        ShareSpace — onde a inspiração se torna colaboração e as ideias se
        transformam em obras-primas.
      </p>

      <Feed />
    </section>
  )
}
