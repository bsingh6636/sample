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
      
