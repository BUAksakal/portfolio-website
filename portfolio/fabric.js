/* =====================================================================
   Kinetic particle fabric — interactive spring-mesh behind the hero.
   Vanilla port: canvas 2D, pseudo-3D projection, ambient wave motion,
   pointer shockwave that ripples through the mesh. Hero only.
   ===================================================================== */
(function () {
    'use strict';

    var host = document.getElementById('top');        // .hero
    if (!host) return;
    var cv = document.createElement('canvas');
    cv.id = 'fabricCv';
    cv.setAttribute('aria-hidden', 'true');
    host.insertBefore(cv, host.firstChild);
    var ctx = cv.getContext('2d');

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    var W = 0, H = 0, cols = 0, rows = 0, gap = 0;
    var pts = [];
    var pointer = { x: -9999, y: -9999, active: false };
    var t = 0, raf = 0, running = false;

    /* palette — reads CSS vars so it follows the light/dark theme.
       On dark, light dots need a stronger alpha to read, hence --fabric-boost. */
    var INK = '10,10,12', BOOST = 1;
    function readInk() {
        var cs = getComputedStyle(document.documentElement);
        var v = cs.getPropertyValue('--fabric-ink').trim();
        if (v) INK = v.replace(/\s+/g, '');
        var b = parseFloat(cs.getPropertyValue('--fabric-boost'));
        BOOST = b > 0 ? b : 1;
    }
    readInk();
    function onTheme() { readInk(); if (reduce) draw(); }   // animated frames pick it up on their own
    new MutationObserver(onTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onTheme);

    function build() {
        var r = host.getBoundingClientRect();
        W = r.width; H = r.height;
        cv.width = Math.round(W * dpr);
        cv.height = Math.round(H * dpr);
        cv.style.width = W + 'px';
        cv.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        gap = Math.max(44, Math.min(70, W / 24));
        cols = Math.ceil(W / gap) + 2;
        rows = Math.ceil(H / gap) + 2;
        var ox = (W - (cols - 1) * gap) / 2;
        var oy = (H - (rows - 1) * gap) / 2;

        pts = [];
        for (var j = 0; j < rows; j++) {
            for (var i = 0; i < cols; i++) {
                var bx = ox + i * gap, by = oy + j * gap;
                pts.push({ i: i, j: j, bx: bx, by: by, x: bx, y: by, z: 0, vx: 0, vy: 0, vz: 0 });
            }
        }
    }
    function at(i, j) { return (i >= 0 && j >= 0 && i < cols && j < rows) ? pts[j * cols + i] : null; }

    var FOCAL = 720;
    function clamp(v, m) { return v > m ? m : v < -m ? -m : v; }

    function step() {
        t += 0.016;
        var R = Math.min(W, H) * 0.24, R2 = R * R;

        for (var n = 0; n < pts.length; n++) {
            var p = pts[n];
            // gentle ambient wave (Z only)
            var wz = Math.sin(p.i * 0.5 + t * 1.05) * 8 + Math.sin(p.j * 0.55 - t * 0.8) * 6;

            // XY: strong spring home — barely drifts
            var ax = (p.bx - p.x) * 0.14;
            var ay = (p.by - p.y) * 0.14;
            // Z: ease toward wave target
            var az = (wz - p.z) * 0.05;

            // neighbour Z smoothing (average, low gain) -> stable ripple travel
            var s = 0, c = 0, nb;
            if ((nb = at(p.i - 1, p.j))) { s += nb.z; c++; }
            if ((nb = at(p.i + 1, p.j))) { s += nb.z; c++; }
            if ((nb = at(p.i, p.j - 1))) { s += nb.z; c++; }
            if ((nb = at(p.i, p.j + 1))) { s += nb.z; c++; }
            if (c) az += (s / c - p.z) * 0.12;

            // pointer: soft bulge toward viewer + whisper of outward nudge
            if (pointer.active) {
                var dx = p.x - pointer.x, dy = p.y - pointer.y, d2 = dx * dx + dy * dy;
                if (d2 < R2) {
                    var d = Math.sqrt(d2) || 1, f = 1 - d / R;
                    az -= f * f * 16;
                    ax += (dx / d) * f * f * 0.5;
                    ay += (dy / d) * f * f * 0.5;
                }
            }

            p.vx = clamp((p.vx + ax) * 0.82, 4);
            p.vy = clamp((p.vy + ay) * 0.82, 4);
            p.vz = clamp((p.vz + az) * 0.86, 5);
            p.x += p.vx; p.y += p.vy; p.z += p.vz;

            // hard clamps — the mesh can never blow up
            p.x = p.bx + clamp(p.x - p.bx, 30);
            p.y = p.by + clamp(p.y - p.by, 30);
            p.z = clamp(p.z, 78);
        }
    }

    function proj(p, cx, cy) {
        var s = FOCAL / (FOCAL + p.z);
        return { sx: cx + (p.x - cx) * s, sy: cy + (p.y - cy) * s, s: s, disp: Math.abs(p.z) };
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        var cx = W / 2, cy = H * 0.46;
        var P = new Array(pts.length);
        for (var n = 0; n < pts.length; n++) P[n] = proj(pts[n], cx, cy);

        // lines (monochrome; a touch darker where the mesh is displaced)
        ctx.lineWidth = 1;
        for (var j = 0; j < rows; j++) {
            for (var i = 0; i < cols; i++) {
                var e = j * cols + i;
                var a = P[e];
                var right = i + 1 < cols ? P[e + 1] : null;
                var down = j + 1 < rows ? P[e + cols] : null;
                var g = Math.min(1, Math.abs(pts[e].z) / 62);
                ctx.strokeStyle = 'rgba(' + INK + ',' + ((0.055 + g * 0.13) * a.s * BOOST).toFixed(3) + ')';
                if (right) { ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(right.sx, right.sy); ctx.stroke(); }
                if (down) { ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(down.sx, down.sy); ctx.stroke(); }
            }
        }
        // dots (all black; grow slightly with displacement)
        for (var m = 0; m < P.length; m++) {
            var pp = P[m];
            var gg = Math.min(1, Math.abs(pts[m].z) / 62);
            var rad = 1.0 * pp.s + gg * 1.3;
            ctx.fillStyle = 'rgba(' + INK + ',' + ((0.16 + gg * 0.34) * pp.s * BOOST).toFixed(3) + ')';
            ctx.beginPath();
            ctx.arc(pp.sx, pp.sy, rad < 0.4 ? 0.4 : rad, 0, 6.283);
            ctx.fill();
        }
    }

    function frame() {
        step();
        draw();
        raf = requestAnimationFrame(frame);
    }
    function start() { if (running || reduce) return; running = true; frame(); }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

    /* pointer */
    function move(e) {
        var r = host.getBoundingClientRect();
        var cxp = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
        var cyp = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
        if (cyp < -60 || cyp > H + 60) { pointer.active = false; return; }
        pointer.x = cxp; pointer.y = cyp; pointer.active = true;
    }
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', function (e) {
        move(e);
        // extra ripple kick on click (clamped in step so it can't blow up)
        var kr = Math.min(W, H) * 0.3;
        for (var n = 0; n < pts.length; n++) {
            var p = pts[n], dx = p.x - pointer.x, dy = p.y - pointer.y;
            var d = Math.sqrt(dx * dx + dy * dy);
            if (d < kr) p.vz -= (1 - d / kr) * 9;
        }
    }, { passive: true });
    host.addEventListener('pointerleave', function () { pointer.active = false; });

    var rt;
    window.addEventListener('resize', function () {
        clearTimeout(rt);
        rt = setTimeout(function () { build(); if (reduce) { step(); draw(); } }, 150);
    });

    /* pause when hero is off-screen */
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) {
            es.forEach(function (e) { e.isIntersecting ? start() : stop(); });
        }, { threshold: 0.01 }).observe(host);
    }
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) stop(); else start();
    });

    build();
    if (reduce) { step(); draw(); } else start();
})();
