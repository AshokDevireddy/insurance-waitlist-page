'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll be in touch soon!",
        })
        setEmail('')
      } else {
        throw new Error('Failed to join waitlist')
      }
    } catch (_error) {
      toast({
        title: "Error",
        description: "There was a problem joining the waitlist. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="waitlist-form" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Join Our Waitlist</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Joining...' : 'Join the Waitlist'}
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Be the first to experience the future of trucking insurance brokerage.
        </p>
      </div>
    </section>
  )
}

