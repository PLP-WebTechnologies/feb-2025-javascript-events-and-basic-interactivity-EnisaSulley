// Event Handling: Button Click
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("textContent").textContent = "Text has been changed!";
});

// Event Handling: Hover Effects
const hoverButton = document.getElementById("hoverButton");
hoverButton.addEventListener("mouseover", function() {
    hoverButton.style.backgroundColor = "green";
});
hoverButton.addEventListener("mouseout", function() {
    hoverButton.style.backgroundColor = "";
});

// Image Gallery - Next Image Button
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

document.getElementById("nextImageButton").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    if (!username) {
        document.getElementById("formFeedback").textContent = "Username is required!";
        event.preventDefault();
    }
});
