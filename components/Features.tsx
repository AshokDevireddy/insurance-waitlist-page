import { Zap, BarChart, Shield, Users } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Data-Driven Carrier Matching",
    description: "Instantly identify the best carriers for your clients. Increase efficiency and improve success rates."
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    title: "Comprehensive Policy Comparisons",
    description: "Provide your clients with unmatched clarity and transparency in policy options."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Filed Rights Insights",
    description: "Stay ahead of the competition by identifying and resolving coverage discrepancies."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Client Acquisition",
    description: "Access detailed data on potential clients to drive new business opportunities."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Value Proposition For Brokers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

