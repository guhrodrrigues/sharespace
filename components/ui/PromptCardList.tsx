import { PromptListProps } from '@/types'

import { PromptCard } from './PromptCard'

export function PromptCardList({ data, handleTagClick }: PromptListProps) {
  return (
    <div className="grid lg:grid-cols-3 my-16 gap-4">
      {data.map((post: any) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
