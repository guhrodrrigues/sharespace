import { ProfileProps } from '@/types'

import { AnimateEnter } from '@/components/utils/AnimateEnter'

import { PromptCard } from './PromptCard'

export default function Profile({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) {
  return (
    <AnimateEnter>
      <section className="w-full max-w-2xl">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          <span>{name}</span> Perfil
        </h1>
        <p className="mt-5 text-muted-foreground text-lg lg:text-xl maw-w-2xl">
          {desc}
        </p>

        <div className="mt-10 space-y-6 py-8 gap-6">
          {data.map((post: any) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </div>
      </section>
    </AnimateEnter>
  )
}
