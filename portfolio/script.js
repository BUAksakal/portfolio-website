// ===================================
// Dark Theme is Permanent
// ===================================
// The website now uses only dark theme

// ===================================
// Language System
// ===================================
const translations = {
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "Berke Uğur Aksakal - AI Engineering Master's Student",
            title: {
                building: "Building",
                the1: "the",
                bridge: "bridge",
                between: "between",
                humanIntent: "human intent",
                and: "and",
                machineExecution: "machine execution"
            },
            desc1: "Exploring the frontiers of machine learning,",
            desc2: "computer vision, and generative models.",
            desc3: "Bridging theory with practical application.",
            viewProjects: "View Projects",
            getInTouch: "Get in Touch"
        },
        about: {
            title: "About",
            intro: "I am an AI Engineering Master's student in Germany, passionate about the intersection of scalable software systems and advanced machine learning models.",
            work: "My work focuses on demystifying black-box algorithms and creating interpretable AI solutions. Currently researching unsupervised learning patterns in large language models.",
            hobby: "When I'm not training models, I'm exploring minimalist design, playing chess engines, or contributing to open-source libraries.",
            stat1Value: "Master's",
            stat1Label: "Student",
            stat2Value: "Germany",
            stat2Label: "Location",
            stat3Value: "AI/ML",
            stat3Label: "Focus",
            skillsTitle: "Technical Focus",
            skill1: "AI-Powered Mobile Applications",
            skill2: "Computer Vision & Real-Time Perception",
            skill3: "Human–Machine Interaction",
            skill4: "Sensor Data Processing",
            skill5: "Edge AI & Embedded Integration",
            skill6: "Applied Machine Learning Systems"
        },
        projects: {
            title: "Projects",
            moreTitle: "More Projects Coming Soon",
            moreDesc: "Currently working on exciting new AI research projects",
            project1: {
                tag: "🥇 Bachelor's Thesis",
                title: "AI Vision-Controlled Robotic Hand",
                desc: "Real-time computer vision system integrated with robotic hardware for gesture-based control. Combines deep learning, embedded systems, and sensor fusion to bridge human intent with machine execution."
            },
            project2: {
                tag: "📱 Master's Course",
                title: "AI-Powered Fitness Tracker",
                desc: "Cross-platform mobile fitness application with AI-driven workout recommendations. Combines Flutter development, Firebase backend, and Python-based analytics for personalized training insights."
            },
            project3: {
                tag: "🛰️ Industry Internship",
                title: "LiDAR-Based Mapping & SLAM",
                desc: "Real-time environment perception and mapping system using LiDAR sensors. Developed during industry internship, combining sensor processing, SLAM algorithms, and Gazebo simulation for robotics navigation."
            },
            project4: {
                tag: "💧 Industry Internship",
                title: "Smart Water Meter Monitoring System",
                desc: "Industrial IoT data engineering system for real-time smart water meter monitoring. Developed during internship at Baylan Water & Energy Meters, featuring payload decoding, multi-interface architecture, and event-driven data processing."
            },
            viewOnGithub: "View on GitHub",
            appUI: "App UI",
            aiSystem: "AI System"
        },
        contact: {
            title: "Contact",
            heading: "Let's Connect",
            text: "I'm always interested in discussing AI research, collaboration opportunities, or innovative projects. Feel free to reach out!",
            formName: "Name",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Send Message"
        },
        footer: {
            copyright: "© 2026 AI Engineering Portfolio — Designed & built by Berke Uğur Aksakal."
        }
    },
    de: {
        nav: {
            about: "Über mich",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            subtitle: "Berke Uğur Aksakal - AI Engineering Master-Student",
            title: {
                building: "Aufbau",
                the1: "der",
                bridge: "Brücke",
                between: "zwischen",
                humanIntent: "menschlicher Absicht",
                and: "und",
                machineExecution: "maschineller Ausführung"
            },
            desc1: "Erforschung der Grenzen des maschinellen Lernens,",
            desc2: "Computer Vision und generativer Modelle.",
            desc3: "Verbindung von Theorie und praktischer Anwendung.",
            viewProjects: "Projekte ansehen",
            getInTouch: "Kontakt aufnehmen"
        },
        about: {
            title: "Über mich",
            intro: "Ich bin ein AI Engineering Master-Student in Deutschland, begeistert von der Schnittstelle zwischen skalierbaren Softwaresystemen und fortgeschrittenen Machine Learning-Modellen.",
            work: "Meine Arbeit konzentriert sich auf die Entmystifizierung von Black-Box-Algorithmen und die Entwicklung interpretierbarer KI-Lösungen. Derzeit erforsche ich unüberwachte Lernmuster in großen Sprachmodellen.",
            hobby: "Wenn ich nicht gerade Modelle trainiere, erkunde ich minimalistisches Design, spiele gegen Schach-Engines oder trage zu Open-Source-Bibliotheken bei.",
            stat1Value: "Master",
            stat1Label: "Student",
            stat2Value: "Deutschland",
            stat2Label: "Standort",
            stat3Value: "KI/ML",
            stat3Label: "Fokus",
            skillsTitle: "Technischer Fokus",
            skill1: "KI-gestützte mobile Anwendungen",
            skill2: "Computer Vision & Echtzeit-Wahrnehmung",
            skill3: "Mensch-Maschine-Interaktion",
            skill4: "Sensordatenverarbeitung",
            skill5: "Edge AI & Integration eingebetteter Systeme",
            skill6: "Angewandte ML-Systeme"
        },
        projects: {
            title: "Projekte",
            moreTitle: "Weitere Projekte folgen bald",
            moreDesc: "Arbeite derzeit an spannenden neuen KI-Forschungsprojekten",
            project1: {
                tag: "🥇 Bachelorarbeit",
                title: "KI-Vision-gesteuerte Roboterhand",
                desc: "Echtzeit-Computer-Vision-System, integriert mit Roboterhardware für gestenbasierte Steuerung. Kombiniert Deep Learning, eingebettete Systeme und Sensorfusion, um menschliche Absicht mit maschineller Ausführung zu verbinden."
            },
            project2: {
                tag: "📱 Master-Kurs",
                title: "KI-gestützter Fitness-Tracker",
                desc: "Plattformübergreifende mobile Fitnessanwendung mit KI-gesteuerten Trainingsempfehlungen. Kombiniert Flutter-Entwicklung, Firebase-Backend und Python-basierte Analysen für personalisierte Trainingseinblicke."
            },
            project3: {
                tag: "🛰️ Industriepraktikum",
                title: "LiDAR-basiertes Mapping & SLAM",
                desc: "Echtzeit-Umgebungswahrnehmungs- und Kartierungssystem mit LiDAR-Sensoren. Entwickelt während eines Industriepraktikums, kombiniert Sensorverarbeitung, SLAM-Algorithmen und Gazebo-Simulation für Roboternavigation."
            },
            project4: {
                tag: "💧 Industriepraktikum",
                title: "Intelligentes Wasserzähler-System",
                desc: "Industrielles IoT-Data-Engineering-System zur Echtzeitüberwachung intelligenter Wasserzähler. Entwickelt bei Baylan Water & Energy Meters, mit Payload-Decodierung, Multi-Interface-Architektur und ereignisgesteuerter Datenverarbeitung."
            },
            viewOnGithub: "Auf GitHub ansehen",
            appUI: "App UI",
            aiSystem: "KI-System"
        },
        contact: {
            title: "Kontakt",
            heading: "Lass uns vernetzen",
            text: "Ich bin immer daran interessiert, über KI-Forschung, Kooperationsmöglichkeiten oder innovative Projekte zu diskutieren. Melde dich gerne!",
            formName: "Name",
            formEmail: "E-Mail",
            formMessage: "Nachricht",
            formSubmit: "Nachricht senden"
        },
        footer: {
            copyright: "© 2026 AI Engineering Portfolio — Entworfen & entwickelt von Berke Uğur Aksakal."
        }
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];

        // Navigate through nested object
        for (const k of keys) {
            translation = translation[k];
        }

        if (translation) {
            element.textContent = translation;

            // Also update data-word attribute if it exists (for animation effects)
            if (element.hasAttribute('data-word')) {
                element.setAttribute('data-word', translation);
            }
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    switchLanguage(currentLanguage);

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});



