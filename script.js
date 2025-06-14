
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('downloadBtn');
    const releaseDate = new Date('2025-07-05T00:00:00');
    const now = new Date();
    if (now >= releaseDate) {
        btn.disabled = false;
        btn.innerText = 'Завантажити продукт';
        btn.style.cursor = 'pointer';
        btn.onclick = () => {
            window.location.href = 'https://your-download-link.com';
        };
    }
});
