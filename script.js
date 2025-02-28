// Modern Cyberpunk + Apple Design JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const header = document.querySelector('header');
    const themeToggle = document.querySelector('.theme-toggle');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');
    const terminalCursor = document.querySelector('.cursor');
    const glitchTitle = document.querySelector('.glitch');
    const skillItems = document.querySelectorAll('.skill-item');
    const projectCards = document.querySelectorAll('.project-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Dark/Light Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark-mode');
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', '');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Terminal typing effect
    let terminalCommands = [
        { command: 'whoami', response: 'AI researcher passionate about foundational models and scientific applications' },
        { command: 'cat research_interests.txt', response: 'Structure Prediction, Scientific Machine Learning, AI for Drug Discovery, Large Language Models, Generative AI' },
        { command: 'location', response: 'Beijing, China' },
        { command: 'education', response: 'Bachelor of Software Engineering, Tsinghua University (2025)' }
    ];
    
    let currentCommand = 0;
    let isTyping = false;
    let commandText = '';
    let responseText = '';
    let charIndex = 0;
    
    function typeTerminal() {
        if (currentCommand >= terminalCommands.length) return;
        
        let commandLine = document.querySelectorAll('.line')[currentCommand];
        let commandSpan = commandLine.querySelector('.command');
        let responseLine = document.querySelectorAll('.response')[currentCommand];
        
        if (!isTyping) {
            // Type command
            if (charIndex < terminalCommands[currentCommand].command.length) {
                commandText += terminalCommands[currentCommand].command[charIndex];
                commandSpan.textContent = commandText;
                charIndex++;
                setTimeout(typeTerminal, 50 + Math.random() * 50);
            } else {
                isTyping = true;
                charIndex = 0;
                setTimeout(typeTerminal, 500);
            }
        } else {
            // Type response
            if (charIndex < terminalCommands[currentCommand].response.length) {
                responseText += terminalCommands[currentCommand].response[charIndex];
                responseLine.textContent = responseText;
                charIndex++;
                setTimeout(typeTerminal, 10 + Math.random() * 20);
            } else {
                isTyping = false;
                charIndex = 0;
                commandText = '';
                responseText = '';
                currentCommand++;
                setTimeout(typeTerminal, 500);
            }
        }
    }
    
    // Start terminal typing effect with a delay
    setTimeout(typeTerminal, 1000);
    
    // Glitch effect on hover for glitch title
    if (glitchTitle) {
        glitchTitle.addEventListener('mouseover', function() {
            glitchTitle.classList.add('glitching');
        });
        
        glitchTitle.addEventListener('mouseout', function() {
            glitchTitle.classList.remove('glitching');
        });
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            if (hero) {
                hero.style.backgroundPosition = `${50 + (mouseX - 0.5) * 5}% ${50 + (mouseY - 0.5) * 5}%`;
            }
        }
    });
    
    // Intersection Observer for animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .timeline-item, .skill-category, .highlight-item').forEach(item => {
        observer.observe(item);
    });
    
    // Update current year in footer copyright
    const yearElement = document.querySelector('footer p span.year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Add neon glow to skill items on hover
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 0 15px var(--primary-glow), 0 0 30px var(--primary-glow)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.boxShadow = '';
        });
    });
}); 