// Force LIGHT mode only - no toggle button
document.documentElement.setAttribute('data-theme', 'light');
document.documentElement.style.setProperty('--bg-color', '#f8fafc');
document.documentElement.style.setProperty('--text-primary', '#1a202c');
console.log('Site locked to LIGHT mode only');

// Main JavaScript for the portfolio
document.addEventListener('DOMContentLoaded', function() {



    // Load experience data
    function loadExperience() {
        const experienceContainer = document.getElementById('experience-content');
        if (!experienceContainer || !window.portfolioData) return;

        const experienceHTML = window.portfolioData.experience.map(job => `
            <div class="experience-item">
                <div class="experience-header">
                    <div>
                        <h3 class="experience-title">${job.title}</h3>
                        <a href="${job.companyUrl}" class="experience-company" target="_blank">${job.company}</a>
                    </div>
                    <div class="experience-range">${job.range}</div>
                </div>
                <div class="experience-location">${job.location}</div>
                <ul class="experience-description">
                    ${job.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
                ${job.tech ? `
                    <ul class="experience-tech-list">
                        ${job.tech.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `).join('');

        experienceContainer.innerHTML = experienceHTML;
    }

    // Load open-source projects
    function loadOpenSourceProjects() {
        const openSourceContainer = document.getElementById('open-source-projects-grid');
        if (!openSourceContainer || !window.portfolioData) return;

        const openSourceHTML = window.portfolioData.featuredProjects.map((project, index) => `
            <div class="open-source-project">
                <div class="project-content">
                    <div class="project-overline">Open-Source Project</div>
                    <h3 class="project-title">
                        <a href="${project.external}" target="_blank">${project.title}</a>
                    </h3>
                    <div class="project-description">
                        <p>${project.description}</p>
                    </div>
                    ${project.marketValidation || project.businessModel ? `
                        <div class="project-business-info">
                            ${project.liveDemo ? `<div class="business-metric"><strong>Live Demo:</strong> <a href="${project.liveDemo}" target="_blank">Research Radar Substack</a></div>` : ''}
                            ${project.marketValidation ? `<div class="business-metric"><strong>Market Validation:</strong> ${project.marketValidation}</div>` : ''}
                            ${project.businessModel ? `<div class="business-metric"><strong>Business Model:</strong> ${project.businessModel}</div>` : ''}
                        </div>
                    ` : ''}
                    ${project.publications ? `
                        <div class="project-publications">
                            <h4>Key Publication:</h4>
                            ${project.publications.map(pub => `
                                <div class="publication-item">
                                    <a href="${pub.url}" target="_blank" class="publication-link">
                                        <strong>${pub.title}</strong>
                                    </a>
                                    <div class="publication-journal">${pub.journal}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    <ul class="project-tech-list">
                        ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" aria-label="GitHub Link">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="${project.external}" target="_blank" aria-label="External Link">
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="project-image">
                    <a href="${project.external}" target="_blank">
                        <img src="${project.image}" alt="${project.title}" />
                    </a>
                </div>
            </div>
        `).join('');

        openSourceContainer.innerHTML = openSourceHTML;
    }

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize all data loading
    loadExperience();
    loadOpenSourceProjects();



    console.log('Portfolio loaded successfully!');
});
