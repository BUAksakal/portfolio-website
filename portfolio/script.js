/* =====================================================================
   Berke Uğur Aksakal — portfolio
   i18n (EN/DE) · nav · scroll reveal · GitHub marquee · image parallax
   ===================================================================== */

/* ---------------- Projects (importance order) ----------------
   The marquee always uses each repo's GitHub social card (images/repos/<repo>.png)
   so every card looks identical. The bespoke covers are Work-section only. */
const PROJECTS = [
    { repo: 'low-altitude-aerial-detection', name: 'Low-Altitude Aerial Detection', lang: 'Python' },
    { repo: 'journey-resilience-agent', name: 'Journey Resilience Agent', lang: 'Python' },
    { repo: 'lidar-slam-mapping-system', name: 'Reactive LiDAR Navigation', lang: 'Python' },
    { repo: 'ppe-helmet-detection', name: 'PPE Helmet Detection', lang: 'Python' },
    { repo: 'ai-vision-robotic-hand', name: 'Vision-Controlled Robotic Hand', lang: 'Python' },
    { repo: 'griff-rag', name: 'GRIFF — Bureaucracy RAG', lang: 'Python' },
    { repo: 'engine-fault-pattern-mining', name: 'Engine Fault Pattern Mining', lang: 'Python' },
    { repo: 'smart-water-meter-monitoring-system', name: 'Smart Water Meter Monitor', lang: 'Python' },
    { repo: 'f1-telemetry-apex-detection', name: 'F1 Telemetry Apex Detection', lang: 'Python' },
    { repo: 'smart-fitness-recommender-system', name: 'Fitness Recommender', lang: 'Python' },
    { repo: 'AI-FitnessTracker', name: 'AI Fitness Tracker', lang: 'Dart' },
    { repo: 'space-shooter-spi', name: 'Distributed Space Shooter', lang: 'Python' },
    { repo: 'CancerPrediction-LogisticRegression', name: 'Breast Cancer Prediction', lang: 'Python' },
    { repo: 'LaptopGuard', name: 'LaptopGuard', lang: 'Python' }
];

/* ---------------- Translations ---------------- */
const translations = {
    en: {
        nav: { work: 'Work', exp: 'Experience', skills: 'Skills', more: 'GitHub', about: 'About', contact: 'Contact', cv: 'CV' },
        hero: {
            tag: 'AI engineer — <b>computer vision</b>, <b>sensor data</b> &amp; <b>real-time robotics</b>.'
        },
        work: { eyebrow: 'Selected projects', title: 'Work' },
        more: { eyebrow: 'Open source', title: 'On GitHub' },
        exp: {
            eyebrow: 'Where', title: 'Experience',
            n1: 'Built AI perception pipelines — YOLO-based detection and LiDAR-SLAM workflows for real-time perception. Benchmarked YOLOv3 against YOLOv8 for traffic-light detection; results presented at the IEEE TUAC 2023 conference.',
            n2: 'Built a Python desktop tool for real-time device monitoring, data processing and visualization.',
            eduRole: 'BSc · Electrical & Electronics Engineering',
            eduNote: "Bachelor's thesis: a real-time perception-to-actuator control loop driving a 3D-printed robotic hand (Python, OpenCV, YOLOv8, Arduino)."
        },
        skills: {
            eyebrow: 'Stack', title: 'Skills',
            c1: 'Computer Vision & ML', c2: 'Robotics & Control',
            c3: 'Languages & Runtimes', c4: 'Tooling & Data',
            spoken: 'Turkish (native) · English (C1) · German (A2)'
        },
        about: {
            eyebrow: 'Who', title: 'About',
            lead: "I'm Berke — a Master's student in <b>AI for Smart Sensors &amp; Actuators</b> with an Electrical Engineering background. I take models from a rough baseline to something that runs in the real world: full vision-to-actuator loops, YOLO detectors fine-tuned on custom data, LiDAR turned into live navigation. Experience from long-term internships at NISO and Baylan, and an academic–industry project with Fraunhofer IVI.",
            k1: 'Based', v1: 'Cham → Regensburg · Oct 2026',
            k2: 'Study', k3: 'Status', v3: 'Open to working-student roles',
            k4: 'Focus', v4: 'Computer vision · Robotics'
        },
        contact: { eyebrow: 'Get in touch', cv: 'CV (PDF) ↓' },
        footer: { note: 'Built from scratch' }
    },
    de: {
        nav: { work: 'Arbeiten', exp: 'Erfahrung', skills: 'Kenntnisse', more: 'GitHub', about: 'Über', contact: 'Kontakt', cv: 'CV' },
        hero: {
            tag: 'AI Engineer — <b>Computer Vision</b>, <b>Sensordaten</b> &amp; <b>Echtzeit-Robotik</b>.'
        },
        work: { eyebrow: 'Ausgewählte Projekte', title: 'Arbeiten' },
        more: { eyebrow: 'Open Source', title: 'Auf GitHub' },
        exp: {
            eyebrow: 'Wo', title: 'Erfahrung',
            n1: 'Aufbau von KI-Wahrnehmungs-Pipelines — YOLO-basierte Erkennung und LiDAR-SLAM-Workflows für Echtzeit-Wahrnehmung. YOLOv3 vs. YOLOv8 zur Ampelerkennung verglichen; Ergebnisse auf der IEEE-TUAC-2023-Konferenz präsentiert.',
            n2: 'Python-Desktop-Tool für Echtzeit-Geräteüberwachung, Datenverarbeitung und Visualisierung entwickelt.',
            eduRole: 'B.Sc. · Elektrotechnik & Elektronik',
            eduNote: 'Bachelorarbeit: ein Echtzeit-Regelkreis von der Wahrnehmung bis zum Aktor, der eine 3D-gedruckte Roboterhand steuert (Python, OpenCV, YOLOv8, Arduino).'
        },
        skills: {
            eyebrow: 'Stack', title: 'Kenntnisse',
            c1: 'Computer Vision & ML', c2: 'Robotik & Regelung',
            c3: 'Sprachen & Laufzeiten', c4: 'Werkzeuge & Daten',
            spoken: 'Türkisch (Muttersprache) · Englisch (C1) · Deutsch (A2)'
        },
        about: {
            eyebrow: 'Wer', title: 'Über mich',
            lead: 'Ich bin Berke — Masterstudent in <b>AI for Smart Sensors &amp; Actuators</b> mit Elektrotechnik-Hintergrund. Ich bringe Modelle von einem groben Prototyp zu etwas, das in der realen Welt läuft: vollständige Vision-to-Actuator-Regelkreise, YOLO-Detektoren auf eigenen Daten optimiert, LiDAR in Live-Navigation umgesetzt. Erfahrung aus langfristigen Praktika bei NISO und Baylan sowie einem Projekt mit dem Fraunhofer IVI.',
            k1: 'Standort', v1: 'Cham → Regensburg · Okt. 2026',
            k2: 'Studium', k3: 'Status', v3: 'Offen für Werkstudenten-Stellen',
            k4: 'Fokus', v4: 'Computer Vision · Robotik'
        },
        contact: { eyebrow: 'Kontakt aufnehmen', cv: 'CV (PDF) ↓' },
        footer: { note: 'Von Grund auf gebaut' }
    }
};

