const canvas = document.getElementById("canvas");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const spansize = document.getElementById("size");
const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;

const drawcircle = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
};

const updateSize = (size) => {
    spansize.innerText = size;
};

plusBtn.addEventListener("click", () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSize(size);
});

minusBtn.addEventListener("click", () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSize(size);
});

canvas.addEventListener("mousedown", () => {
    isPressed = true;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;
        drawcircle(x, y);
    }
});
