
import React from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

interface ProjectsSectionProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  showAll = false, 
  title = "Featured Projects",
  subtitle = "Here are some of my recent works"
}) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with modern design and powerful features.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web Application',
      description: 'A productivity app that helps teams collaborate and manage projects efficiently.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'Web Development',
      description: 'A beautiful restaurant website with online reservation system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'A secure mobile banking application with modern UI/UX design.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'A personal portfolio website showcasing creative work and skills.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Gatsby', 'GraphQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 6,
      title: 'Learning Platform',
      category: 'Full Stack',
      description: 'An online learning platform with course management and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Express', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ];

  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-20 bg-background transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 transition-colors duration-200">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-colors duration-200">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-border animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card rounded-full hover:bg-muted transition-colors hover-scale"
                  >
                    <ExternalLink className="w-5 h-5 text-card-foreground" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card rounded-full hover:bg-muted transition-colors hover-scale"
                  >
                    <Github className="w-5 h-5 text-card-foreground" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3 transition-colors duration-200">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-card-foreground mb-2 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 transition-colors duration-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center story-link"
                >
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CustomButton to="/projects" className="hover-scale">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </CustomButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
