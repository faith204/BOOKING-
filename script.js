const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Booking Successful! Thank you for choosing EasyBook Services.");

form.reset();

});
