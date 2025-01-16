'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Revolutionize Your Trucking Insurance Brokerage with AI-Powered Insights
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Quickly identify the best carriers, compare policies with precision, and uncover compliance insights—all in one data-driven platform designed for trucking insurance brokers.
        </p>
        <Button size="lg" onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}>
          Join the Waitlist
        </Button>
      </div>
    </section>
  )
}

