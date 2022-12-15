const canvas = document.getElementById("canvas");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const spansize = document.getElementById("size");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clearbtn");

const ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = "black";

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

colorInput.addEventListener("change", () => {
    color = colorInput.value
})

const drawcircle = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
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
