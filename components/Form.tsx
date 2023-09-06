import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import Link from 'next/link'

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  return (
    <section className="w-full max-w-full flex flex-col">
      <h1 className="text-6xl font-extrabold">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>
      <p className="mt-5 text-lg max-w-md text-foreground/70">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        <label>
          <span className="font-semibold text-base">Your AI Prompt</span>

          <Textarea
            value={post.propmt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="h-28 my-4"
          />
        </label>
        <label>
          <span className="font-semibold text-base">
            Tag{' '}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <Input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="my-4"
          />
        </label>

        <div className="flex justify-end space-x-4">
          <Link href="/">
            <Button variant="ghost">Cancel</Button>
          </Link>

          <Button type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </Button>
        </div>
      </form>
    </section>
  )
}
