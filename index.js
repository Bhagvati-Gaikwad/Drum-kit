// Function to play sound based on key/button pressed
function playSound(key) {
    let sound;

    switch (key) {
        case "w":
            sound = "sounds/tom-1.mp3";
            break;
        case "a":
            sound = "sounds/tom-2.mp3";
            break;
        case "s":
            sound = "sounds/tom-3.mp3";
            break;
        case "d":
            sound = "sounds/tom-4.mp3";
            break;
        case "j":
            sound = "sounds/snare.mp3";
            break;
        case "k":
            sound = "sounds/kick-bass.mp3";
            break;
        case "l":
            sound = "sounds/crash.mp3";
            break;
        default:
            return;
    }

    let audio = new Audio(sound);
    audio.play();
}

// Detect button clicks
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
});

// Detect keyboard presses
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    animateButton(event.key);
});

// Function to animate buttons when pressed
function animateButton(key) {
    let activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 100);
    }
}
