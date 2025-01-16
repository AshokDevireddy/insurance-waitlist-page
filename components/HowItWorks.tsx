import { Search, FileText, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: <Search className="h-12 w-12 text-blue-600" />,
    title: "Input DOT Number",
    description: "Access carrier rankings instantly by entering a DOT number."
  },
  {
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    title: "Compare Policies",
    description: "Compare existing policies with recommended alternatives for optimal coverage."
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
    title: "Resolve Mismatches",
    description: "Identify and resolve filed rights mismatches with ease."
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="mb-4 bg-white p-4 rounded-full shadow-md">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

