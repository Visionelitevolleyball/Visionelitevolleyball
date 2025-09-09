"use client"

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

type BlogItem = {
  id: number
  title: string
  slug: string
  status: 'draft' | 'published'
  createdAt: string
  publishedDate: string | null
}

export default function BlogListAdmin() {
  const [items, setItems] = useState<BlogItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  const load = useCallback(async () => {
    const params = new URLSearchParams()
    if (searchTerm) params.set('search', searchTerm)
    if (filter !== 'all') params.set('status', filter)
    const res = await fetch(`/api/admin/blogs?${params.toString()}`)
    const data = await res.json()
    setItems(data.items || [])
  }, [searchTerm, filter])

  useEffect(() => { load() }, [load])

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    await load()
  }

  const togglePublish = async (slug: string, current: 'draft' | 'published') => {
    const next = current === 'published' ? 'draft' : 'published'
    await fetch(`/api/admin/blogs/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    })
    await load()
  }

  const onDelete = async (slug: string) => {
    if (!confirm('Delete this blog post?')) return
    await fetch(`/api/admin/blogs/${slug}`, { method: 'DELETE' })
    await load()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <Link href="/admin/blogs/new"><Button>+ New Blog Post</Button></Link>
      </div>

      <form onSubmit={onSearch} className="flex gap-2 mb-4">
        <input
          type="search"
          placeholder="Search blogs..."
          className="w-full rounded-md border px-3 py-2 bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="rounded-md border px-3 py-2 bg-transparent"
          value={filter}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value as 'all' | 'published' | 'draft')}
        >
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <Button type="submit">Search</Button>
      </form>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-950/30">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Created</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.title}</td>
                <td className="p-3">
                  <button className="underline" onClick={() => togglePublish(b.slug, b.status)}>
                    {b.status}
                  </button>
                </td>
                <td className="p-3">{new Date(b.createdAt).toLocaleString()}</td>
                <td className="p-3 flex gap-3">
                  <Link href={`/admin/blogs/edit/${b.slug}`} className="underline">Edit</Link>
                  <button onClick={() => onDelete(b.slug)} className="text-red-600 underline">Delete</button>
                  <Link href={`/blog/${b.slug}`} className="underline" target="_blank">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
