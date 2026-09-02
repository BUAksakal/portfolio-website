/* =====================================================================
   Scroll-driven drone — a 121-frame image sequence scrubbed by scroll,
   shown as a background from the Work section down. Rest of the page
   is untouched. GPU-light: one <canvas>, redraw only on frame change.
   ===================================================================== */
(function () {
    'use strict';

    var cv = document.getElementById('droneCv');
    var startEl = document.getElementById('work');
    if (!cv || !startEl) return;

    var endEl = document.getElementById('experience')
        || document.getElementById('about');        // drone plays out over Work + GitHub, gone from there on
    var ctx = cv.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    var N = 48;
    var pad = function (n) { n = String(n); return '0000'.slice(n.length) + n; };

    /* preload frames */
    var frames = new Array(N);
    var loaded = 0, ready = false;
    for (var i = 0; i < N; i++) {
        var im = new Image();
        im.decoding = 'async';
        im.src = 'images/drone-seq/drone_' + pad(i + 1) + '.jpg';
        im.onload = im.onerror = function () {
            loaded++;
            if (!ready && loaded >= Math.min(N, 24)) { ready = true; render(); }
            if (loaded === N) render();
        };
        frames[i] = im;
    }

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cur = -1;

    function size() {
        var w = window.innerWidth || document.documentElement.clientWidth || 1280;
        var h = window.innerHeight || document.documentElement.clientHeight || 720;
        cv.width = Math.round(w * dpr);
        cv.height = Math.round(h * dpr);
        cur = -1;
    }
    size();

    function progress() {
        var vh = window.innerHeight;
        var top = function (el) { return el.getBoundingClientRect().top + window.scrollY; };
        var s = top(startEl) - vh * 0.55;
        var e = (endEl ? top(endEl) : document.documentElement.scrollHeight) - vh * 0.9;
        var p = (window.scrollY - s) / Math.max(1, e - s);
        return p < 0 ? 0 : p > 1 ? 1 : p;
    }

    function draw(idx) {
        var img = frames[idx];
        if (!img || !img.complete || !img.naturalWidth) {
            // fall back to nearest loaded frame
            for (var d = 1; d < N; d++) {
                if (frames[idx - d] && frames[idx - d].naturalWidth) { img = frames[idx - d]; break; }
                if (frames[idx + d] && frames[idx + d].naturalWidth) { img = frames[idx + d]; break; }
            }
            if (!img) return;
        }
        var iw = img.naturalWidth, ih = img.naturalHeight;
        var scale = Math.max(cv.width / iw, cv.height / ih);
        var w = iw * scale, h = ih * scale;
        ctx.clearRect(0, 0, cv.width, cv.height);
        // contrast so the drone reads once the studio bg is blended away.
        // light theme -> multiply blend (darken drone); dark theme -> screen blend (lighten drone)
        var dark = document.documentElement.getAttribute('data-theme') === 'dark'
            || (!document.documentElement.getAttribute('data-theme')
                && window.matchMedia('(prefers-color-scheme: dark)').matches);
        ctx.filter = dark
            ? 'contrast(1.3) brightness(1.15) saturate(0) invert(1)'
            : 'contrast(1.32) brightness(0.9) saturate(0)';
        ctx.drawImage(img, (cv.width - w) / 2, (cv.height - h) / 2, w, h);
        ctx.filter = 'none';
    }

    var ticking = false;
    function render() {
        ticking = false;
        if (!ready) return;
        if (!cv.width || !cv.height) size();
        var idx = Math.round(progress() * (N - 1));
        if (idx !== cur) { cur = idx; draw(idx); }

        // visible only across Work + GitHub; the page goes clean white the moment
        // the Experience section starts entering the viewport
        var vh = window.innerHeight;
        var workIn = startEl.getBoundingClientRect().top < vh * 0.6;
        var endInView = endEl && endEl.getBoundingClientRect().top < vh * 0.82;
        document.body.classList.toggle('drone-live', workIn && !endInView);
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(render); } }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { size(); render(); });
    // redraw with the right filter when the theme flips
    new MutationObserver(function () { cur = -1; render(); })
        .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    render();
})();
