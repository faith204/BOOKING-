// =========================
// LIGHT AND DARK MODE
// =========================

// Dark Mode
function darkMode() {
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

```
document.querySelectorAll("p").forEach(function(p) {
    p.style.color = "white";
});

document.querySelectorAll("h1, h2, h3").forEach(function(heading) {
    heading.style.color = "white";
});
```

}

// Light Mode
function lightMode() {
document.body.style.backgroundColor = "white";
document.body.style.color = "black";

```
document.querySelectorAll("p").forEach(function(p) {
    p.style.color = "#333";
});

document.querySelectorAll("h1, h2, h3").forEach(function(heading) {
    heading.style.color = "navy";
});
```

}

// =========================
// BACKGROUND COLOUR
// =========================

// Yellow Background
function yellowBackground() {
document.body.style.backgroundColor = "yellow";
}

// Light Blue Background
function blueBackground() {
document.body.style.backgroundColor = "lightblue";
}

// Green Background
function greenBackground() {
document.body.style.backgroundColor = "lightgreen";
}

// Pink Background
function pinkBackground() {
document.body.style.backgroundColor = "pink";
}

// White Background
function whiteBackground() {
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
}

// =========================
// CHANGE HEADING COLOUR
// =========================

// Red Heading
function makeRed() {
document.querySelector("h1").style.color = "red";
}

// Blue Heading
function makeBlue() {
document.querySelector("h1").style.color = "blue";
}

// Green Heading
function makeGreen() {
document.querySelector("h1").style.color = "green";
}

// =========================
// CHANGE MESSAGE
// =========================

function changeMessage() {
document.getElementById("message").innerHTML =
"Thank you for visiting EasyBook Services!";
}
