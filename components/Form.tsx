import Link from 'next/link'

import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'

import { FormProps } from '@/types'

export default function Form({
  type,
  desc,
  post,
  setPost,
  submitting,
  handleSubmit,
}: FormProps) {
  return (
    <section className="w-full max-w-full flex flex-col">
      <h1 className="text-6xl font-extrabold">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>
      <p className="mt-5 text-lg max-w-md text-muted-foreground">{desc}</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        <Label>
          <span className="font-semibold text-base">Prompt</span>

          <Textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Digite seu prompt..."
            required
            className="h-28 my-4"
          />
        </Label>
        <Label>
          <span className="font-semibold text-base">
            Tag{' '}
            <span className="font-normal">
              (#programação, #inspiração, #design)
            </span>
          </span>

          <Input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="my-4"
          />
        </Label>

        <div className="flex justify-end space-x-4">
          <Link href="/">
            <Button variant="ghost">Cancelar</Button>
          </Link>

          <Button type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </Button>
        </div>
      </form>
    </section>
  )
}
