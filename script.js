function generateStars(elementId, count) {
    const stars = document.getElementById(elementId);
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
        star.style.animationDelay = `${Math.random() * 3}s`;
        stars.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateStars('stars', 50);
    generateStars('stars2', 30);
    generateStars('stars3', 20);

    // Fetch Aadhaar data
    fetch('http://localhost:7000/')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const user = data[0];
                document.getElementById('name').innerText = user.name;
                document.getElementById('dob').innerText = user.dob;
                document.getElementById('gender').innerText = user.gender;
                document.getElementById('state').innerText = user.state;
                document.getElementById('aadharnumber').innerText = user.aadharnumber;
            }
        })
        .catch(error => console.error('Error fetching Aadhaar data:', error));
});

// Add dynamic shine effect
document.querySelector('.card').addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-front, .card-back');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cards.forEach(card => {
        const shine = card.querySelector('.shine');
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)`;
    });
});