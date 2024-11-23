document.addEventListener('DOMContentLoaded', () => {
    // Create snowflakes
    function createSnowflakes() {
        const snowflakes = ['❅', '❆', '❄'];
        setInterval(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            document.getElementById('snow').appendChild(snowflake);
            // Remove snowflake after animation
            setTimeout(() => snowflake.remove(), 5000);
        }, 200);
    }

    // Initialize snowflakes
    createSnowflakes();

    // Add interactivity
    document.querySelectorAll('.interactive').forEach((interactive) =>
        interactive.addEventListener('click', () => {
            interactive.style.setProperty('--degrees', `${getRandomInt(-5, 5)}deg`);
            interactive.classList.add('active');
            setTimeout(() => {
                interactive.classList.remove('active');
            }, 300);
        })
    );

    function getRandomInt(min, max) {
        const random = Math.random() * (max - min) + min;
        return random > 0 ? Math.ceil(random) : Math.floor(random);
    }
});