let currentLang = (() => { try { return localStorage.getItem('language') || 'en'; } catch (e) { return 'en'; } })();
const getNested = (o, p) => p.split('.').reduce((x, k) => (x == null ? undefined : x[k]), o);

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    try { localStorage.setItem('language', lang); } catch (e) { }
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = getNested(translations[lang], el.getAttribute('data-i18n'));
        if (typeof v !== 'string') return;
        if (v.indexOf('<') !== -1) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === lang));
}

/* ---------------- GitHub marquee (single row, seamless) ---------------- */
function buildMarquee() {
    const track = document.getElementById('mqTrack');
    if (!track) return;
    const frag = document.createDocumentFragment();
    for (let pass = 0; pass < 2; pass++) {
        PROJECTS.forEach((p, i) => {
            const n = i + 1;
            const a = document.createElement('a');
            a.className = 'mq-card';
            a.href = 'https://github.com/BUAksakal/' + p.repo;
            a.target = '_blank';
            a.rel = 'noopener';
            if (pass === 1) a.setAttribute('aria-hidden', 'true');
            a.innerHTML =
                '<img src="' + (p.img || 'images/repos/' + p.repo + '.png') + '" alt="" loading="lazy">' +
                '<div class="mq-meta"><div class="mq-rank">' + (n < 10 ? '0' : '') + n +
                '</div><div class="mq-name">' + p.name + '</div><div class="mq-lang">' + p.lang + '</div></div>';
            a.querySelector('img').addEventListener('error', function () { this.style.visibility = 'hidden'; });
            frag.appendChild(a);
        });
    }
    track.appendChild(frag);
    track.style.setProperty('--dur', (PROJECTS.length * 5.5) + 's');
}

/* ---------------- Nav ---------------- */
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

function closeMenu() {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
}
menuBtn?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#' || id === '#top') return;
        const t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' });
    });
});

/* Active link */
const linkEls = [...document.querySelectorAll('.nav-link')];
const secEls = linkEls.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && secEls.length) {
    const spy = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        const id = '#' + e.target.id;
        linkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    secEls.forEach(s => spy.observe(s));
}

/* ---------------- Scroll reveal ---------------- */
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
    const ro = new IntersectionObserver((es, obs) => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    }), { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => ro.observe(el));
    const revealAll = () => revealEls.forEach(el => el.classList.add('is-visible'));
    window.addEventListener('load', () => setTimeout(revealAll, 1600));
    document.addEventListener('visibilitychange', () => { if (!document.hidden) setTimeout(revealAll, 400); });
} else {
    revealEls.forEach(el => el.classList.add('is-visible'));
}

/* ---------------- Theme toggle ---------------- */
const themeBtn = document.getElementById('themeBtn');
function currentTheme() {
    const t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
themeBtn?.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { }
});

/* ---------------- Skills — 3D pointer tilt + sheen ---------------- */
(function tiltCards() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;      // skip on touch
    const MAX = 7;                                               // deg
    document.querySelectorAll('[data-tilt]').forEach(card => {
        let raf = 0, rx = 0, ry = 0, mx = 50, my = 0;
        function apply() {
            raf = 0;
            card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
            card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
            card.style.setProperty('--mx', mx.toFixed(1) + '%');
            card.style.setProperty('--my', my.toFixed(1) + '%');
        }
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            ry = (px - 0.5) * 2 * MAX;
            rx = -(py - 0.5) * 2 * MAX;
            mx = px * 100; my = py * 100;
            if (!raf) raf = requestAnimationFrame(apply);
        });
        card.addEventListener('pointerleave', () => {
            rx = ry = 0; mx = 50; my = 0;
            if (!raf) raf = requestAnimationFrame(apply);
        });
    });
})();

/* ---------------- Init ---------------- */
buildMarquee();
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLanguage(b.getAttribute('data-lang'))));
applyLanguage(currentLang);
