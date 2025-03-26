// custom-cursor.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    }

    // Cursor trail effect
    const trailCount = 10;
    const trails = [];

    // Create trail elements
    for (let i = 0; i < trailCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("trail");
        document.body.appendChild(dot);
        trails.push(dot);
    }

    let mouseX = 0, mouseY = 0;
    let positions = Array(trailCount).fill({ x: 0, y: 0 });

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        positions.pop();
        positions.unshift({ x: mouseX, y: mouseY });

        trails.forEach((dot, index) => {
            const { x, y } = positions[index];
            dot.style.transform = `translate(${x}px, ${y}px) scale(${1 - index * 0.05})`;
            dot.style.opacity = 1 - index * 0.1; // Fades out the trail
        });

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
});