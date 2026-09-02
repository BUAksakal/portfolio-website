/* runs before paint: restore theme choice, mark JS available */
(function () {
    try {
        var t = localStorage.getItem('theme');
        if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    } catch (e) { }
    document.documentElement.classList.add('js');
})();
