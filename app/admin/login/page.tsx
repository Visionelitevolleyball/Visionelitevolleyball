"use client"

import { useState, useTransition, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

function LoginForm() {
  const router = useRouter()
  const search = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Login failed')
      }
      const next = search.get('next') || '/admin'
      startTransition(() => router.replace(next))
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed'
      setError(message)
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 border rounded-lg p-6 bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        {error && (
          <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-2">
            {error}
          </div>
        )}
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2 bg-transparent"
            placeholder="enter your email"
            autoComplete="username"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2 bg-transparent"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Signing in…' : 'Sign In'}
        </Button>
      </form>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-4 border rounded-lg p-6 bg-white dark:bg-gray-900">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
