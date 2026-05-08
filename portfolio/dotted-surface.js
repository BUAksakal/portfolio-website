/**
 * DottedSurface – Mobil-only Three.js parçacık arka planı.
 *
 * Sadece Hero section (min-height: 100vh) içinde görünür.
 * Canvas, .hero elementinin içine position:absolute olarak yerleştirilir.
 * Hero'nun overflow:hidden'ı sayesinde hiçbir şekilde dışına taşmaz.
 */
(function () {
  'use strict';

  const MOBILE_BREAKPOINT = 768;

  /* ─── Parçacık ayarları ─────────────────────────────────────────────────── */
  const SEPARATION = 180;
  const AMOUNTX    = 20;   // 20×25 = 500 nokta → mobil için yeterli
  const AMOUNTY    = 25;

  /* ─── İç state ─────────────────────────────────────────────────────────── */
  let scene, camera, renderer, points, geometry, material;
  let animationId = null;
  let count       = 0;
  let wrapper     = null;   // hero içine eklenen div

  /* ─── Init ─────────────────────────────────────────────────────────────── */
  function init() {
    if (animationId !== null) return;

    /* Hero section'ı bul */
    const hero = document.querySelector('.hero');
    if (!hero) return;

    /* Hero'nun overflow:hidden'ından yararlan → canvas hero sınırında kesilir */
    /* Hero'nun position:relative olduğundan emin ol */
    if (getComputedStyle(hero).position === 'static') {
      hero.style.position = 'relative';
    }

    /* Canvas kapsayıcı – hero içinde tam ekran */
    wrapper = document.createElement('div');
    wrapper.id = 'dotted-surface';
    Object.assign(wrapper.style, {
      position:      'absolute',
      inset:         '0',
      zIndex:        '0',          /* spline-background ile aynı katman */
      pointerEvents: 'none',
      overflow:      'hidden',
    });

    /* Hero'nun ilk çocuğu olarak ekle → diğer elementlerin arkasında kalır */
    hero.insertBefore(wrapper, hero.firstChild);

    /* ─── Three.js sahne ──────────────────────────────────────────────────── */
    scene  = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      60,
      wrapper.offsetWidth / wrapper.offsetHeight,
      1,
      10000
    );
    camera.position.set(0, 355, 1220);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(wrapper.offsetWidth, wrapper.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    wrapper.appendChild(renderer.domElement);

    /* ─── Geometri ────────────────────────────────────────────────────────── */
    geometry = new THREE.BufferGeometry();
    const pos = [], col = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        pos.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
        );
        col.push(0.75, 0.75, 0.75);
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geometry.setAttribute('color',    new THREE.Float32BufferAttribute(col, 3));

    /* ─── Materyal ────────────────────────────────────────────────────────── */
    material = new THREE.PointsMaterial({
      size: 7,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    window.addEventListener('resize', onResize);
    animate();
  }

  /* ─── Animasyon döngüsü ─────────────────────────────────────────────────── */
  function animate() {
    animationId = requestAnimationFrame(animate);

    const attr = geometry.attributes.position;
    const arr  = attr.array;
    let i = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        arr[i * 3 + 1] =
          Math.sin((ix + count) * 0.3) * 50 +
          Math.sin((iy + count) * 0.5) * 50;
        i++;
      }
    }

    attr.needsUpdate = true;
    renderer.render(scene, camera);
    count += 0.1;
  }

  /* ─── Destroy ───────────────────────────────────────────────────────────── */
  function destroy() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    window.removeEventListener('resize', onResize);

    if (geometry) { geometry.dispose(); geometry = null; }
    if (material)  { material.dispose();  material  = null; }
    if (renderer)  { renderer.dispose();  renderer  = null; }

    if (wrapper && wrapper.parentNode) {
      wrapper.parentNode.removeChild(wrapper);
    }

    wrapper = null;
    points  = null;
    scene   = null;
    camera  = null;
    count   = 0;
  }

  /* ─── Resize ────────────────────────────────────────────────────────────── */
  function onResize() {
    if (!camera || !renderer || !wrapper) return;
    const w = wrapper.offsetWidth;
    const h = wrapper.offsetHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  /* ─── Viewport'a göre aç/kapat ──────────────────────────────────────────── */
  function isMobile() { return window.innerWidth <= MOBILE_BREAKPOINT; }

  function syncWithViewport() {
    if (isMobile()) {
      if (animationId === null) init();
    } else {
      if (animationId !== null) destroy();
    }
  }

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncWithViewport, 200);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncWithViewport);
  } else {
    syncWithViewport();
  }
})();
