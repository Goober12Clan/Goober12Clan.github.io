const text = document.querySelector(".sig");
const strText = text.textContent
const splitText = strText.split("");
text.textContent = "";

let char = 0;
let timer = setInterval(onTick, 50);

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    time = null;
}
