
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Building, MapPin, ExternalLink, Code, Users, Clock } from 'lucide-react';
import CustomButton from '../components/ui/CustomButton';

const ExperienceDetail = () => {
  const { id } = useParams();

  const experiences = {
    'operations-engineer': {
      title: 'Operations Engineer',
      company: 'Mind Model AI',
      location: 'Kitchener, Ontario',
      period: 'Mar 2025 - Present',
      duration: '2 years',
      employmentType: 'Full-time',
      description: 'Leading operations engineering initiatives at a cutting-edge AI company, focusing on integrating Generative AI into internal processes and managing client relationships while driving team productivity improvements.',
      tasks: [
        'Integrated Generative AI into internal operations to automate routine tasks',
        'Led Agile team operations and sprint planning sessions',
        'Managed 3 client accounts with diverse technical requirements',
        'Represented the company at industry expos and conferences',
        'Developed operational workflows that improved team productivity by 30%',
        'Collaborated with cross-functional teams on product development',
        'Created technical documentation and process improvement guides',
        'Conducted client requirement analysis and solution design'
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'OpenAI API',
        'Docker',
        'Kubernetes',
        'AWS',
        'Agile/Scrum',
        'Jira',
        'Confluence',
        'Git',
        'CI/CD',
        'MongoDB'
      ],
      achievements: [
        'Improved team productivity by 30% through AI automation',
        'Successfully managed 3 major client accounts',
        'Led company representation at 5+ industry events',
        'Reduced manual task processing time by 75%',
        'Implemented automated reporting systems',
        'Established best practices for AI integration'
      ],
      photos: [
        '../public/assets/images/experience1/exp1.jpg',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
      ],
      relatedProjectId: 'ai-automation-platform'
    },
    'ai-practitioner-intern': {
      title: 'AI Practitioner Intern',
      company: 'Mind Model AI',
      location: 'Kitchener, Ontario',
      period: 'Jan 2023 - Mar 2025',
      duration: '2 years',
      employmentType: 'Full-time',
      description: 'Leading operations engineering initiatives at a cutting-edge AI company, focusing on integrating Generative AI into internal processes and managing client relationships while driving team productivity improvements.',
      tasks: [
        'Focused on building foundational knowledge in Generative AI, machine learning concepts, and cloud-based AI services.',
        'Applied learning to real-world use cases, preparing for integration of AI tools into operational workflows.',
        'Successfully passed the AWS Certified AI Practitioner.'
      ],
      technologies: [
        'Retrieval-Augmented Generation (RAG)',
        'AWS Cloud Services',
        'OpenAI API',
        'Claude AI',
        'LLMs',
        'AWS'
      ],
      achievements: [
        'Improved team productivity by 30% through AI automation',
        'Successfully managed 3 major client accounts',
        'Led company representation at 3+ industry events',
        'Established best practices for AI integration'
      ],
      photos: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
      ],
      relatedProjectId: 'ai-automation-platform'
    },
    'software-engineer': {
      title: 'Software Engineer',
      company: 'GO&DEV Delivery Center',
      location: 'Remote',
      period: 'Jan 2023 - Jul 2024',
      duration: '1.5 years',
      employmentType: 'Full-time',
      description: 'Developed and maintained large-scale insurance software systems, focusing on performance optimization, automated workflows, and modernizing legacy mapping logic.',
      tasks: [
        'Developed and maintained large-scale Insurance Software applications',
        'Automated build workflows and deployment processes',
        'Migrated mapping logic from Dozer to MapStruct framework',
        'Implemented unit and integration testing strategies',
        'Collaborated with QA teams on testing protocols',
        'Participated in code reviews and technical discussions',
        'Optimized database queries and application performance',
        'Maintained comprehensive technical documentation'
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'MapStruct',
        'Dozer',
        'PostgreSQL',
        'Maven',
        'JUnit',
        'Mockito',
        'Jenkins',
        'Docker',
        'REST APIs',
        'Microservices'
      ],
      achievements: [
        'Increased productivity by 75% through build automation',
        'Successfully migrated legacy mapping system',
        'Reduced deployment time by 60%',
        'Improved code coverage to 85%+',
        'Mentored 2 junior developers',
        'Led technical architecture decisions'
      ],
      photos: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop'
      ],
      relatedProjectId: 'insurance-management-system'
    },
    'web-developer-intern-moneycore': {
      title: 'Full Stack Web Developer Intern',
      company: 'MoneyCore Advisory',
      location: 'Hybrid',
      period: 'Oct 2022 - Dec 2022',
      duration: '3 months',
      employmentType: 'Internship',
      description: 'Streamlined deployment processes and optimized performance for a recruitment web application, focusing on component optimization and bug resolution.',
      tasks: [
        'Streamlined deployment of recruitment web application',
        'Optimized React components for better performance',
        'Resolved critical bugs affecting user experience',
        'Implemented responsive design improvements',
        'Collaborated with design team on UI/UX enhancements',
        'Conducted testing and quality assurance',
        'Documented deployment procedures and best practices',
        'Participated in daily standups and sprint planning'
      ],
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Git',
        'Heroku',
        'Bootstrap',
        'REST APIs',
        'Postman'
      ],
      achievements: [
        'Increased deployment productivity by 80%',
        'Reduced page load time by 40%',
        'Fixed 15+ critical bugs',
        'Improved mobile responsiveness',
        'Implemented automated testing',
        'Enhanced user interface consistency'
      ],
      photos: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
      ],
      relatedProjectId: 'recruitment-platform'
    },
    'web-developer-intern-safran': {
      title: 'Full Stack Web Developer Intern',
      company: 'Safran Engineering Services',
      location: 'On-site',
      period: 'Feb 2022 - Jul 2022',
      duration: '6 months',
      employmentType: 'Internship',
      description: 'Enhanced security for a knowledge capitalization web application, implementing OWASP best practices and generating comprehensive security reports.',
      tasks: [
        'Secured knowledge capitalization web application',
        'Implemented OWASP security best practices',
        'Generated detailed security vulnerability reports',
        'Conducted security audits and penetration testing',
        'Fixed high and critical security vulnerabilities',
        'Developed secure authentication mechanisms',
        'Created security documentation and guidelines',
        'Collaborated with cybersecurity team on threat assessment'
      ],
      technologies: [
        'PHP',
        'Laravel',
        'MySQL',
        'HTML5',
        'CSS3',
        'JavaScript',
        'OWASP ZAP',
        'Burp Suite',
        'Apache',
        'Linux',
        'Git',
        'PHPUnit'
      ],
      achievements: [
        'Reduced vulnerability severity by 89%',
        'Implemented comprehensive security framework',
        'Generated 20+ detailed security reports',
        'Fixed 50+ security vulnerabilities',
        'Established security testing protocols',
        'Trained team on security best practices'
      ],
      photos: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg'
      ],
      relatedProjectId: 'security-knowledge-platform'
    },
    'web-developer-intern-business-innovation': {
      title: 'Full Stack Web Developer Intern',
      company: 'Business Innovation LLC',
      location: 'Remote',
      period: 'Jul 2021 - Sep 2021',
      duration: '3 months',
      employmentType: 'Internship',
      description: 'Co-developed a comprehensive Business Process Management system, writing technical specifications and collaborating with cross-functional teams.',
      tasks: [
        'Co-developed Business Process Management system',
        'Wrote functional and technical specifications',
        'Collaborated with cross-functional development teams',
        'Implemented workflow automation features',
        'Designed and developed user interfaces',
        'Conducted system testing and debugging',
        'Created user documentation and training materials',
        'Participated in client requirement gathering sessions'
      ],
      technologies: [
        'Java',
        'Spring Framework',
        'Angular',
        'TypeScript',
        'PostgreSQL',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Git',
        'Maven',
        'JUnit',
        'REST APIs'
      ],
      achievements: [
        'Successfully delivered BPM system on time',
        'Created comprehensive technical documentation',
        'Implemented 10+ workflow automation features',
        'Designed intuitive user interface',
        'Collaborated with 5+ team members',
        'Delivered client training sessions'
      ],
      photos: [
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
      ],
      relatedProjectId: 'business-process-platform'
    }
  };

  const experience = experiences[id as keyof typeof experiences];

  if (!experience) {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <CustomButton 
            to="/about" 
            variant="ghost" 
            className="mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to About
          </CustomButton>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              {experience.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-6">
              <div className="flex items-center">
                <Building className="mr-2 h-5 w-5" />
                {experience.company}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                {experience.location}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                {experience.period}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {experience.duration}
              </div>
            </div>
            <div className="mb-6">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                {experience.employmentType}
              </span>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-200">
              {experience.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
              Key Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.tasks.map((task, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-200">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 mt-3 flex-shrink-0 transition-colors duration-200"></div>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {experience.technologies.map((tech, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 transition-colors duration-200 text-center">
                  <div className="flex items-center justify-center">
                    <Code className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 transition-colors duration-200" />
                    <p className="text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200">{tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full mr-3 transition-colors duration-200"></div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium transition-colors duration-200">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experience.photos.map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={photo} 
                    alt={`${experience.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Project Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Related Project
            </h2>
            <p className="text-blue-100 dark:text-blue-200 mb-8 transition-colors duration-200">
              Check out a project that showcases the skills and experience gained during this role.
            </p>
            <CustomButton 
              to={`/projects/${experience.relatedProjectId}`}
              variant="secondary"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetail;
