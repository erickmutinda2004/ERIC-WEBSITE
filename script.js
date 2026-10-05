let clicks = 0;

function contactMe() {
    alert("Thanks for contacting me!");
}

function increaseCount() {
    clicks++;
    document.getElementById("count").innerHTML = "Clicks: " + clicks;
}

function checkClicks() {
    if (clicks >= 5) {
        alert("Wow! You clicked 5 times!");
    } else {
        alert("Keep clicking!");
    }
}

function hideMessage() {
    document.getElementById("secret").style.display = "none";
}

function showMessage() {
    document.getElementById("secret").style.display = "block";
}

function greetUser() {
    let name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
}

function changeBackground() {
    document.body.style.backgroundColor = "lightgreen";
}

function changeMessage() {
    document.getElementById("message").innerHTML =
        "Welcome to my amazing website!";
}

function changeColor() {
    document.getElementById("colorText").style.color = "red";
}

let dark = false;
function toggleMode() {
    if (dark === false) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "black";
        dark = false;
    }
}