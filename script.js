// Get the booking form
const bookingForm = document.getElementById("bookingForm");

// Get the message area
const bookingMessage = document.getElementById("bookingMessage");

// Get the travel date input
const travelDate = document.getElementById("date");

// Set the minimum travel date to today
const today = new Date().toISOString().split("T")[0];

travelDate.setAttribute("min", today);

// Book Now button
function scrollToBooking() {
document.getElementById("booking").scrollIntoView({
behavior: "smooth"
});
}

// Handle booking form
bookingForm.addEventListener("submit", function(event) {

```
// Prevent the page from refreshing
event.preventDefault();

// Get values from the form
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const service = document.getElementById("service").value;
const destination = document.getElementById("destination").value;
const date = document.getElementById("date").value;
const people = document.getElementById("people").value;


// Check that all fields are filled
if (
    name === "" ||
    email === "" ||
    service === "" ||
    destination === "" ||
    date === "" ||
    people === ""
) {

    bookingMessage.innerHTML =
        "Please fill in all the fields.";

    bookingMessage.style.backgroundColor = "#ffdddd";
    bookingMessage.style.color = "#cc0000";

    return;
}


// Check number of people
if (people < 1 || people > 20) {

    bookingMessage.innerHTML =
        "Number of people must be between 1 and 20.";

    bookingMessage.style.backgroundColor = "#ffdddd";
    bookingMessage.style.color = "#cc0000";

    return;
}


// Display successful booking message
bookingMessage.innerHTML =
    "Thank you, " + name +
    "! Your " + service +
    " booking to " + destination +
    " for " + people +
    " person(s) has been received.";


bookingMessage.style.backgroundColor = "#d4edda";
bookingMessage.style.color = "#155724";


// Clear the form
bookingForm.reset();

// Set date again after reset
travelDate.setAttribute("min", today);
```

});


// Dark Mode
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

// Light Mode
function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
