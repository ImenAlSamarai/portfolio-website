// Connected network particle animation using Paper.js with theme support
window.addEventListener('load', function() {
    if (typeof paper === 'undefined') {
        console.error('Paper.js not loaded');
        return;
    }

    const canvas = document.getElementById('particle-canvas');
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }

    paper.setup(canvas);

    const particles = [];
    const particleCount = 30;
    const connectionDistance = 180;
    let connections = [];

    // Get current theme colors
    function getThemeColors() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            return {
                particle: new paper.Color(49/255, 130/255, 206/255),
                connection: new paper.Color(49/255, 130/255, 206/255)
            };
        } else {
            return {
                particle: new paper.Color(100/255, 255/255, 218/255),
                connection: new paper.Color(100/255, 255/255, 218/255)
            };
        }
    }

    class NetworkParticle {
        constructor() {
            this.position = new paper.Point(
                Math.random() * paper.view.size.width,
                Math.random() * paper.view.size.height
            );
            this.velocity = new paper.Point(
                (Math.random() - 0.5) * 0.8,
                (Math.random() - 0.5) * 0.8
            );
            this.radius = Math.random() * 2 + 2;
            
            // Random opacity between 0.3 and 0.7 (around 0.5 average)
            this.opacity = Math.random() * 0.4 + 0.3;
            
            const colors = getThemeColors();
            const particleColor = colors.particle.clone();
            particleColor.alpha = this.opacity;
            
            this.circle = new paper.Path.Circle({
                center: this.position,
                radius: this.radius,
                fillColor: particleColor
            });
        }

        update() {
            // Update position
            this.position = this.position.add(this.velocity);
            
            // Bounce off edges with slight randomness
            if (this.position.x <= this.radius || this.position.x >= paper.view.size.width - this.radius) {
                this.velocity.x *= -0.9;
                this.velocity.y += (Math.random() - 0.5) * 0.1;
                this.position.x = Math.max(this.radius, Math.min(paper.view.size.width - this.radius, this.position.x));
            }
            if (this.position.y <= this.radius || this.position.y >= paper.view.size.height - this.radius) {
                this.velocity.y *= -0.9;
                this.velocity.x += (Math.random() - 0.5) * 0.1;
                this.position.y = Math.max(this.radius, Math.min(paper.view.size.height - this.radius, this.position.y));
            }
            
            // Update visual position
            this.circle.position = this.position;
        }

        updateTheme() {
            const colors = getThemeColors();
            const particleColor = colors.particle.clone();
            particleColor.alpha = this.opacity;
            this.circle.fillColor = particleColor;
        }

        destroy() {
            if (this.circle) {
                this.circle.remove();
            }
        }
    }

    function updateConnections() {
        // Remove all existing connections
        connections.forEach(connection => connection.remove());
        connections = [];

        const colors = getThemeColors();
        
        // Create new connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const distance = particles[i].position.getDistance(particles[j].position);
                
                if (distance < connectionDistance) {
                    const opacity = (1 - (distance / connectionDistance)) * 0.4;
                    const connectionColor = colors.connection.clone();
                    connectionColor.alpha = opacity;
                    
                    const line = new paper.Path.Line({
                        from: particles[i].position,
                        to: particles[j].position,
                        strokeColor: connectionColor,
                        strokeWidth: Math.max(0.5, opacity * 2)
                    });
                    
                    connections.push(line);
                }
            }
        }
    }

    function initializeParticles() {
        // Clear existing particles and connections
        particles.forEach(particle => particle.destroy());
        connections.forEach(connection => connection.remove());
        particles.length = 0;
        connections = [];
        
        // Create new particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new NetworkParticle());
        }
        
        // Initial connections
        updateConnections();
    }

    function updateTheme() {
        particles.forEach(particle => particle.updateTheme());
        updateConnections(); // Recreate connections with new colors
    }

    function animate() {
        // Update all particles
        particles.forEach(particle => particle.update());
        
        // Update connections every frame so they move with particles
        updateConnections();
    }

    function handleResize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        paper.view.viewSize = new paper.Size(rect.width, rect.height);
        
        // Adjust particles that are now outside bounds
        particles.forEach(particle => {
            if (particle.position.x > paper.view.size.width) {
                particle.position.x = paper.view.size.width - particle.radius;
            }
            if (particle.position.y > paper.view.size.height) {
                particle.position.y = paper.view.size.height - particle.radius;
            }
            particle.circle.position = particle.position;
        });
        
        // Update connections after resize
        updateConnections();
    }

    // Set up Paper.js events
    paper.view.onFrame = animate;
    paper.view.onResize = handleResize;

    // Initialize everything
    initializeParticles();
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    
    // Listen for theme changes
    const themeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                updateTheme();
            }
        });
    });
    
    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
    
    console.log('Network particle animation initialized with', particleCount, 'particles and dynamic connections!');
});
