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
