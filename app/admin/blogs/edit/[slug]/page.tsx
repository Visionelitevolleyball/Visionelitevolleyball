"use client"

import { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import MarkdownEditor from '@/components/admin/MarkdownEditor'

type BlogItem = {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string
  featuredImage: string | null
  author: string
  category: string | null
  tags: string | null
  status: 'draft' | 'published'
  featured: boolean
}

export default function EditBlogPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const router = useRouter()
  const [item, setItem] = useState<BlogItem | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState<'edit' | 'live' | 'preview'>('live')

  const stats = useMemo(() => {
    const content = item?.content || ''
    let text = content
      .replace(/<[^>]*>/g, ' ')
      .replace(/!\[[^\]]*\]\([^\)]+\)/g, ' ')
      .replace(/\[[^\]]*\]\([^\)]+\)/g, ' ')
      .replace(/[>#*_`~\-]+/g, ' ')
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const minutes = Math.max(1, Math.ceil(words / 200))
    return { words, minutes }
  }, [item?.content])

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/admin/blogs/${slug}`)
      if (!res.ok) return setError('Not found')
      const data = await res.json()
      setItem(data)
    }
    load()
  }, [slug])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const el = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    const name = el.name as keyof BlogItem
    const isCheckbox = (el as HTMLInputElement).type === 'checkbox'
    const raw = isCheckbox ? (el as HTMLInputElement).checked : el.value
    setItem((prev) => {
      if (!prev) return prev
      const updated: BlogItem = { ...prev }
      switch (name) {
        case 'featured':
          updated.featured = Boolean(raw)
          break
        case 'status':
          updated.status = (raw as string) === 'published' ? 'published' : 'draft'
          break
        case 'excerpt':
          updated.excerpt = (raw as string) || ''
          break
        case 'featuredImage':
          updated.featuredImage = (raw as string) || ''
          break
        case 'category':
          updated.category = (raw as string) || ''
          break
        case 'tags':
          updated.tags = (raw as string) || ''
          break
        case 'title':
          updated.title = raw as string
          break
        case 'content':
          updated.content = raw as string
          break
        default:
          break
      }
      return updated
    })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!item) return
    setError(null)
    const res = await fetch(`/api/admin/blogs/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: item.title,
        excerpt: item.excerpt,
        content: item.content,
        featured_image: item.featuredImage,
        author: item.author,
        category: item.category,
        tags: item.tags?.split(',').map((t) => t.trim()).filter(Boolean) || [],
        status: item.status,
        featured: item.featured,
      }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error || 'Failed to save')
      return
    }
    router.push('/admin/blogs/all')
  }

  if (error) return <div className="max-w-3xl mx-auto p-4 text-red-600">{error}</div>
  if (!item) return <div className="max-w-3xl mx-auto p-4">Loading…</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <input className="w-full border rounded px-3 py-2" name="title" placeholder="Blog Title" value={item.title} onChange={onChange} required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" name="featuredImage" placeholder="Featured Image URL" value={item.featuredImage || ''} onChange={onChange} />
            <input className="border rounded px-3 py-2" name="slug" placeholder="slug" value={item.slug} readOnly />
          </div>
          {item.featuredImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.featuredImage} alt="Featured" className="rounded-lg border max-h-72 w-full object-cover" />
          )}
          <textarea className="w-full border rounded px-3 py-2 min-h-40" name="excerpt" placeholder="Short excerpt" value={item.excerpt || ''} onChange={onChange} />

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
            value={item.content}
            onChange={(md) => setItem((prev) => (prev ? { ...prev, content: md } : prev))}
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
              <button key={t.label} type="button" className="px-2 py-1 rounded border hover:bg-gray-50 dark:hover:bg-gray-900" onClick={()=>setItem(prev=>prev?{...prev, content: prev.content + t.text}:prev)}>{t.label}</button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-3">
          <div className="rounded-lg border p-3 bg-white dark:bg-gray-900 space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <input className="border rounded px-3 py-2" name="category" placeholder="Category" value={item.category || ''} onChange={onChange} />
              <input className="border rounded px-3 py-2" name="tags" placeholder="Tags (comma separated)" value={item.tags || ''} onChange={onChange} />
              <select className="border rounded px-3 py-2" name="status" value={item.status} onChange={onChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="featured" checked={item.featured} onChange={onChange} />
                <span>Featured</span>
              </label>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="w-full">Save</Button>
              <Button type="button" variant="outline" onClick={() => window.open(`/blog/${item.slug}`, '_blank')} className="w-full">Preview</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
