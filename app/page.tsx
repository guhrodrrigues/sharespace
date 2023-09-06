import Feed from '@/components/Feed'

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          AI-Powred Prompts
        </span>
      </h1>
      <p className="text-center mt-5 text-lg text-gray-600 max-w-2xl">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  )
}
