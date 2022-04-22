const DisplayExchange = document.getElementById('exchange');
const Location_API_KEY = "AIzaSyCvhC0WQxE3Er0n0vTX63t4IBpnfVga148";
const DisplayLocation = document.getElementById('location');

// Exchange part
fetch("http://localhost:3000/exchange")
    .then(response => {return response.json()})
    .then(data => {
        DisplayExchange.innerHTML = data;
    })
    .catch(err => console.log(err))

//Geolocation part

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        let x = position.coords.latitude, y = position.coords.longitude;
        let lnk = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + x + ", " + y + "&key=" + Location_API_KEY;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', lnk);
        xhr.onload = function() {
            const data = JSON.parse(xhr.response);
            let str = "", s = data.plus_code.compound_code, cnt = 0;
            for (var i = 0; i < s.length; ++i) {
                if (s[i] === ' ') ++cnt;
                if (cnt === 0) continue;
                str += s[i];
            }
            DisplayLocation.innerHTML = str;
        }
        xhr.send();
    });
}
