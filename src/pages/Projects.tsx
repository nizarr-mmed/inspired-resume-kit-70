
import React, { useState, useMemo } from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';
import ProcessSection from '../components/sections/ProcessSection';
import FilterButton from '../components/ui/FilterButton';
import TechnologyBadge from '../components/ui/TechnologyBadge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = useMemo(() => [
    'All', 'Web Development', 'Mobile Development', 'Web Application', 'Full Stack', 'Enterprise'
  ], []);

  const technologies = useMemo(() => [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Vue.js', 'Angular',
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Firebase'
  ], []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 transition-colors duration-200">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 transition-colors duration-200">
              A showcase of my recent work across various technologies and industries. 
              Each project represents a unique challenge and creative solution.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {filters.map((filter, index) => (
              <FilterButton
                key={filter}
                filter={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                animationDelay={`${0.4 + index * 0.1}s`}
              />
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
        className="bg-background" 
      />

      {/* Skills Used Section */}
      <section className="py-20 bg-muted/50 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 transition-colors duration-200">
              Technologies I Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-colors duration-200">
              The tools and technologies that power my projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <TechnologyBadge 
                key={tech}
                tech={tech}
                index={index}
                variant="large"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
