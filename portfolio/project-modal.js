// ===================================
// Project Modal System
// ===================================

// Project data with full details in English and German
const projectsData = {
    'project-1': {
        en: {
            tag: '🥇 Bachelor\'s Thesis',
            title: 'AI Vision-Controlled Robotic Hand',
            description: 'Real-time computer vision system integrated with robotic hardware for gesture-based control. This project demonstrates end-to-end AI deployment from perception to physical actuation, combining YOLOv8 object detection, custom dataset creation, and embedded systems control. The system achieves low-latency real-time performance, bridging human intent with machine execution through computer vision and robotics integration.',
            technologies: ['Python', 'YOLOv8', 'OpenCV', 'Arduino', 'PySerial', 'Roboflow', 'NumPy', 'Servo Motors', '3D Printing'],
            features: [
                '🧠 Real-time hand detection and tracking using YOLOv8',
                '📸 Custom dataset creation with Roboflow annotation',
                '⚡ Low-latency serial communication (Python ↔ Arduino)',
                '🤖 5-finger independent servo motor control',
                '🔄 End-to-end pipeline: perception → decision → actuation',
                '🛡️ Safety features: auto-release timeout and fail-safe reset',
                '🎯 Optimized inference for real-time hardware control',
                '🔧 Hardware-aware software engineering'
            ],
            links: [
                { text: 'View on GitHub', url: 'https://github.com/BUAksakal/ai-vision-robotic-hand', icon: 'github' }
            ],
            visuals: [
                { path: 'images/robotic_hand_cad.png', caption: '3D Printed Robotic Hand Design' },
                { path: 'images/yolo_detection_grid.png', caption: 'YOLOv8 Hand Gesture Detection' }
            ]
        },
        de: {
            tag: '🥇 Bachelorarbeit',
            title: 'KI-Vision-gesteuerte Roboterhand',
            description: 'Echtzeit-Computer-Vision-System integriert mit Roboterhardware für gestenbasierte Steuerung. Dieses Projekt demonstriert eine End-to-End-KI-Bereitstellung von der Wahrnehmung bis zur physischen Betätigung und kombiniert YOLOv8-Objekterkennung, benutzerdefinierte Datensatzerstellung und Steuerung eingebetteter Systeme. Das System erreicht eine geringe Latenzzeit in Echtzeit und verbindet menschliche Absicht mit maschineller Ausführung durch die Integration von Computer Vision und Robotik.',
            technologies: ['Python', 'YOLOv8', 'OpenCV', 'Arduino', 'PySerial', 'Roboflow', 'NumPy', 'Servomotoren', '3D-Druck'],
            features: [
                '🧠 Echtzeit-Handerkennung und -verfolgung mit YOLOv8',
                '📸 Benutzerdefinierte Datensatzerstellung mit Roboflow-Annotation',
                '⚡ Serielle Kommunikation mit geringer Latenz (Python ↔ Arduino)',
                '🤖 Unabhängige Servomotorsteuerung für 5 Finger',
                '🔄 End-to-End-Pipeline: Wahrnehmung → Entscheidung → Betätigung',
                '🛡️ Sicherheitsfunktionen: Auto-Release-Timeout und Fail-Safe-Reset',
                '🎯 Optimierte Inferenz für Echtzeit-Hardwaresteuerung',
                '🔧 Hardware-nahe Softwareentwicklung'
            ],
            links: [
                { text: 'Auf GitHub ansehen', url: 'https://github.com/BUAksakal/ai-vision-robotic-hand', icon: 'github' }
            ],
            visuals: [
                { path: 'images/robotic_hand_cad.png', caption: '3D-gedrucktes Roboterhand-Design' },
                { path: 'images/yolo_detection_grid.png', caption: 'YOLOv8 Handgestenerkennung' }
            ]
        }
    },
    'project-2': {
        en: {
            tag: '📱 Master\'s Course',
            title: 'AI-Powered Fitness Tracker',
            description: 'Cross-platform mobile fitness application combining Flutter development, Firebase backend, and AI-driven workout recommendations. Developed as a Master\'s course project at Deggendorf Institute of Technology, this app demonstrates end-to-end mobile product development with cloud integration and personalized training insights based on historical activity data.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Python', 'NumPy', 'Cloud Firestore', 'Firebase Auth'],
            features: [
                '📱 Cross-platform mobile app (Android & iOS)',
                '🔐 Firebase authentication and cloud storage',
                '📊 Historical workout tracking and analytics',
                '🧠 AI-driven personalized workout recommendations',
                '⚡ Real-time data synchronization',
                '📈 Progress monitoring and visualization',
                '🎯 Rule-based recommendation engine',
                '💪 Balanced muscle group distribution suggestions'
            ],
            links: [
                { text: 'App UI Repository', url: 'https://github.com/BUAksakal/AI-FitnessTracker', icon: 'github' },
                { text: 'AI Recommendation System', url: 'https://github.com/BUAksakal/smart-fitness-recommender-system', icon: 'github' }
            ],
            visuals: [
                { path: 'images/dumbbelly_exact_ref.png', caption: 'Dumbbelly - Mobile App Interface' },
                { path: 'images/fitness_recommendation_flow.png', caption: 'AI Recommendation System Flow' }
            ]
        },
        de: {
            tag: '📱 Master-Kurs',
            title: 'KI-gestützter Fitness-Tracker',
            description: 'Plattformübergreifende mobile Fitnessanwendung, die Flutter-Entwicklung, Firebase-Backend und KI-gesteuerte Trainingsempfehlungen kombiniert. Entwickelt als Master-Kursprojekt an der Technischen Hochschule Deggendorf, demonstriert diese App eine End-to-End-Mobilproduktentwicklung mit Cloud-Integration und personalisierten Trainingseinblicken auf der Grundlage historischer Aktivitätsdaten.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Python', 'NumPy', 'Cloud Firestore', 'Firebase Auth'],
            features: [
                '📱 Plattformübergreifende mobile App (Android & iOS)',
                '🔐 Firebase-Authentifizierung und Cloud-Speicher',
                '📊 Historische Trainingsverfolgung und Analysen',
                '🧠 KI-gesteuerte personalisierte Trainingsempfehlungen',
                '⚡ Echtzeit-Datensynchronisation',
                '📈 Fortschrittsüberwachung und Visualisierung',
                '🎯 Regelbasierte Empfehlungs-Engine',
                '💪 Vorschläge für ausgewogene Muskelgruppenverteilung'
            ],
            links: [
                { text: 'App UI Repository', url: 'https://github.com/BUAksakal/AI-FitnessTracker', icon: 'github' },
                { text: 'KI-Empfehlungssystem', url: 'https://github.com/BUAksakal/smart-fitness-recommender-system', icon: 'github' }
            ],
            visuals: [
                { path: 'images/dumbbelly_exact_ref.png', caption: 'Dumbbelly - Mobile App Interface' },
                { path: 'images/fitness_recommendation_flow.png', caption: 'KI-Empfehlungssystem-Ablauf' }
            ]
        }
    },
    'project-3': {
        en: {
            tag: '🛰️ Industry Internship',
            title: 'LiDAR-Based Mapping & SLAM System',
            description: 'Real-time environment perception and mapping system developed during a long-term industry internship. The project focused on processing LiDAR sensor data, building spatial representations, and evaluating localization performance using SLAM approaches in simulation-based workflows. Emphasis on understanding real-time robotic perception, sensor behavior, and data-driven environment modeling for navigation analysis.',
            technologies: ['Python', 'Gazebo', 'LiDAR Sensors', 'SLAM', 'Robotics Simulation', 'Sensor Processing'],
            features: [
                '🛰️ LiDAR sensor data acquisition and processing',
                '🗺️ Real-time environment mapping and localization',
                '🤖 SLAM algorithm implementation and evaluation',
                '⚙️ Gazebo simulation for robotics testing',
                '📊 Sensor-based environment modeling',
                '🎯 Navigation-oriented perception workflows',
                '⚡ Real-time data handling pipelines',
                '🔬 Structured evaluation of mapping quality'
            ],
            links: [
                { text: 'View on GitHub', url: 'https://github.com/BUAksakal/lidar-slam-mapping-system', icon: 'github' }
            ],
            visuals: [
                { path: 'images/lidar_map_visualization.png', caption: 'LiDAR Occupancy Grid Map' },
                { path: 'images/gazebo_simulation_scene.png', caption: 'Gazebo Simulation Environment' }
            ]
        },
        de: {
            tag: '🛰️ Industriepraktikum',
            title: 'LiDAR-basiertes Mapping & SLAM-System',
            description: 'Echtzeit-Umgebungswahrnehmungs- und Kartierungssystem, entwickelt während eines langfristigen Industriepraktikums. Das Projekt konzentrierte sich auf die Verarbeitung von LiDAR-Sensordaten, den Aufbau räumlicher Darstellungen und die Bewertung der Lokalisierungsleistung unter Verwendung von SLAM-Ansätzen in simulationsbasierten Workflows. Schwerpunkt auf dem Verständnis von Echtzeit-Roboterwahrnehmung, Sensorverhalten und datengesteuerter Umgebungsmodellierung für die Navigationsanalyse.',
            technologies: ['Python', 'Gazebo', 'LiDAR-Sensoren', 'SLAM', 'Robotersimulation', 'Sensorverarbeitung'],
            features: [
                '🛰️ LiDAR-Sensordatenerfassung und -verarbeitung',
                '🗺️ Echtzeit-Umgebungskartierung und -lokalisierung',
                '🤖 SLAM-Algorithmus-Implementierung und -Bewertung',
                '⚙️ Gazebo-Simulation für Robotertests',
                '📊 Sensorbasierte Umgebungsmodellierung',
                '🎯 Navigationsorientierte Wahrnehmungsworkflows',
                '⚡ Echtzeit-Datenverarbeitungspipelines',
                '🔬 Strukturierte Bewertung der Kartierungsqualität'
            ],
            links: [
                { text: 'Auf GitHub ansehen', url: 'https://github.com/BUAksakal/lidar-slam-mapping-system', icon: 'github' }
            ],
            visuals: [
                { path: 'images/lidar_map_visualization.png', caption: 'LiDAR Belegungsgitterkarte' },
                { path: 'images/gazebo_simulation_scene.png', caption: 'Gazebo Simulationsumgebung' }
            ]
        }
    },
    'project-4': {
        en: {
            tag: '💧 Industry Internship',
            title: 'Smart Water Meter Monitoring System',
            description: 'Industrial IoT data engineering system developed during internship at Baylan Water & Energy Meters. The project bridges LoRaWAN-enabled smart water meters with operator monitoring interfaces through payload decoding, real-time data processing, and multi-platform visualization. Demonstrates practical experience with industrial telemetry workflows, event-driven architecture, and IoT communication protocols in a production environment.',
            technologies: ['Python', 'LoRaWAN', 'Tkinter', 'Streamlit', 'Pandas', 'Watchdog', 'JSON', 'Event-Driven Architecture'],
            features: [
                '🛰️ LoRaWAN payload decoding and protocol interpretation',
                '📊 Real-time telemetry data processing and visualization',
                '🖥️ Desktop monitoring interface with Tkinter',
                '🌐 Web-based live dashboard with Streamlit',
                '⚡ Event-driven file monitoring with Watchdog',
                '🔄 Automated data refresh and background service orchestration',
                '📈 Voltage, credit, and battery status extraction',
                '⚙️ Multi-interface architecture (desktop + web)',
                '🏭 Industrial-grade monitoring workflow',
                '🔧 Modular data pipeline design'
            ],
            links: [
                { text: 'View on GitHub', url: 'https://github.com/BUAksakal/smart-water-meter-monitoring-system', icon: 'github' }
            ],
            visuals: [
                { path: 'images/water_meter_architecture.png', caption: 'System Architecture & Data Flow' },
                { path: 'images/baylan_interface.png', caption: 'Baylan Payload System Interface' }
            ]
        },
        de: {
            tag: '💧 Industriepraktikum',
            title: 'Intelligentes Wasserzähler-Überwachungssystem',
            description: 'Industrielles IoT-Data-Engineering-System, entwickelt während eines Praktikums bei Baylan Water & Energy Meters. Das Projekt verbindet LoRaWAN-fähige intelligente Wasserzähler mit Betreiberüberwachungsschnittstellen durch Payload-Decodierung, Echtzeit-Datenverarbeitung und plattformübergreifende Visualisierung. Zeigt praktische Erfahrung mit industriellen Telemetrie-Workflows, ereignisgesteuerter Architektur und IoT-Kommunikationsprotokollen in einer Produktionsumgebung.',
            technologies: ['Python', 'LoRaWAN', 'Tkinter', 'Streamlit', 'Pandas', 'Watchdog', 'JSON', 'Ereignisgesteuerte Architektur'],
            features: [
                '🛰️ LoRaWAN-Payload-Decodierung und Protokollinterpretation',
                '📊 Echtzeit-Telemetriedatenverarbeitung und -visualisierung',
                '🖥️ Desktop-Überwachungsschnittstelle mit Tkinter',
                '🌐 Webbasiertes Live-Dashboard mit Streamlit',
                '⚡ Ereignisgesteuerte Dateiüberwachung mit Watchdog',
                '🔄 Automatisierte Datenaktualisierung und Hintergrunddienst-Orchestrierung',
                '📈 Spannungs-, Kredit- und Batteriestatus-Extraktion',
                '⚙️ Multi-Schnittstellen-Architektur (Desktop + Web)',
                '🏭 Industrieller Überwachungsworkflow',
                '🔧 Modulares Datenpipeline-Design'
            ],
            links: [
                { text: 'Auf GitHub ansehen', url: 'https://github.com/BUAksakal/smart-water-meter-monitoring-system', icon: 'github' }
            ],
            visuals: [
                { path: 'images/water_meter_architecture.png', caption: 'Systemarchitektur & Datenfluss' },
                { path: 'images/baylan_interface.png', caption: 'Baylan Payload System Interface' }
            ]
        }
    }
};

