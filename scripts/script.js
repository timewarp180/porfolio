// Updated data structures
const projects = [
    {
        "title": "Pentest Lab Simulator 🔍",
        "description": "A self-hosted penetration testing lab featuring intentionally vulnerable web applications, networks, and systems for ethical hacking practice.",
        "tech": ["Kali-Linux", "Metasploit", "Burp-Suite", "Python", "Docker", "Nmap", "SQLmap"],
        "image": "assets/images/pentest-lab.jpg",
        "demo": "",
        "code": ""
    },
    {
        title: "🩺Pebbles NCLEX Master Pro | Nurse Exam Prep Platform",
        description: "Your smart companion for nursing licensure success A clinically-focused web application for NCLEX-RN® preparation with advanced analytics",
        tech: ["HTML", "CSS", "Javascript", "Bootstrap", "Chart.js", "Sortable.js", "jsPDF"],
        image: "assets/images/proj1.png",
        demo: "https://timewarp180.github.io/NCLEXV2/",
        code: "https://github.com/timewarp180/NCLEXV2"
    },
    {
        title: "Case Study Practice Platform 🏥",
        description: "A web-based quiz application designed for medical professionals to practice clinical case studies with detailed analytics.",
        tech: ["HTML", "CSS", "Javascript", "Bootstrap", "Chart.js", "Sortable.js", "jsPDF"],
        image: "assets/images/drpebs.jpg",
        demo: "https://timewarp180.github.io/NCLEX-Case-Study/",
        code: "https://github.com/timewarp180/NCLEX-Case-Study"
    },
    {
        title: "E-Commerce Platform",
        description: "Built with React & Node.js",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        image: "https://source.unsplash.com/random/800x600/?ecommerce",
        demo: "#",
        code: "#"
    },
    // Add more projects...
];

const skills = [
    // Existing Web skills
    { name: "HTML5", icon: "fab fa-html5", level: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
    { name: "JavaScript", icon: "fab fa-js", level: 88 },
    { name: "React", icon: "fab fa-react", level: 85 },
    { name: "Node.js", icon: "fab fa-node", level: 82 },
    { name: "Git", icon: "fab fa-git-alt", level: 90 },
    { name: "Python", icon: "fab fa-python", level: 80 },
    { name: "Docker", icon: "fab fa-docker", level: 75 },
    { name: "PHP", icon: "fab fa-php", level: 85 },
    { name: "Laravel", icon: "fab fa-laravel", level: 83 },

    // Cybersecurity tools
    { name: "Metasploit", icon: "fas fa-shield-alt", level: 78 },
    { name: "Burp Suite", icon: "fas fa-bug", level: 82 },
    { name: "Wireshark", icon: "fas fa-network-wired", level: 80 },
    { name: "Nmap", icon: "fas fa-search-location", level: 85 },
    { name: "Nikto", icon: "fas fa-shield-virus", level: 75 },
    { name: "Gobuster/ Dirb", icon: "fas fa-terminal", level: 77 },
    { name: "SQLmap", icon: "fas fa-database", level: 80 },
    { name: "John the Ripper", icon: "fas fa-unlock-alt", level: 75 },
    { name: "Aircrack-ng", icon: "fas fa-wifi", level: 78 }
];

const testimonials = [
    {
        "text": "Jason didn't just test our security—he stress-tested it like a true cyber-ninja. Our systems have never been stronger!",
        "author": "Jemmar Herrera",
        "role": "Ethical Hacker | Cybersecurity Consultant"
    },
    {
        "text": "Jason's penetration testing skills are next-level. He found vulnerabilities we never knew existed and helped us secure our infrastructure before any real threats could.",
        "author": "Marcus Reynolds",
        "role": "CTO at CipherShield Security"
    },    
    // Add more testimonials...
];

// Initialize projects with images and filters
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const techStack = project.tech.map(tech => `
            <span class="badge bg-primary" data-filter="${tech.toLowerCase()}">${tech}</span>
        `).join('');
        
            const projectCard = `
            <div class="col-md-4 fade-in project-item" data-tech="${project.tech.join(',').toLowerCase()}">
                <div class="project-card">
                    <div class="project-image" style="background-image: url('${project.image}')"></div>
                    <div class="project-links">
                        <a href="${project.demo}" class="btn btn-sm btn-primary">Live Demo</a>
                        <a href="${project.code}" class="btn btn-sm btn-outline-light">GitHub</a>
                    </div>
                    <div class="project-card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-stack">${techStack}</div>
                    </div>
                </div>
            </div>
        `;
        projectGrid.innerHTML += projectCard;
    });
}

