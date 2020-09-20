const getLocation = document.getElementById("getlocation");

getLocation.addEventListener('click', evt =>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            
            console.log(latitude,longitude);
        },error=>{
            console.log(error.code);
        });
    } else {
        console.log("Error!");
    }
});

setTimeout(function(){ window.location = "http://127.0.0.1:5500/templates/portal.html"; },2000);