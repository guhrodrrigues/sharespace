import PromptCard from './PromptCard'

export default function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="grid lg:grid-cols-3 mt-16 gap-4">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
