import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    // Show shimmer animation after 2 seconds
    const timer = setTimeout(() => {
      setShowShimmer(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: '310-nutrition',
      title: '310 Nutrition',
      description: 'Led development of custom site-wide sections and templates; hybrid/headless setup using Webpack; seasonal team coordination.',
      technologies: ['Shopify', 'React', 'Webpack', 'Storefront API', 'Ruby'],
      color: '#FE6720',
      link: 'https://310nutrition.com/',
      country: 'US',
      category: 'Shopify'
    },
    {
      id: 'panacea-zelesta-vilix',
      title: 'Panacea, Zelesta, Vilix',
      description: 'Frontend development of custom sections from Figma; implemented A/B testing and speed optimizations.',
      technologies: ['Shopify', 'Figma', 'A/B Testing', 'Performance Optimization'],
      color: '#9841f5',
      color2: '#ff2c61',
      link: 'https://www.panacearedlight.com/',
      country: 'NL',
      category: 'Shopify',
      additionalLinks: [
        { name: 'Zelesta', url: 'https://zelesta.nl/' },
        { name: 'Vilix', url: 'https://vilix.nl/' }
      ]
    },
    {
      id: 'celi',
      title: 'CELI',
      description: 'Full Shopify rebuild and migration from WooCommerce; delivered custom sections, third-party integrations, and advanced metaobjects.',
      technologies: ['Shopify', 'WooCommerce Migration', 'Third-party APIs', 'Metaobjects'],
      color: '#c2d1db',
      color2: '#000',
      link: 'https://www.shopceli.com/',
      country: 'CA',
      category: 'Shopify'
    },
    {
      id: 'calpak-travel',
      title: 'Calpak Travel',
      description: 'Contributed to PDP/PLP layouts, swatches, quick-add functionality, and ADA refactor.',
      technologies: ['Shopify', 'ADA Compliance', 'PDP/PLP', 'Quick Add'],
      color: 'rgb(247, 241, 119)',
      link: 'https://www.calpaktravel.com/',
      country: 'US',
      category: 'Shopify'
    },
    {
      id: 'dovetail-workwear',
      title: 'Dovetail Workwear',
      description: 'Built filters, Ruby scripts, swatches, and checkout features; integrated Klaviyo API and A/B test scripting.',
      technologies: ['Shopify', 'Ruby', 'Klaviyo API', 'A/B Testing', 'Checkout'],
      color: 'rgb(199, 74, 27)',
      color2: 'rgb(66, 81, 94)',
      link: 'https://dovetailworkwear.com/',
      country: 'US',
      category: 'Shopify'
    },
    {
      id: 'lovepop',
      title: 'Lovepop',
      description: 'Developed React-based gift builder, homepage visuals, and megamenu features.',
      technologies: ['React', 'Shopify', 'Gift Builder', 'Megamenu'],
      color: '#C92635',
      link: 'https://www.lovepop.com/',
      country: 'US',
      category: 'Shopify'
    },
    {
      id: 'twc',
      title: 'TWC',
      description: 'Built product cards, discount app UI (MERN stack), and GraphQL-based checkout enhancements.',
      technologies: ['MERN Stack', 'GraphQL', 'Shopify', 'React'],
      color: '#519ecf',
      link: 'https://www.thewigcompany.com/',
      country: 'US',
      category: 'Shopify'
    },
    {
      id: 'handful',
      title: 'Handful',
      description: 'Created custom filters (REST API), PDP features, and Ruby automation.',
      technologies: ['Shopify', 'REST API', 'Ruby', 'PDP Features'],
      color: '#0c4861',
      color2: '#000',
      link: 'https://handful.com/',
      country: 'US',
      category: 'Shopify'
    },
    {
      id: 'vividlite',
      title: 'VividLite',
      description: 'Delivered full visual site setup with Figma-based sections and animations.',
      technologies: ['Shopify', 'Figma', 'Animations', 'Visual Design'],
      color: '#0d379d',
      color2: '#02f2ff',
      color3: '#fedd94',
      color4: '#fc1b54',
      link: 'https://vividlite.com/',
      country: 'US',
      category: 'Shopify'
    }
  ];

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Remix.js', 'Next.js', 'Vue.js', 'jQuery'],
    shopify: ['Shopify Liquid', 'Shopify CLI', 'Ruby', 'Shopify Plus', 'Storefront API', 'REST API', 'Checkout Extensibility'],
    backend: ['PHP', 'Node.js', 'GraphQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'Webpack', 'CI/CD', 'Agile', 'Jira', 'Asana', 'ClickUp', 'Monday', 'Basecamp']
  };

  // Function to generate gradient style based on project colors
  const getGradientStyle = (project) => {
    if (project.color4) {
      // For VividLite with 4 colors
      return {
        background: `linear-gradient(135deg, ${project.color} 0%, ${project.color2} 33%, ${project.color3} 66%, ${project.color4} 100%)`
      };
    } else if (project.color2) {
      // For projects with 2 colors
      return {
        background: `linear-gradient(135deg, ${project.color} 0%, ${project.color2} 100%)`
      };
    } else {
      // For projects with 1 color - create a darker version
      const darkerColor = project.color.startsWith('rgb') 
        ? project.color.replace('rgb', 'rgba').replace(')', ', 0.7)')
        : project.color + 'CC'; // Add 80% opacity for hex colors
      return {
        background: `linear-gradient(135deg, ${project.color} 0%, ${darkerColor} 100%)`
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section with Shimmer Animation */}
      <section className={`py-20 px-4 relative overflow-hidden transition-all duration-1000 ${
        showShimmer ? 'shimmer-bg' : ''
      }`}>
        {/* Shimmer overlay */}
        {showShimmer && (
          <div className="absolute inset-0 shimmer-overlay"></div>
        )}
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Germán Nochebuena</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Shopify Full Stack Developer
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. 
            With a passion for clean code and innovative solutions, I bring ideas to life 
            through modern web technologies and creative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a href="mailto:germanochebuena@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
              germanochebuena@gmail.com
            </a>
            <span className="text-gray-400">|</span>
            <a href="tel:+522224372807" className="text-blue-600 hover:text-blue-800 font-medium">
              +52 222 437 2807
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Puebla, México / Barcelona, Spain</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shopify</h3>
              <div className="flex flex-wrap gap-2">
                {skills.shopify.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools & Workflow</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg"
                        style={getGradientStyle(project)}
                      >
                        {project.title.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.category === 'Shopify' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.category}
                          </span>
                          <span className="text-xs text-gray-500">({project.country})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Visit Site
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {project.additionalLinks && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Additional sites:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.additionalLinks.map((link, index) => (
                            <a 
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating intuitive user experiences and solving complex problems 
                through clean, maintainable code.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My journey in web development started with curiosity and has evolved 
                into a career focused on building scalable, user-friendly applications 
                that make a difference.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center">
              <img src="/german_pic.webp" alt="German Nochebuena" className="w-64 h-64 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <img 
                src="/shopify.png" 
                alt="Portfolio Logo" 
                className="h-12 w-auto mx-auto md:mx-0 mb-4"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/120x48/3B82F6/FFFFFF?text=GN';
                }}
              />
              <p className="text-gray-400">
                Full Stack Developer specialized in Shopify with 5+ years of experience delivering high-performance eCommerce solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/product-list" className="block text-gray-400 hover:text-white transition-colors">
                  Shopify Store
                </Link>
                <a href="mailto:germanochebuena@gmail.com" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://linkedin.com/in/your-linkedin-profile" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/your-github" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:germanochebuena@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-4 text-gray-400 text-sm">
                <p>Languages: Spanish (Native), English (Advanced)</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Germán Nochebuena. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 