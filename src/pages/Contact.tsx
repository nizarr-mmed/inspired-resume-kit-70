import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import CustomButton from '../components/ui/CustomButton';
import { useToast } from '../hooks/use-toast';
import { supabase } from '../integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the edge function to send email
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nizarr.mmed@gmail.com',
      link: 'mailto:nizarr.mmed@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (548) 384-6178',
      link: 'tel:+15483846178'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'kitchener, ON',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/johndoe'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nizar-mochir'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/5483846178'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <CustomButton type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </CustomButton>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
                I'm always open to discussing new opportunities and interesting projects. 
                Feel free to reach out through any of the following channels.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in hover-scale"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover-scale"
                      style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center transition-colors duration-200 animate-fade-in hover-scale" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4 transition-colors duration-200" />
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200">Interactive Map</h3>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-200">Map integration would go here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
