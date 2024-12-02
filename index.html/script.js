// Welcome Page (index.html)
function goToLyrics() {
    const name = document.getElementById("nameInput").value;
    if (!name) {
        alert("Please enter your name!");
    } else {
        localStorage.setItem("username", name);
        window.location.href = "lyrics.html";
    }
}

// Lyrics Page (lyrics.html)
function processSweaters() {
    const sweaters = document.getElementById("sweaterInput").value;
    if (isNaN(sweaters) || sweaters === "") {
        alert("Please enter a numerical value.");
    } else {
        localStorage.setItem("sweaterCount", sweaters);
        window.location.href = "final.html";
    }
}

// Final Page (final.html)
function showMessage() {
    const name = localStorage.getItem("username");
    const sweaterCount = parseInt(localStorage.getItem("sweaterCount"));

    let message;
    if (sweaterCount > 1) {
        message = `Oh dear, unfortunately I don't have that many, but I have one special one for you, ${name}!`;
    } else if (sweaterCount === 1) {
        message = `Here's your special sweater cuz you're one in eight billion, ${name}!`;
    } else {
        message = `Oh I see. Here's a sweater anyway cause I don't want you to feel cold, ${name} 030`;
    }
    document.getElementById("finalMessage").textContent = message;
}
