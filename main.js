document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID
    var navigateButton = document.getElementById("start")

    // Add a click event listener to the button
    navigateButton.addEventListener('click', function () {
      // Navigate to another HTML page (replace 'anotherPage.html' with the actual file name)
      window.location.href = 'index1.html';
    });
  });
  const alphabetImages = ['a.jpg', 'b.jpg']; // Add more images as needed
let currentImageIndex = 0;

document.getElementById('nextBtn').addEventListener('click', showNextImage);
document.getElementById('prevBtn').addEventListener('click', showPreviousImage);
document.getElementById('alphabetImage').addEventListener('click', playSound);

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % alphabetImages.length;
    updateImage();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + alphabetImages.length) % alphabetImages.length;
    updateImage();
}

function updateImage() {
    const imageElement = document.getElementById('alphabetImage');
    imageElement.src = 'images/' + alphabetImages[currentImageIndex];
}

function playSound() {
    const letter = alphabetImages[currentImageIndex].split('.')[0]; // Extract the letter from the image filename
    const audio = document.getElementById('audio');
    audio.src = 'sounds/' + letter + '.mp3'; // Update the path based on your project structure
    audio.play();
}
  