// ===================================
// Smooth Scroll with Offset for Fixed Nav
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// Navbar Background on Scroll
// ===================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 20px var(--shadow)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Form Submission Handler
// ===================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send data to FormSubmit
    fetch("https://formsubmit.co/ajax/berkeuguraksakal17@gmail.com", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Something went wrong. Please try again later or email me directly.");
        })
        .finally(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Hero Word Magnetic Effect
// ===================================
const heroWords = document.querySelectorAll('.hero-title .word');

heroWords.forEach(word => {
    word.addEventListener('mousemove', (e) => {
        const rect = word.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x * 0.15;
        const moveY = y * 0.15;

        word.style.transform = `translate(${moveX}px, ${moveY}px) translateY(-8px)`;
    });

    word.addEventListener('mouseleave', () => {
        word.style.transform = 'translate(0, 0)';
    });
});

// ===================================
// Description Lines Stagger Effect
// ===================================
const descLines = document.querySelectorAll('.desc-line');

descLines.forEach((line, index) => {
    line.style.animationDelay = `${0.8 + index * 0.1}s`;
    line.style.opacity = '0';
    line.style.animation = 'fadeInUp 0.6s ease forwards';
});

// ===================================
// Cursor Effect (Optional Enhancement)
// ===================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.15;

    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .word');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// ===================================
// Project Card Tilt Effect
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// const heroTitle = document.querySelector('.hero-title');
// const titleText = heroTitle.textContent;
// typeWriter(heroTitle, titleText, 30);

// ===================================
// Performance: Lazy Loading Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold;');
console.log('%cInterested in AI Engineering? Let\'s connect!', 'font-size: 14px; color: #666;');
console.log('%c💼 Check out my projects above', 'font-size: 12px; font-style: italic;');
