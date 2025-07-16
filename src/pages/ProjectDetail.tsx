
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import CustomButton from '../components/ui/CustomButton';

// Mock project data - in a real app, this would come from an API
const projectData: Record<string, any> = {
  '1': {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    longDescription: `This e-commerce platform was designed to handle high-traffic scenarios while maintaining excellent performance and user experience. The project involved creating a complete online shopping experience with features like product catalog, shopping cart, user authentication, payment integration, and order management.

    The frontend was built using React with TypeScript for type safety and better developer experience. The backend uses Node.js with Express.js, providing RESTful APIs for all functionalities. MongoDB was chosen as the database for its flexibility in handling product data with varying attributes.

    Key challenges included implementing real-time inventory updates, handling concurrent transactions, and creating a responsive design that works seamlessly across all devices.`,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Real-time inventory management',
      'Order tracking and management',
      'Admin dashboard for store management',
      'Responsive design for all devices'
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    client: 'Tech Startup Inc.',
    duration: '3 months',
    year: '2024'
  }
  // Add more projects as needed
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">The project you're looking for doesn't exist.</p>
          <CustomButton to="/projects">Back to Projects</CustomButton>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-4 transition-colors duration-200">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CustomButton href={project.liveUrl} className="group">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </CustomButton>
                <CustomButton variant="outline" href={project.githubUrl} className="group">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </CustomButton>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-200" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Client</p>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-200" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Duration</p>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Tag className="w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-200" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Year</p>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                {project.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-200">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Gallery */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12 transition-colors duration-200">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 transition-colors duration-200"></div>
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <CustomButton href={project.liveUrl} className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </CustomButton>
                <CustomButton variant="outline" href={project.githubUrl} className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
