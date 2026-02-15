// ===================================
// Typewriter Effect for Highlight Words
// ===================================
function typewriterEffect() {
    const highlightWords = document.querySelectorAll('.highlight-auto-animate');

    // Only animate the FIRST highlight word (human intent)
    if (highlightWords.length > 0) {
        const element = highlightWords[0]; // Only first one
        const originalText = element.getAttribute('data-word');
        const delay = 1200;

        setTimeout(() => {
            let currentText = originalText;
            let deleteIndex = originalText.length;

            // Delete phase - character by character
            const deleteInterval = setInterval(() => {
                if (deleteIndex > 0) {
                    deleteIndex--;
                    currentText = originalText.substring(0, deleteIndex);
                    element.textContent = currentText;
                } else {
                    clearInterval(deleteInterval);

                    // Small pause before rewriting
                    setTimeout(() => {
                        let writeIndex = 0;

                        // Write phase - character by character
                        const writeInterval = setInterval(() => {
                            if (writeIndex <= originalText.length) {
                                currentText = originalText.substring(0, writeIndex);
                                element.textContent = currentText;
                                writeIndex++;
                            } else {
                                clearInterval(writeInterval);
                            }
                        }, 50); // 50ms per character when writing
                    }, 200); // 200ms pause between delete and write
                }
            }, 30); // 30ms per character when deleting
        }, delay);
    }
}

// Run typewriter effect on page load
window.addEventListener('load', typewriterEffect);
