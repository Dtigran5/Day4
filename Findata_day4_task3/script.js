// JavaScript code for image slider
var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image URLs
var currentIndex = 0;
var sliderImage = document.getElementById("sliderImage");

// Function to update the slider image based on currentIndex
function updateSlider() {
  sliderImage.src = images[currentIndex];
}

// Event listener for previous button
document.getElementById("prevButton").addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

// Event listener for next button
document.getElementById("nextButton").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

// Initialize slider with first image
updateSlider();
