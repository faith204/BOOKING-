// Get the booking form
const bookingForm = document.getElementById("bookingForm");

// Run when the form is submitted
bookingForm.addEventListener("submit", function(event) {

```
// Stop the page from refreshing
event.preventDefault();

// Display a simple message
alert("Your booking has been submitted successfully!");

// Clear the form
bookingForm.reset();
```

});
