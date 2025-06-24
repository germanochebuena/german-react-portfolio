import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();

  const projects = {
    '310-nutrition': {
      title: '310 Nutrition (US)',
      description: 'Led development of custom site-wide sections and templates; hybrid/headless setup using Webpack; seasonal team coordination.',
      longDescription: `
        As Shopify Lead Developer at 310 Nutrition, I led the development of a comprehensive e-commerce platform serving a major US nutrition brand. This project involved migrating from a headless architecture to a native Shopify setup while maintaining performance and user experience.

        Key achievements:
        • Led performance optimization initiatives that improved page load times by 40%
        • Successfully migrated themes from headless to native Shopify architecture
        • Built custom integrations including Mach OMS and AI chatbot using Storefront API
        • Directed Rebuy Smart Cart implementation and CRO-driven cart drawer redesign
        • Set up comprehensive A/B testing frameworks using GTM, VWO, and Varify.io
        • Managed hiring, onboarding, and technical assessments for development team
        • Oversaw Klaviyo and Postscript integration for advanced marketing campaigns
        • Resolved fraud attacks through PayPal API integration and advanced detection tools
        • Implemented TikTok Shop (US) with full certification, compliance, and landing page strategy
      `,
      technologies: ['Shopify', 'React', 'Webpack', 'Storefront API', 'Ruby', 'GTM', 'VWO', 'Klaviyo', 'TikTok Shop API'],
      image: '/310-nutrition.png',
      demoLink: '/product-list',
      githubLink: null,
      challenges: [
        'Migrating from headless to native Shopify architecture without downtime',
        'Implementing complex A/B testing frameworks across multiple platforms',
        'Integrating multiple third-party services (Mach OMS, AI chatbot, TikTok Shop)',
        'Managing fraud prevention while maintaining user experience'
      ],
      solutions: [
        'Developed phased migration strategy with rollback capabilities',
        'Created centralized testing framework using GTM and VWO',
        'Built modular integration system for third-party services',
        'Implemented multi-layered fraud detection with PayPal API'
      ],
      role: 'Shopify Lead Developer',
      duration: 'Aug 2024 – May 2025',
      company: '310 Nutrition LLC, US'
    },
    'panacea-zelesta-vilix': {
      title: 'Panacea, Zelesta, Vilix (NL)',
      description: 'Frontend development of custom sections from Figma; implemented A/B testing and speed optimizations.',
      longDescription: `
        Worked on multiple Dutch e-commerce projects, delivering custom Shopify sections and implementing performance optimizations. These projects focused on creating visually appealing, high-converting storefronts with data-driven improvements.
      `,
      technologies: ['Shopify', 'Figma', 'A/B Testing', 'Performance Optimization', 'CSS3', 'JavaScript'],
      image: '/panacea.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Creating pixel-perfect sections from complex Figma designs', 'Implementing A/B testing without affecting site performance'],
      solutions: ['Used CSS Grid and Flexbox for precise layouts', 'Built lightweight testing framework with minimal overhead'],
      role: 'Shopify Developer',
      duration: '2022-2024',
      company: 'Rivka Development, Mexico'
    },
    'celi': {
      title: 'CELI (CA)',
      description: 'Full Shopify rebuild and migration from WooCommerce; delivered custom sections, third-party integrations, and advanced metaobjects.',
      longDescription: `
        Complete Shopify rebuild and migration project for CELI, a Canadian e-commerce brand. Successfully migrated from WooCommerce to Shopify while maintaining all functionality and improving performance.
      `,
      technologies: ['Shopify', 'WooCommerce Migration', 'Third-party APIs', 'Metaobjects', 'PHP', 'MySQL'],
      image: '/celi.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Migrating complex WooCommerce functionality to Shopify', 'Maintaining data integrity during migration'],
      solutions: ['Developed custom migration scripts', 'Created Shopify equivalents for WooCommerce features'],
      role: 'Shopify Fullstack Developer',
      duration: '2022-2024',
      company: 'Rivka Development, Mexico'
    },
    'calpak-travel': {
      title: 'Calpak Travel (US)',
      description: 'Contributed to PDP/PLP layouts, swatches, quick-add functionality, and ADA refactor.',
      longDescription: `
        Worked on improving the user experience for Calpak Travel's product pages, focusing on accessibility and conversion optimization.
      `,
      technologies: ['Shopify', 'ADA Compliance', 'PDP/PLP', 'Quick Add', 'CSS3', 'JavaScript'],
      image: '/calpak.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Implementing ADA compliance across complex product layouts', 'Creating seamless quick-add functionality'],
      solutions: ['Developed accessible component library', 'Built optimized quick-add system with error handling'],
      role: 'Shopify Developer',
      duration: '2022-2024',
      company: 'Rivka Development, Mexico'
    },
    'dovetail-workwear': {
      title: 'Dovetail Workwear (US)',
      description: 'Built filters, Ruby scripts, swatches, and checkout features; integrated Klaviyo API and A/B test scripting.',
      longDescription: `
        Developed comprehensive e-commerce features for Dovetail Workwear, including advanced filtering, custom checkout experiences, and marketing automation.
      `,
      technologies: ['Shopify', 'Ruby', 'Klaviyo API', 'A/B Testing', 'Checkout', 'GraphQL'],
      image: '/dovetail.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Creating complex product filters with multiple criteria', 'Integrating Klaviyo for advanced marketing automation'],
      solutions: ['Built modular filter system with GraphQL', 'Developed custom Klaviyo integration with webhooks'],
      role: 'Shopify Fullstack Developer',
      duration: '2022-2024',
      company: 'Rivka Development, Mexico'
    },
    'lovepop': {
      title: 'Lovepop (US)',
      description: 'Developed React-based gift builder, homepage visuals, and megamenu features.',
      longDescription: `
        Created interactive features for Lovepop's gift-focused e-commerce platform, including a custom gift builder and enhanced navigation.
      `,
      technologies: ['React', 'Shopify', 'Gift Builder', 'Megamenu', 'JavaScript', 'CSS3'],
      image: '/lovepop.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Building interactive gift builder with complex state management', 'Creating responsive megamenu with multiple levels'],
      solutions: ['Used React Context for state management', 'Implemented CSS Grid for responsive megamenu'],
      role: 'Shopify Fullstack Developer',
      duration: '2022-2024',
      company: 'Rivka Development, Mexico'
    },
    'team-diva': {
      title: 'Team Diva Real Estate (US)',
      description: 'Built IDX/MLS real estate plugin with map-based search and filters.',
      longDescription: `
        Developed a comprehensive real estate plugin for WordPress that integrates with IDX/MLS systems, providing advanced search capabilities and map-based property discovery.
      `,
      technologies: ['WordPress', 'PHP', 'IDX/MLS', 'Maps API', 'MySQL', 'JavaScript'],
      image: '/team-diva.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Integrating with multiple IDX/MLS systems', 'Creating responsive map-based search interface'],
      solutions: ['Built modular API integration system', 'Used Leaflet.js for interactive maps'],
      role: 'Full Stack Web Developer',
      duration: 'Jan 2020 – Mar 2022',
      company: 'WPBR | Digital Marketing Agency, Mexico'
    },
    'maquinsa': {
      title: 'Maquinsa (MX)',
      description: 'Custom site with Oxygen builder, ACF setup, GSAP animations, and PHP shortcodes.',
      longDescription: `
        Created a custom WordPress website using Oxygen builder with advanced custom fields, smooth GSAP animations, and custom PHP functionality.
      `,
      technologies: ['WordPress', 'Oxygen Builder', 'GSAP', 'ACF', 'PHP', 'CSS3'],
      image: '/maquinsa.png',
      demoLink: null,
      githubLink: null,
      challenges: ['Creating smooth animations without affecting performance', 'Building custom PHP shortcodes for complex functionality'],
      solutions: ['Optimized GSAP animations with proper cleanup', 'Developed modular shortcode system'],
      role: 'Full Stack Web Developer',
      duration: 'Jan 2020 – Mar 2022',
      company: 'WPBR | Digital Marketing Agency, Mexico'
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Duration:</strong> {project.duration}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Company:</strong> {project.company}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
            <div className="text-center">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=' + project.title;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage; 