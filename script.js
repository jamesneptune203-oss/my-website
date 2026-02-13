let yesSize = 1;

function yesClick() {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#ff758c;">
            <h1 style="color:white;font-size:3rem;">YAYYY ❤️🥰 I love you!!!</h1>
        </div>
    `;
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    yesSize += 0.2;
    yesButton.style.transform = `scale(${yesSize})`;
}

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