// Project Filter System
document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.dataset.filter;
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
            btn.style.transform = 'none';
        });
        this.classList.add('active');
        this.style.transform = 'translateY(-2px)';

        document.querySelectorAll('.project-item').forEach(item => {
            const tech = item.dataset.tech.split(',');
            if (filter === 'all' || tech.includes(filter)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.visibility = 'visible';
                }, 50);
            } else {
                item.style.opacity = 0;
                item.style.visibility = 'hidden';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Skills Chart
function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillItem = `
            <div class="skill-item fade-in" data-level="${skill.level}%">
                <i class="${skill.icon} fa-3x"></i>
                <h4>${skill.name}</h4>
            </div>
        `;
        skillsGrid.innerHTML += skillItem;
    });
}

// Scroll animations
function checkScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function initSkillsChart() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: skills.map(skill => skill.name),
            datasets: [{
                label: 'Skill Level',
                data: skills.map(skill => skill.level),
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                pointBackgroundColor: '#2ecc71',
                pointBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { color: 'var(--light-color)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: 'var(--light-color)' }
                }
            }
        }
    });
}

// Terminal Animation
function initTerminal() {
    const terminalBody = document.querySelector('.terminal-body');
    setTimeout(() => {
        terminalBody.innerHTML += `
            <span class="success" style="animation-delay: 7.5s">> Access granted! Welcome to the system.</span>
            <span style="animation-delay: 8.5s">> Ready to build amazing things!</span>
        `;
    }, 3500);
}

// Update initialize function
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();  // Now properly defined
    loadTestimonials();
    initSkillsChart();
    initTerminal();
    initCarousel();
    initFilters();
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // GSAP Animations
    gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "power4.out" });
    gsap.from(".hero-content", { duration: 1.5, x: -100, opacity: 0, ease: "elastic.out(1, 0.3)" });

    // ScrollTrigger animations
    gsap.utils.toArray(".project-card").forEach(card => {
        ScrollTrigger.create({
            trigger: card,
            start: "top center",
            onEnter: () => card.classList.add('active'),
            once: true
        });
    });
});

function initFilters() {
    // Trigger 'All' filter on initial load
    const allFilter = document.querySelector('[data-filter="all"]');
    if (allFilter) {
        allFilter.click();
    }
}

// Add these new functions
function loadTestimonials() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    testimonials.forEach(testimonial => {
        const card = `
            <div class="col-md-4 fade-in">
                <div class="testimonial-card">
                    <div class="testimonial-text">
                        <p>${testimonial.text}</p>
                        <h5>${testimonial.author}</h5>
                        <small>${testimonial.role}</small>
                    </div>
                </div>
            </div>
        `;
        testimonialGrid.innerHTML += card;
    });
}

// Add carousel functionality
let currentSlide = 0;
// Updated carousel function
function initCarousel() {
    const skillsGrid = document.querySelector('.skills-grid');
    const arrowLeft = document.querySelector('.left-arrow');
    const arrowRight = document.querySelector('.right-arrow');
    let currentSlide = 0;
    
    function getItemsPerView() {
        const containerWidth = document.querySelector('.skills-container').offsetWidth;
        return Math.floor(containerWidth / 180);
    }

    function calculateMaxSlides() {
        const itemsPerView = getItemsPerView();
        return Math.max(0, Math.ceil(skills.length / itemsPerView) - 1);
    }

    function updateArrows() {
        const maxSlides = calculateMaxSlides();
        arrowLeft.style.visibility = currentSlide === 0 ? 'hidden' : 'visible';
        arrowRight.style.visibility = currentSlide >= maxSlides ? 'hidden' : 'visible';
    }

    function moveCarousel() {
        const itemsPerView = getItemsPerView();
        const itemWidth = 180;
        const maxTranslate = (skills.length - itemsPerView) * itemWidth;
        let translateX = currentSlide * itemsPerView * itemWidth;

        // Ensure we don't go past the last item
        translateX = Math.min(translateX, maxTranslate);
        
        skillsGrid.style.transform = `translateX(-${translateX}px)`;
        updateArrows();
    }

    arrowLeft.addEventListener('click', () => {
        if (currentSlide > 0) currentSlide--;
        moveCarousel();
    });

    arrowRight.addEventListener('click', () => {
        const maxSlides = calculateMaxSlides();
        if (currentSlide < maxSlides) currentSlide++;
        moveCarousel();
    });

    window.addEventListener('resize', () => {
        currentSlide = 0;
        moveCarousel();
    });

    // Initialize
    updateArrows();
    moveCarousel();
}