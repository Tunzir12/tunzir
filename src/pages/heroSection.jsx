import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div>      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-fuchsia-400 dark:to-purple-500 bg-clip-text text-transparent">
            Maliha Tunzira
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Creative Problem Solver
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
            Building user-friendly, accessible, and sustainable software solutions
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto">
            I&apos;m a passionate software engineer dedicated to creating innovative digital experiences that make a meaningful impact on people&apos;s lives and our environment.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/project"
              className="px-8 py-4 bg-orange-600 dark:bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-orange-700 dark:hover:bg-fuchsia-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-orange-600 dark:text-fuchsia-400 font-semibold rounded-lg border-2 border-orange-600 dark:border-fuchsia-400 hover:bg-orange-50 dark:hover:bg-gray-700 transition duration-300"
            >
              Get in touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
</div>
  )
}

export default HeroSection