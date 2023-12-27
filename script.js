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

window.onload = function() {
  getGeolocationByIP();
};
function getGeolocationByIP() {
        fetch('https://ipinfo.io/json?token=853d7677309503d88db0457e8f66de21')
        .then((response) => response.json())
        .then((data) => {
            // Handle location data (country, region, city, etc.)
          })
        .catch((error) => {
            // Handle error
          });
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n){
  showSlides(slideIndex += n);
}
function currentSlide(n){
  showSlides(slideIndex = n);
}
     function showSlides(n){
      let i;
      let slides=document.getElementsByClassName("mySlides");
      let dots =document.getElementsByClassName("dot");
      if (n > slides.length){slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for(i = 0; i < slides.length;i++){
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
     }
