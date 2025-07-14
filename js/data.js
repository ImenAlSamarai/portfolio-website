// Data for the portfolio website
const portfolioData = {
    // Experience data
    experience: [
        {
            title: "Lead Quantitative Researcher",
            company: "TD Securities",
            companyUrl: "https://www.tdsecurities.com/",
            location: "London, UK",
            range: "Oct 2020 – Jun 2024",
            tech: ["Python", "C++", "SQL", "TensorFlow", "scikit-learn", "NLP", "Random Forest", "LSTM", "Bloomberg API", "Reuters", "Docker", "Airflow", "AWS", "Git", "Backtesting", "Fixed Income", "Portfolio Optimization"],
            description: [
                "Designed and built TD's fixed income research platform from scratch — from signal generation to backtesting and real-time analytics",
                "Developed machine learning and NLP-based signals (e.g. central bank sentiment) with validated alpha and P&L impact",
                "Created valuation models across 60+ bond issuers in 17 currencies used by multiple trading desks",
                "Delivered a production-grade platform in collaboration with IT; drove adoption firm-wide",
                "Hired and led a 7-person quant team; scaled research to FX and commodities"
           ]
        },
        {
            title: "Lead Data Scientist / ML Engineer",
            company: "Swiss Life",
            companyUrl: "https://www.swisslife.com/",
            location: "Paris, France",
            range: "Nov 2018 – Oct 2020",
            tech: ["Python", "TensorFlow", "PyTorch", "LSTM", "Genetic Algorithms", "scikit-learn", "Pandas", "NumPy", "SQL", "AWS", "Docker", "CI/CD", "Portfolio Optimization", "Risk Modeling"],
            description: [
                "Designed and deployed a production-grade, multi-factor robo-advisory engine combining LSTM models for temporal signal detection with genetic algorithms for portfolio optimization.",
                "Built end-to-end ML pipelines for automated asset selection, client-specific rebalancing, and real-time risk profiling — enabling dynamic portfolio construction at scale.",
                "Acted as technical lead, scaling the team from individual contributor to managing 3 data scientists; structured feedback loops with asset managers to iterate on product-market fit.",
                "Delivered a fully operational, AI-driven portfolio management system that personalized investment strategies for thousands of clients while reducing manual overhead for advisors."
            ]
        },
        {
            title: "Senior Research Scientist / Assistant Professor",
            company: "CERN",
            companyUrl: "https://home.cern/",
            location: "Geneva, Switzerland",
            range: "Aug 2016 – Nov 2018",
            tech: ["Python", "C++", "ROOT", "Random Forest", "scikit-learn", "Distributed Computing", "Statistical Analysis", "Signal Processing", "Large-scale Data Analysis", "HPC"],
            description: [
                "Led machine learning research in signal detection for astrophysical neutrinos, building Random Forest-based classifiers to extract weak signals from high-noise data environments.",
                "Supervised 3 PhD researchers and collaborated across international institutions to develop scalable analysis frameworks for multi-terabyte scientific datasets.",
                "Co-authored the first identification of blazars as cosmic neutrino sources — a breakthrough published in *Science* and recognized by the U.S. NSF as a landmark in astrophysics."
            ]
        },
        {
            title: "Academic Researcher",
            company: "LPNHE Paris 6",
            companyUrl: "https://lpnhe.in2p3.fr/",
            location: "Paris, France",
            range: "May 2013 – Aug 2016",
            tech: ["C++", "Monte Carlo Simulation", "ROOT", "Python", "Statistical Modeling", "Signal Processing", "HPC", "Linux", "Git", "Mathematical Modeling"],
            description: [
                "Developed a Monte Carlo simulation framework in C++ for modeling radio signals from cosmic ray showers, contributing to detector design for large-scale experiments.",
                "Led simulation and analysis across 4 competitive projects, optimizing signal extraction strategies under physical constraints.",
                "Enabled €7M experimental deployment in Argentina through competitive proposal modeling and international collaboration."
            ]
        },
        {
            title: "Visiting Scientist & Assistant Professor",
            company: "Michigan State University / Université Aix-Marseille",
            companyUrl: "https://www.univ-amu.fr/",
            location: "USA / France",
            range: "Jan 2012 – Apr 2013",
            tech: ["Python", "C++", "Image Processing", "Real-time Systems", "Automation", "Data Pipeline", "Multi-modal Analysis", "Linux", "Astronomical Software"],
            description: [
                "Built real-time image processing pipelines for autonomous telescope networks, enabling near-instant detection of transient astrophysical events.",
                "Integrated multimodal astronomical data streams for high-energy event identification, advancing early-warning systems for rare cosmic phenomena.",
                "Taught undergraduate and graduate courses in physics, mathematics, and statistics, while mentoring early-career researchers."
            ]
        }
    ],

    // Open-source projects data (using featuredProjects for compatibility)
    featuredProjects: [
        {
            title: "MBR Simulation: Novel Cosmic Ray Detection Framework",
            description: "Developed a comprehensive C++ simulation framework for detecting ultra-high energy cosmic rays through Molecular Bremsstrahlung Radiation (MBR), implementing my published phenomenological model. This novel 24/7 detection technique complements traditional fluorescence methods, enabling continuous cosmic ray observations. The simulation directly supported the GIGAS experiment at Pierre Auger Observatory.",
            tech: ["C++", "ROOT", "Monte Carlo", "Signal Processing", "Atmospheric Physics", "Radio Astronomy", "Python Interface", "XML Configuration"],
            github: "https://github.com/ImenAlSamarai/MBR-simulation",
            external: "https://arxiv.org/abs/1409.5051",
            image: "img/ET.png",
            publications: [
                {
                    title: "An Estimate of the Spectral Intensity Expected from the Molecular Bremsstrahlung Radiation in Extensive Air Showers",
                    journal: "Astroparticle Physics 67 (2015) 26-32",
                    url: "https://arxiv.org/abs/1409.5051"
                }
            ]
        },
        {
            title: "Multi-Agent Portfolio Optimization System",
            description: "Built a quantitative trading system implementing multi-agent architecture for systematic portfolio management. Features independent Conservative, Growth, and Balanced agents coordinated by a Strategic Agent Module, with comprehensive risk management including VaR calculations, drawdown analysis, and performance attribution. Includes real-time market data integration and institutional-grade backtesting framework.",
            tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "yFinance", "Risk Management", "Multi-Agent Systems", "Backtesting", "Statistical Analysis"],
            github: "https://github.com/ImenAlSamarai/portfolio-system-gaming",
            external: "https://github.com/ImenAlSamarai/portfolio-system-gaming",
            image: "img/portfolio_performance_analysis.png"
        },
        {
            title: "AI Research Intelligence Platform",
            description: "Built an autonomous AI-powered research intelligence platform that monitors predefined domains (Physics, Finance, Biology), processes thousands of research papers daily, and generates market-ready content. Features multi-agent architecture with specialized AI agents for paper selection, content generation, and automated publishing workflows. Live content published daily on Research Radar Substack, demonstrating production-scale AI content generation with real audience engagement.",
            tech: ["Python", "Multi-Agent AI", "LLMs", "ArXiv API", "MongoDB", "NLP", "Content Generation", "Automated Publishing", "Image Generation", "Production ML"],
            github: "https://github.com/ImenAlSamarai/research-bot",
            external: "https://substack.com/@researchradar?utm_source=portfolio",
            image: "img/research_bot_diagram.png",
            liveDemo: "https://substack.com/@researchradar?utm_source=portfolio",
            substack: "https://substack.com/@researchradar?utm_source=portfolio",
            marketValidation: "Live Substack publication with daily AI-generated research content",
            businessModel: "SaaS platform for research professionals, media companies, and investment firms",
            marketSize: "$12B+ content marketing industry"
        }
    ]
};

// Export data for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
} else {
    window.portfolioData = portfolioData;
}