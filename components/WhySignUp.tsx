import { Rocket, DollarSign, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: <Rocket className="h-8 w-8 text-blue-600" />,
    title: "Early Access",
    description: "Be among the first to experience our exclusive tools."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: "Free Insights",
    description: "Enjoy complimentary insights for the first month."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: "Competitive Edge",
    description: "Stay ahead in a rapidly evolving market."
  }
]

export default function WhySignUp() {
  return (
    <section id="why-sign-up" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Sign Up?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

