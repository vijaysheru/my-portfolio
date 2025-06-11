import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// You can define your contact data here or import it as before:
const contact = {
  email: "vijaysherr222@gmail.com",
  phone: "+1 940-535-4790",
  location: "Denton, Texas, USA",
  github: "https://github.com/vijaysheru",
  linkedin: "https://www.linkedin.com/in/vijaysheru/",
  twitter: "", // Add your Twitter handle if you have one
};

const Contact = () => {
  const { theme, colorScheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getButtonClasses = () => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      green: 'bg-green-600 hover:bg-green-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
    };
    return colors[colorScheme] || colors.blue;
  };

  const getAccentColor = () => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
    };
    return colors[colorScheme] || colors.blue;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: contact.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: contact.linkedin,
    },
    ...(contact.twitter ? [{
      icon: Twitter,
      label: 'Twitter',
      href: contact.twitter,
    }] : []),
  ];

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            colorScheme === 'blue' ? 'from-blue-600 to-blue-700' :
            colorScheme === 'purple' ? 'from-purple-600 to-purple-700' :
            colorScheme === 'green' ? 'from-green-600 to-green-700' :
            'from-orange-600 to-orange-700'
          } mx-auto mb-8`} />
          <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        colorScheme === 'blue' ? 'bg-blue-100' :
                        colorScheme === 'purple' ? 'bg-purple-100' :
                        colorScheme === 'green' ? 'bg-green-100' :
                        'bg-orange-100'
                      } ${theme === 'dark' ? 'bg-opacity-20' : ''}`}>
                        <Icon className={`w-6 h-6 ${getAccentColor()}`} />
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className={`text-lg font-medium ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          } hover:${getAccentColor()} transition-colors duration-300`}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                        theme === 'dark'
                          ? 'bg-gray-900 text-gray-400 hover:text-white'
                          : 'bg-gray-100 text-gray-600 hover:text-gray-900'
                      }`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-opacity-50 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-600'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                    } ${
                      colorScheme === 'blue' ? 'focus:ring-blue-500' :
                      colorScheme === 'purple' ? 'focus:ring-purple-500' :
                      colorScheme === 'green' ? 'focus:ring-green-500' :
                      'focus:ring-orange-500'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-opacity-50 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-600'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                    } ${
                      colorScheme === 'blue' ? 'focus:ring-blue-500' :
                      colorScheme === 'purple' ? 'focus:ring-purple-500' :
                      colorScheme === 'green' ? 'focus:ring-green-500' :
                      'focus:ring-orange-500'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-opacity-50 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                  } ${
                    colorScheme === 'blue' ? 'focus:ring-blue-500' :
                    colorScheme === 'purple' ? 'focus:ring-purple-500' :
                    colorScheme === 'green' ? 'focus:ring-green-500' :
                    'focus:ring-orange-500'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-opacity-50 resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                  } ${
                    colorScheme === 'blue' ? 'focus:ring-blue-500' :
                    colorScheme === 'purple' ? 'focus:ring-purple-500' :
                    colorScheme === 'green' ? 'focus:ring-green-500' :
                    'focus:ring-orange-500'
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${getButtonClasses()} text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
