
const About = () => {

    const skills = [
        'React',
        'JavaScript',
        'Node.js',
        'Responsive Design',
        'Web Accessibility',
        'UI/UX Development'
      ] 
  return (
    <div>      
    {/* Skills Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Core Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-fuchsia-900 dark:to-purple-800 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
              >
                <p className="font-semibold text-lg text-gray-800 dark:text-white">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
  )
}

export default About