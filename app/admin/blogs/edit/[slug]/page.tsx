"use client"

import { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import MarkdownEditor from '@/components/admin/MarkdownEditor'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { AlertCircle, Save, Eye, Image as ImageIcon, Tag, FolderOpen, FileText, List, Hash, Quote, Type } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Image from 'next/image'

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
  const [saving, setSaving] = useState(false)

  const stats = useMemo(() => {
    const content = item?.content || ''
    const text = content
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
      if (!res.ok) return setError('Blog post not found')
      const data = await res.json()
      setItem(data)
    }
    load()
  }, [slug])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const el = e.target
    const name = el.name as keyof BlogItem
    const value = el.value
    setItem((prev) => {
      if (!prev) return prev
      return { ...prev, [name]: value }
    })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!item) return
    setError(null)
    setSaving(true)
    
    try {
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
        throw new Error(data.error || 'Failed to save')
      }
      
      router.push('/admin/blogs/all')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save'
      setError(message)
      setSaving(false)
    }
  }

  if (error && !item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  const quickInserts = [
    { label: 'Heading', icon: Type, text: '\n\n## Section Title\n\nWrite your paragraph here.' },
    { label: 'Bullets', icon: List, text: '\n\n- Point one\n- Point two\n- Point three' },
    { label: 'Numbers', icon: Hash, text: '\n\n1. Step one\n2. Step two\n3. Step three' },
    { label: 'Quote', icon: Quote, text: '\n\n> Inspiring quote goes here.' },
    { label: 'Image', icon: ImageIcon, text: '\n\n![Alt text](https://...)' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Edit Blog Post</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Make changes to your blog post and publish when ready
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-4 space-y-6">
              {/* Title */}
              <Card>
                <CardContent className="pt-6">
                  <Label htmlFor="title" className="text-lg font-medium mb-2 block">
                    Post Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={item.title}
                    onChange={onChange}
                    placeholder="Enter a compelling title..."
                    className="text-xl font-semibold h-12"
                    required
                  />
                </CardContent>
              </Card>

              {/* Featured Image & Slug */}
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="featuredImage" className="mb-2 block">
                        Featured Image URL
                      </Label>
                      <div className="relative">
                        <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="featuredImage"
                          name="featuredImage"
                          value={item.featuredImage || ''}
                          onChange={onChange}
                          placeholder="https://example.com/image.jpg"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="slug" className="mb-2 block">
                        URL Slug
                      </Label>
                      <Input
                        id="slug"
                        name="slug"
                        value={item.slug}
                        readOnly
                        className="bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                  </div>
                  
                  {/* Image Preview */}
                  {item.featuredImage && (
                    <div className="mt-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                        <Image
                          src={item.featuredImage}
                          alt="Featured"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Excerpt */}
              <Card>
                <CardContent className="pt-6">
                  <Label htmlFor="excerpt" className="mb-2 block">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={item.excerpt || ''}
                    onChange={onChange}
                    placeholder="Write a brief summary of your post..."
                    className="min-h-[100px] resize-none"
                  />
                </CardContent>
              </Card>

              {/* Content Editor */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>Content</CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <FileText className="h-4 w-4" />
                        <span>{stats.words} words</span>
                        <span className="text-gray-400">•</span>
                        <span>~{stats.minutes} min read</span>
                      </div>
                      <div className="flex rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                        {(['edit', 'live', 'preview'] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setPreviewMode(mode)}
                            className={`px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                              previewMode === mode
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <MarkdownEditor
                    value={item.content}
                    onChange={(md) => setItem((prev) => (prev ? { ...prev, content: md } : prev))}
                    preview={previewMode}
                    height={600}
                  />
                  
                  {/* Quick Insert Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 self-center mr-2">
                      Quick insert:
                    </span>
                    {quickInserts.map((insert) => (
                      <Button
                        key={insert.label}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setItem(prev => prev ? { ...prev, content: prev.content + insert.text } : prev)}
                        className="gap-2"
                      >
                        <insert.icon className="h-3 w-3" />
                        {insert.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-4 space-y-6">
                {/* Publish Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Publish Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="status" className="mb-2 block">
                        Status
                      </Label>
                      <Select
                        value={item.status}
                        onValueChange={(value: 'draft' | 'published') => 
                          setItem(prev => prev ? { ...prev, status: value } : prev)
                        }
                      >
                        <SelectTrigger id="status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-yellow-500" />
                              Draft
                            </div>
                          </SelectItem>
                          <SelectItem value="published">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              Published
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured" className="cursor-pointer">
                        Featured Post
                      </Label>
                      <Switch
                        id="featured"
                        checked={item.featured}
                        onCheckedChange={(checked) => 
                          setItem(prev => prev ? { ...prev, featured: checked } : prev)
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Organization */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Organization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="category" className="mb-2 block">
                        Category
                      </Label>
                      <div className="relative">
                        <FolderOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="category"
                          name="category"
                          value={item.category || ''}
                          onChange={onChange}
                          placeholder="e.g., Skills, News, Tips"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tags" className="mb-2 block">
                        Tags
                      </Label>
                      <div className="relative">
                        <Tag className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="tags"
                          name="tags"
                          value={item.tags || ''}
                          onChange={onChange}
                          placeholder="volleyball, training, tips"
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Separate tags with commas
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={() => window.open(`/blog/${item.slug}`, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}