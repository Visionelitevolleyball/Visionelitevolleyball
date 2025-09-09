"use client"

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar, 
  FileText,
  Loader2,
  Sparkles,
  Filter
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type BlogItem = {
  id: number
  title: string
  slug: string
  status: 'draft' | 'published'
  createdAt: string
  publishedDate: string | null
}

// Beautiful skeleton loader component
function TableSkeleton() {
  return (
    <div className="overflow-hidden">
      <div className="space-y-3">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-4">
                  {/* Title skeleton */}
                  <div className="flex-1">
                    <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-md animate-shimmer" />
                  </div>
                  {/* Status skeleton */}
                  <div className="w-20">
                    <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full animate-shimmer" />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  {/* Date skeleton */}
                  <div className="w-32">
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded animate-shimmer" />
                  </div>
                  {/* Actions skeleton */}
                  <div className="flex gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-12 h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded animate-shimmer" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer-slide bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        ))}
      </div>
      
      {/* Loading message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center mt-8 text-gray-500 dark:text-gray-400"
      >
        <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
        <span className="text-sm">Loading your amazing content...</span>
      </motion.div>
    </div>
  )
}

export default function BlogListAdmin() {
  const [items, setItems] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [togglingId, setTogglingId] = useState<number | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (searchTerm) params.set('search', searchTerm)
      if (filter !== 'all') params.set('status', filter)
      
      // Add a minimum delay to show the beautiful loading state
      const [res] = await Promise.all([
        fetch(`/api/admin/blogs?${params.toString()}`),
        new Promise(resolve => setTimeout(resolve, 600))
      ])
      
      const data = await res.json()
      setItems(data.items || [])
    } catch (error) {
      console.error('Failed to load blogs:', error)
      setItems([])
    } finally {
      setLoading(false)
    }
  }, [searchTerm, filter])

  useEffect(() => { load() }, [load])

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    await load()
  }

  const togglePublish = async (slug: string, current: 'draft' | 'published', id: number) => {
    setTogglingId(id)
    const next = current === 'published' ? 'draft' : 'published'
    try {
      await fetch(`/api/admin/blogs/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next }),
      })
      await load()
    } finally {
      setTogglingId(null)
    }
  }

  const onDelete = async (slug: string, id: number) => {
    if (!confirm('Delete this blog post?')) return
    setDeletingId(id)
    try {
      await fetch(`/api/admin/blogs/${slug}`, { method: 'DELETE' })
      await load()
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FileText className="h-8 w-8 text-primary" />
                Manage Blog Posts
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Create, edit, and manage your blog content
              </p>
            </div>
            <Link href="/admin/blogs/new">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                <Plus className="h-5 w-5" />
                New Blog Post
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="mb-6 p-4 shadow-sm">
            <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search blog posts..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Select
                  value={filter}
                  onValueChange={(value: 'all' | 'published' | 'draft') => setFilter(value)}
                >
                  <SelectTrigger className="w-[140px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Posts</SelectItem>
                    <SelectItem value="published">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        Published
                      </div>
                    </SelectItem>
                    <SelectItem value="draft">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        Drafts
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" variant="secondary">
                  Search
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Table Content */}
        <Card className="overflow-hidden shadow-lg">
          {loading ? (
            <div className="p-6">
              <TableSkeleton />
            </div>
          ) : items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-12 text-center"
            >
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                No blog posts found
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {searchTerm || filter !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'Get started by creating your first blog post'}
              </p>
              {!searchTerm && filter === 'all' && (
                <Link href="/admin/blogs/new">
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create First Post
                  </Button>
                </Link>
              )}
            </motion.div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <AnimatePresence>
                    {items.map((blog, index) => (
                      <motion.tr
                        key={blog.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {blog.title}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                /blog/{blog.slug}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => togglePublish(blog.slug, blog.status, blog.id)}
                            disabled={togglingId === blog.id}
                            className="relative"
                          >
                            {togglingId === blog.id ? (
                              <div className="flex items-center gap-2">
                                <Loader2 className="h-3 w-3 animate-spin" />
                                <span className="text-xs text-gray-500">Updating...</span>
                              </div>
                            ) : (
                              <Badge
                                variant={blog.status === 'published' ? 'default' : 'secondary'}
                                className={`cursor-pointer transition-all hover:scale-105 ${
                                  blog.status === 'published' 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
                                }`}
                              >
                                {blog.status === 'published' ? (
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    Published
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                    Draft
                                  </div>
                                )}
                              </Badge>
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="h-4 w-4" />
                            {new Date(blog.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Link href={`/admin/blogs/edit/${blog.slug}`}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1 hover:bg-primary/10"
                              >
                                <Edit className="h-4 w-4" />
                                Edit
                              </Button>
                            </Link>
                            <Link href={`/blog/${blog.slug}`} target="_blank">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-1 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                              >
                                <Eye className="h-4 w-4" />
                                View
                              </Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onDelete(blog.slug, blog.id)}
                              disabled={deletingId === blog.id}
                              className="gap-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                            >
                              {deletingId === blog.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                              Delete
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>

      {/* Add shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
          background-size: 200% 100%;
        }
        
        .animate-shimmer-slide {
          animation: shimmer-slide 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}