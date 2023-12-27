// // Replace 'YOUR_API_KEY' with the actual API key
// var apiKey = '853d7677309503d88db0457e8f66de21';
// var ipAddress = 'user_ip_address'; // You can get the user's IP address on the server-side

// fetch(`https://api.ipgeolocationapi.com/geolocate/${ipAddress}?api-key=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // Access location details like data.country_name, data.region, data.city, etc.
//     })
//     .catch(error => console.error('Error:', error));

// window.onload = function() {
//   getGeolocationByIP();
// };
// function getGeolocationByIP() {
//         fetch('https://ipinfo.io/json?token=853d7677309503d88db0457e8f66de21')
window.onload = function () {
  const getLocation = () => {      
      // Replace 'YOUR_API_KEY' with your actual ipinfo API key
      const apiKey = 'ff3b255d99c518';

      fetch(`https://ipinfo.io?token=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
              // Handle location data (country, region, city, etc.)
              console.log(data);

              const des = document.querySelector(".location");
              des.innerHTML = `latitude: ${data.loc.split(',')[0]} longitude: ${data.loc.split(',')[1]}`;
          })
          .catch((error) => {
              // Handle error
              console.error('Error fetching location data:', error);
              return data;
          });
  }

  getLocation(); // Call the function when the window has fully loaded
}




let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

// Pause slideshow when hovering over it
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function () {
    clearTimeout(slideshowTimeout);
});

// Resume slideshow when not hovering
slideshowContainer.addEventListener('mouseleave', function () {
    clearTimeout(slideshowTimeout);
    slideshowTimeout = setTimeout(showSlides, 1300);
});

let slideshowTimeout = setTimeout(showSlides, 1300);


// let slideIndex = 0;
// showSlides(slideIndex);

// // function plusSlide(n){
// //   showSlides(slideIndex += n);
// // }

// function plusSlide(n) {  // Corrected function name
//   showSlides(slideIndex += n);
// }
// function currentSlide(n){
//   showSlides(slideIndex = n);
// }
//      function showSlides(n){
//       let i;
//       let slides=document.getElementsByClassName("mySlides");
//       let dots =document.getElementsByClassName("dot");
//       if (n > slides.length){slideIndex = 1}
//       if (n < 1) {slideIndex = slides.length}
//       for(i = 0; i < slides.length;i++){
//         slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
//       setTimeout(showSlides, 2000);
//      }