// Get modal elements
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalFeatures = document.getElementById('modalFeatures');
const modalLinks = document.getElementById('modalLinks');

// Function to open modal with project data
function openProjectModal(projectId) {
    // Get current language from local storage, default to 'en'
    const currentLang = localStorage.getItem('language') || 'en';

    // Access the project data for the current language
    const project = projectsData[projectId] && projectsData[projectId][currentLang];

    if (!project) return;

    // Populate modal content
    modalTag.textContent = project.tag;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    // Clear and populate technologies
    modalTech.innerHTML = '';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'modal-tech-tag';
        techTag.textContent = tech;
        modalTech.appendChild(techTag);
    });

    // Clear and populate features
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });

    // Clear and populate links
    modalLinks.innerHTML = '';
    project.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'modal-link';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';

        const icon = link.icon === 'github'
            ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
            : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

        a.innerHTML = icon + '<span>' + link.text + '</span>';
        modalLinks.appendChild(a);
    });

    // Handle visuals if they exist
    const modalVisualsSection = document.getElementById('modalVisualsSection');
    const modalVisuals = document.getElementById('modalVisuals');

    if (project.visuals && project.visuals.length > 0) {
        modalVisualsSection.style.display = 'block';
        modalVisuals.innerHTML = '';

        project.visuals.forEach(visual => {
            const visualItem = document.createElement('div');
            visualItem.className = 'modal-visual-item';

            const img = document.createElement('img');
            img.src = visual.path;
            img.alt = visual.caption;
            img.className = 'modal-visual-image';

            const caption = document.createElement('p');
            caption.className = 'modal-visual-caption';
            caption.textContent = visual.caption;

            visualItem.appendChild(img);
            visualItem.appendChild(caption);
            modalVisuals.appendChild(visualItem);
        });
    } else {
        modalVisualsSection.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Function to close modal
function closeProjectModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Add click event listeners to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card:not(.project-card-more)');

    projectCards.forEach((card, index) => {
        const projectId = `project-${index + 1}`;
        card.style.cursor = 'pointer';

        // Click on card to open modal
        card.addEventListener('click', (e) => {
            // If clicking on any GitHub link or dual links container, let it navigate normally
            if (e.target.closest('.project-link') || e.target.closest('.project-links-dual')) {
                // Don't prevent default - let the link work
                return;
            }
            // Otherwise open the modal
            openProjectModal(projectId);
        });
    });

    // Close modal on X button click
    modalClose.addEventListener('click', closeProjectModal);

    // Close modal on overlay click (outside modal)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
});
