import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-black">Admin Dashboard</h1>
        <form action="/api/admin/auth/logout" method="post">
          <Button variant="outline" type="submit">Logout</Button>
        </form>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link href="/admin/blogs/all">
          <div className="rounded-xl border p-6 hover:shadow bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-2">Manage Blogs</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">View, search, publish, edit and delete blog posts.</p>
          </div>
        </Link>
        <Link href="/admin/blogs/new">
          <div className="rounded-xl border p-6 hover:shadow bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold mb-2">Create New Blog</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Start a new blog post using the editor.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
