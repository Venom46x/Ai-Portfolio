// Projects data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A modern e-commerce solution with real-time inventory and payment processing.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "http://static.photos/technology/640x360/1",
        link: "#"
    },
    {
        title: "Portfolio Dashboard",
        description: "Interactive dashboard for creative professionals to showcase their work.",
        tags: ["Vue.js", "Firebase", "Tailwind"],
        image: "http://static.photos/minimal/640x360/2",
        link: "#"
    },
    {
        title: "Health Tracking App",
        description: "Mobile-first application for tracking fitness and nutrition goals.",
        tags: ["React Native", "GraphQL", "AWS"],
        image: "http://static.photos/wellness/640x360/3",
        link: "#"
    },
    {
        title: "Design System",
        description: "Comprehensive design system for enterprise applications.",
        tags: ["Figma", "Storybook", "Sass"],
        image: "http://static.photos/abstract/640x360/4",
        link: "#"
    },
    {
        title: "AI Content Generator",
        description: "Platform for generating marketing content using AI.",
        tags: ["Python", "TensorFlow", "Flask"],
        image: "http://static.photos/technology/640x360/5",
        link: "#"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media managers.",
        tags: ["Next.js", "D3.js", "PostgreSQL"],
        image: "http://static.photos/office/640x360/6",
        link: "#"
    }
];

// Load projects
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300';
        projectCard.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1">
                    View Project <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Initialize feather icons after dynamic content is loaded
    feather.replace();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});