// Matrix Canvas Effect Script

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector("#canvas");
    if (!canvas) {
        console.error("Canvas element not found. Make sure you have a canvas with id='canvas'");
        return;
    }

    const ctx = canvas.getContext("2d");
    const columns = [];

    const TEXT_HEIGHT = 20;
    const LAYERS = 2;
    let WIDTH = canvas.width = innerWidth;
    let HEIGHT = canvas.height = innerHeight;
    let totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;

    // Resize event listener
    window.addEventListener("resize", () => {
        totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
        WIDTH = canvas.width = innerWidth;
        HEIGHT = canvas.height = innerHeight;
    });

    // Optional: Get text from URL parameter
    const text = new URL(location.href).searchParams.get("text");
    if (text) {
        const textElement = document.querySelector(".manz div");
        if (textElement) {
            textElement.textContent = text;
        }
    }

    let font = "monospace";

    const toggleFont = () => {
        font = font === "monospace" ? "Comic Sans MS" : "monospace";
        const textElement = document.querySelector(".manz div");
        if (textElement) {
            textElement.classList.toggle("comic");
        }
    };

    const moveCanvas = () => {
        document.body.classList.add("moved");
        document.body.classList.add("color");
        setTimeout(() => document.body.classList.remove("moved"), 300);
        setTimeout(() => document.body.classList.remove("color"), 600);
    };

    const generateCharacter = () => {
        const CHARACTERS = Array.from(Array(94)).map((char, index) => String.fromCharCode(33 + index));
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        return CHARACTERS[randomIndex];
    };

    const init = () => {
        for (let i = 0; i < totalColumns * LAYERS; i++) {
            const size = Math.floor(Math.random() * 12) + 15;
            const letters = Array.from(Array(size)).map(char => generateCharacter());
            const initialY = -5 00 + (-1 * Math.floor(Math.random() * 500));
            // const fastRandomSpeed = ~~(Math.random() * 20);
            // const speed = fastRandomSpeed === 0 ? 40 : 10 + Math.random() * 20;
            const speed = 5 + Math.random() * 5;
            columns.push({
                y: initialY,
                letters,
                speed
            });
        }

        // Reset
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
    };

    const getColor = (index, array, x) => {
        const size = array.length;
        const COLORS = [
            "rgba(134, 250, 134, 0.05)",   // Very light green
            "rgba(50, 255, 50, 0.1)",   // Light green
            "rgba(197, 249, 197, 0.15)",   // Medium green
            "rgba(15, 255, 15, 0.25)",   // Darker green
            "rgba(255, 255, 255)",
        ];
        const last = index === size - 1;
        const first = index === 0;
        const second = index === 1;
        const third = index === 2;
    
        return last
            ? COLORS[4]
            : first
                ? COLORS[0]
                : second
                    ? COLORS[1]
                    : third
                        ? COLORS[2]
                        : COLORS[3];
    };

    const matrixIteration = () => {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        ctx.font = `8pt ${font}`;

        columns.forEach((data, x) => {
            data.letters.forEach((letter, index, array) => {
                const isWhite = index === array.length - 1;
                ctx.fillStyle = getColor(index, array, x);
                ctx.shadowColor = "#2aa144";
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                if (!navigator.userAgent.includes("Firefox/"))
                    ctx.shadowBlur = 10;

                isWhite && (letter = generateCharacter());
                const random = Math.floor(Math.random() * 25);
                random === 0 && (letter = generateCharacter());
                ctx.fillText(letter, x * (TEXT_HEIGHT / LAYERS), 50 + data.y + index * TEXT_HEIGHT);
            });

            data.y += data.speed;
            if (data.y > HEIGHT) {
                data.y = -500;
                data.letters = Array.from(Array(data.letters.length)).map(char => generateCharacter());
            }
        });
    };

    init();
    setInterval(matrixIteration, 50);
    setInterval(() => {
        moveCanvas();
        toggleFont();
    }, 12000);
});