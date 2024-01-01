window.onload = function () {
    const getLocation = () => {
        // Replace 'YOUR_API_KEY' with your actual IPinfo API key
        const apiKey = 'ff3b255d99c518'; // Replace with your actual API key

        fetch(`https://ipinfo.io?token=${apiKey}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Handle location data (country, region, city, etc.)
                console.log(data);

                // Check if 'loc' property exists in the response data
                if (data.loc) {
                    const [latitude, longitude] = data.loc.split(',');
                    const locationElement = document.querySelector(".location");
                    locationElement.innerHTML = `Latitude: ${latitude} Longitude: ${longitude}`;
                } else {
                    console.error('Location data is incomplete:', data);
                }
            })
            .catch((error) => {
                // Handle fetch error
                console.error('Error fetching location data:', error.message);
            });
    };

    getLocation();
};






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

    setTimeout(showSlides, 2000);
}

// Pause slideshow when hovering over it
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function () {
    clearTimeout(slideshowTimeout);
});

// Resume slideshow when not hovering
slideshowContainer.addEventListener('mouseleave', function () {
    clearTimeout(slideshowTimeout);
    slideshowTimeout = setTimeout(showSlides, 1600);
});

let slideshowTimeout = setTimeout(showSlides, 1600);
