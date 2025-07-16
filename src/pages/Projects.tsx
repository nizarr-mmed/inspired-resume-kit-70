
import React, { useState } from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';
import ProcessSection from '../components/sections/ProcessSection';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web Development', 'Mobile Development', 'Web Application', 'Full Stack', 'Enterprise'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-200">
              A showcase of my recent work across various technologies and industries. 
              Each project represents a unique challenge and creative solution.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <ProjectsSection 
          showAll={true} 
          title="All Projects" 
          subtitle="Explore my complete portfolio" 
        />
      </div>

      {/* Process Section */}
      <ProcessSection 
        variant="compact" 
        showTitle={true}
        className="bg-white dark:bg-gray-900" 
      />

      {/* Skills Used Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Technologies I Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              The tools and technologies that power my projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'TypeScript', 'Node.js', 'Next.js', 'Vue.js', 'Angular',
              'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Firebase'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in hover-scale"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
