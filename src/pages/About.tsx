import React from 'react';
import { Download, Award, Coffee, Users, Clock } from 'lucide-react';
import ProcessSection from '../components/sections/ProcessSection';
import CustomButton from '../components/ui/CustomButton';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 88 },
    { name: 'UI/UX Design', level: 82 },
    { name: 'Mobile Development', level: 75 },
  ];

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    { icon: Users, number: '30+', label: 'Happy Clients' },
    { icon: Clock, number: '3+', label: 'Years Experience' },
  ];

  const experiences = [
    
    {
      id: 'operations-engineer',
      title: 'Operations Engineer',
      company: 'Mind Model AI, Kitchener, Ontario',
      period: 'Mar 2025 - Present',
      description: 'Integrated Generative AI into internal operations to automate routine tasks and accelerate delivery. Led Agile team operations, improving team productivity by 30%. Managed 3 client accounts and represented the company at industry expos.',
      side: 'right'
    },
    {
      id: 'ai-practitioner-intern',
      title: 'AI Practitioner Intern',
      company: 'Mind Model AI, Kitchener, Ontario',
      period: 'Jan 2025 - Mar 2025',
      description: 'Focused on building foundational knowledge in Generative AI, machine learning concepts, and cloud-based AI services. Applied learning to real-world use cases, preparing for integration of AI tools into operational workflows.',
      side: 'left'
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      company: 'GO&DEV Delivery Center',
      period: 'Jan 2023 - Jul 2024',
      description: 'Developed and maintained a large-scale Insurance Software. Automated build workflows, increasing productivity by 75%. Improved mapping logic by migrating from Dozer to MapStruct.',
      side: 'right'
      },
    {
      id: 'web-developer-intern-moneycore',
      title: 'Full Stack Web Developer Intern',
      company: 'MoneyCore Advisory',
      period: 'Oct 2022 - Dec 2022',
      description: 'Streamlined deployment of a recruitment web app, increasing productivity by 80%. Optimized components to reduce response time and resolved bugs to enhance stability.',
      side: 'left'
      },
    {
      id: 'web-developer-intern-safran',
      title: 'Full Stack Web Developer Intern',
      company: 'Safran Engineering Services',
      period: 'Feb 2022 - Jul 2022',
      description: 'Secured a knowledge capitalization web app, reducing vulnerability severity by 89%. Generated security reports and implemented OWASP best practices.',
      side: 'right'
        },
    {
      id: 'web-developer-intern-business-innovation',
      title: 'Full Stack Web Developer Intern',
      company: 'Business Innovation LLC',
      period: 'Jul 2021 - Sep 2021',
      description: 'Co-developed a Business Process Management system. Wrote functional and technical specifications and collaborated with cross-functional teams on implementation.',
      side: 'left'
    },
    {
      id: 'web-developer-intern-business-innovation',
      title: 'Master’s degree in Computer Engineering',
      company: 'Hassan I University, Faculty of Sciences and Techniques Settat, Morocco',
      period: 'Sep 2016 - July 2022',
      side: 'right'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-200">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that make a difference. I specialize in 
                modern web technologies and love turning complex problems into 
                simple, beautiful designs.
              </p>
              <CustomButton>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </CustomButton>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="About me"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200 bg-mask-heavy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-colors duration-200" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">My Skills</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
                I'm constantly learning and improving my skills to stay current 
                with the latest technologies and best practices in web development.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-200">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${0.5 + index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Skills"
                className="w-full rounded-2xl shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">My Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              Here's a brief overview of my professional experience and education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-700 transition-colors duration-200"></div>
              
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div key={experience.id} className="flex items-center justify-between animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className={`w-5/12 ${experience.side === 'right' ? 'order-3' : ''}`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover-scale">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{experience.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-200">{experience.company}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors duration-200">{experience.period}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-200">
                          {experience.description}
                        </p>
                        <CustomButton 
                          to={`/experience/${experience.id}`}
                          size="sm"
                          variant="outline"
                        >
                          Learn More
                        </CustomButton>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center order-2">
                      <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow transition-all duration-300 hover:scale-125 pulse"></div>
                    </div>
                    <div className={`w-5/12 ${experience.side === 'left' ? 'order-3' : ''}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
