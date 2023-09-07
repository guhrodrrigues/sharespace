import { Session } from 'next-auth'
import PromptCard from './PromptCard'

interface PromptProps {
  data: Session
  handleTagClick: () => void
}

export default function PromptCardList({ data, handleTagClick }: PromptProps) {
  return (
    <div className="grid lg:grid-cols-3 mt-16 gap-4">
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
