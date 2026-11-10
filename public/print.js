// Print buttons on the counselor handout.
document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
