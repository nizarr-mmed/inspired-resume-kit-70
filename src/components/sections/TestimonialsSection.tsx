
import React, { useState } from 'react';
import { Star, Quote, X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    content: 'Working with Alves was an absolute pleasure. His attention to detail and technical expertise transformed our vision into a stunning reality. The project was delivered on time and exceeded all expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, DesignCorp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'Alves brought creativity and professionalism to our project. His ability to understand complex requirements and translate them into elegant solutions is remarkable. The entire development process was smooth, and the final product exceeded our wildest expectations. We saw a 300% increase in user engagement after the launch. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Agency',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'The level of craftsmanship and attention to user experience that Alves provides is outstanding. Our website not only looks amazing but performs exceptionally well across all devices.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const shouldShowMore = (text: string, maxLength: number = 150) => {
    return text.length > maxLength;
  };

  const openModal = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              What clients say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200 dark:text-blue-700" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic transition-colors duration-200">
                  "{truncateText(testimonial.content)}"
                  {shouldShowMore(testimonial.content) && (
                    <button
                      onClick={() => openModal(testimonial)}
                      className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      more
                    </button>
                  )}
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 hover-scale"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-200">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedTestimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedTestimonial.role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <Quote className="w-8 h-8 text-blue-200 dark:text-blue-700 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg">
              "{selectedTestimonial.content}"
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
