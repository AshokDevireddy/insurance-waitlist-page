import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import WhySignUp from '../components/WhySignUp'
import WaitlistForm from '../components/WaitlistForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhySignUp />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}

