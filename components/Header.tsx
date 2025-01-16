import { Truck } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Truck className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">TruckInsure AI</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
            <li><a href="#why-sign-up" className="text-gray-600 hover:text-blue-600">Why Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

