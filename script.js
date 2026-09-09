// ================================
// EASYBOOK SERVICES JAVASCRIPT
// ================================

// Get the booking form
const bookingForm = document.getElementById("bookingForm");

// Get the booking message
const bookingMessage = document.getElementById("bookingMessage");

// Get the travel date
const travelDate = document.getElementById("date");

// Get the theme button
const themeButton = document.getElementById("themeButton");

// Get the background colour picker
const backgroundColor = document.getElementById("backgroundColor");

// =================================
// SET TODAY'S DATE
// =================================

const today = new Date().toISOString().split("T")[0];

travelDate.setAttribute("min", today);

// =================================
// DARK MODE / LIGHT MODE
// =================================

function changeTheme() {

```
// Add or remove dark mode
document.body.classList.toggle("dark-mode");

// Check whether dark mode is active
if (document.body.classList.contains("dark-mode")) {

    themeButton.innerHTML = "☀️ Light Mode";

    // Save dark mode
    localStorage.setItem("theme", "dark");

} else {

    themeButton.innerHTML = "🌙 Dark Mode";

    // Save light mode
    localStorage.setItem("theme", "light");
}
```

}

// =================================
// CHANGE BACKGROUND COLOUR
// =================================

function changeBackgroundColor() {

```
// Get the selected colour
const selectedColor = backgroundColor.value;

// Change the page background
document.body.style.backgroundColor = selectedColor;

// Save the colour
localStorage.setItem("backgroundColor", selectedColor);
```

}

// =================================
// RESET APPEARANCE
// =================================

function resetAppearance() {

```
// Remove dark mode
document.body.classList.remove("dark-mode");

// Set light mode button
themeButton.innerHTML = "🌙 Dark Mode";

// Set default background
document.body.style.backgroundColor = "#f4f7fb";

// Set colour picker to default
backgroundColor.value = "#f4f7fb";

// Save the default settings
localStorage.setItem("theme", "light");

localStorage.setItem(
    "backgroundColor",
    "#f4f7fb"
);
```

}

// =================================
// LOAD SAVED SETTINGS
// =================================

window.onload = function() {

```
// Get saved theme
const savedTheme = localStorage.getItem("theme");

// Get saved background colour
const savedColor =
    localStorage.getItem("backgroundColor");


// Apply saved dark mode
if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.innerHTML = "☀️ Light Mode";
}


// Apply saved background colour
if (savedColor) {

    document.body.style.backgroundColor =
        savedColor;

    backgroundColor.value = savedColor;
}
```

};

// =================================
// BOOK NOW BUTTON
// =================================

function scrollToBooking() {

```
document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
});
```

}

// =================================
// BOOKING FORM
// =================================

bookingForm.addEventListener(
"submit",
function(event) {

```
    // Stop page from refreshing
    event.preventDefault();


    // Get form values
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const destination =
        document.getElementById("destination").value.trim();

    const date =
        document.getElementById("date").value;

    const people =
        document.getElementById("people").value;


    // =================================
    // CHECK FORM
    // =================================

    if (
        name === "" ||
        email === "" ||
        service === "" ||
        destination === "" ||
        date === "" ||
        people === ""
    ) {

        bookingMessage.innerHTML =
            "❌ Please fill in all the fields.";

        bookingMessage.style.backgroundColor =
            "#ffdddd";

        bookingMessage.style.color =
            "#cc0000";

        return;
    }


    // =================================
    // CHECK NUMBER OF PEOPLE
    // =================================

    if (people < 1 || people > 20) {

        bookingMessage.innerHTML =
            "❌ Number of people must be between 1 and 20.";

        bookingMessage.style.backgroundColor =
            "#ffdddd";

        bookingMessage.style.color =
            "#cc0000";

        return;
    }


    // =================================
    // SUCCESS MESSAGE
    // =================================

    bookingMessage.innerHTML =
        "✅ Thank you, " + name +
        "! Your " + service +
        " booking to " + destination +
        " for " + people +
        " person(s) has been received.";


    bookingMessage.style.backgroundColor =
        "#d4edda";

    bookingMessage.style.color =
        "#155724";


    // Clear form
    bookingForm.reset();


    // Set date again after reset
    travelDate.setAttribute("min", today);

}
```

);
