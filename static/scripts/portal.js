const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const preloader = document.querySelector('.preloader');

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById("loginbtn").addEventListener("click",function(){
  document.querySelector(".popup").style.display="flex";
})

document.getElementById("registerbtn").addEventListener("click",function(){
  document.querySelector(".popup").style.display="flex";
})

document.querySelector(".close").addEventListener("click",function(){
  document.querySelector(".popup").style.display="none";
})


/* IMPLEMENTATION OF GEOLOCATION API */

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    (position) => {
      /* success: print result on the console */
      console.log("latitude: " + position.coords.latitude);
      console.log("longitude: " + position.coords.longitude);
      document.getElementsByClassName('location-loader-container')[0].style.display = "none";
    },
    (error) => {
      /* error: call showError Method for detailed logging of the error */
      showError(error);
      document.getElementsByClassName('access-pending')[0].style.display = "none";
      document.getElementsByClassName('access-denied')[0].style.display = "block";
    }
  );
} else {
  /* geolocation IS NOT available */
  console.log("sorry, geolocation is not available on this device");
}