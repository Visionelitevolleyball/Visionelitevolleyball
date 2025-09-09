"use client"

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { slugify } from '@/lib/utils'
import MarkdownEditor from '@/components/admin/MarkdownEditor'

type FormState = {
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  category: string
  tags: string
  status: 'draft' | 'published'
  featured: boolean
}

export default function NewBlogPage() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: '',
    tags: '',
    status: 'draft',
    featured: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState<'edit' | 'live' | 'preview'>('live')

  const stats = useMemo(() => {
    // crude words/min read estimate
    let text = form.content
      .replace(/<[^>]*>/g, ' ')
      .replace(/!\[[^\]]*\]\([^\)]+\)/g, ' ')
      .replace(/\[[^\]]*\]\([^\)]+\)/g, ' ')
      .replace(/[>#*_`~\-]+/g, ' ')
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const minutes = Math.max(1, Math.ceil(words / 200))
    return { words, minutes }
  }, [form.content])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const el = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    const name = el.name as keyof typeof form
    const nextValue = (el as HTMLInputElement).type === 'checkbox'
      ? (el as HTMLInputElement).checked
      : el.value
    setForm((f) => ({ ...f, [name]: nextValue } as FormState))
  }

  const onTitleBlur = () => {
    if (!form.slug && form.title) setForm((f) => ({ ...f, slug: slugify(f.title) }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        }),
      })
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to create')
      const created = await res.json()
      router.push(`/admin/blogs/edit/${created.slug}`)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to create'
      setError(message)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>
      {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
      <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <input className="w-full border rounded px-3 py-2" name="title" placeholder="Blog Title" value={form.title} onChange={onChange} onBlur={onTitleBlur} required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" name="slug" placeholder="blog-url-slug" value={form.slug} onChange={onChange} required />
            <input className="border rounded px-3 py-2" name="featured_image" placeholder="Featured Image URL" value={form.featured_image} onChange={onChange} />
          </div>
          {form.featured_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.featured_image} alt="Featured" className="rounded-lg border max-h-72 w-full object-cover" />
          )}
          <textarea className="w-full border rounded px-3 py-2 min-h-40" name="excerpt" placeholder="Short excerpt" value={form.excerpt} onChange={onChange} />

          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">Content (Markdown)</label>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">{stats.words} words • ~{stats.minutes} min read</span>
              <div className="ml-2 inline-flex rounded border">
                {(['edit','live','preview'] as const).map(m => (
                  <button key={m} type="button" className={`px-2 py-1 ${previewMode===m?'bg-gray-100 dark:bg-gray-800 font-medium':''}`} onClick={()=>setPreviewMode(m)}>
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <MarkdownEditor
            value={form.content}
            onChange={(md) => setForm((f) => ({ ...f, content: md }))}
            className=""
            preview={previewMode}
            height={520}
          />

          {/* Quick templates */}
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="text-gray-500">Quick insert:</span>
            {[
              { label: 'H2 + paragraph', text: '\n\n## Section Title\n\nWrite your paragraph here.' },
              { label: 'Bullet list', text: '\n\n- Point one\n- Point two\n- Point three' },
              { label: 'Numbered list', text: '\n\n1. Step one\n2. Step two\n3. Step three' },
              { label: 'Quote', text: '\n\n> Inspiring quote goes here.' },
              { label: 'Image', text: '\n\n![Alt text](https://...)' },
            ].map(t => (
              <button key={t.label} type="button" className="px-2 py-1 rounded border hover:bg-gray-50 dark:hover:bg-gray-900" onClick={()=>setForm(f=>({...f, content: f.content + t.text}))}>{t.label}</button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-3">
          <div className="rounded-lg border p-3 bg-white dark:bg-gray-900 space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <input className="border rounded px-3 py-2" name="category" placeholder="Category" value={form.category} onChange={onChange} />
              <input className="border rounded px-3 py-2" name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={onChange} />
              <select className="border rounded px-3 py-2" name="status" value={form.status} onChange={onChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="featured" checked={form.featured} onChange={onChange} />
                <span>Featured</span>
              </label>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="w-full">Save</Button>
              <Button type="button" variant="outline" onClick={() => window.open(`/blog/${form.slug || slugify(form.title)}`, '_blank')} className="w-full">Preview</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
