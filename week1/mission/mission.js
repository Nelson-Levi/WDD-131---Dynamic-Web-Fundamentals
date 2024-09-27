document.getElementById("theme").addEventListener('change', changeTheme);

const themeSelector = document.querySelector("select");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const selectedTheme = themeSelector.value;

// if the value is dark then:
    if (selectedTheme === "dark") {
        // add the dark class to the body
        document.body.classList.add("dark");
        // change the source of the logo img to point to the white logo.
        document.querySelector("img").src = "byui-logo_gray.png";
        // otherwise
    } else {
        // remove the dark class
        document.body.classList.remove("dark");
        // make sure the logo src is the blue logo.
        document.querySelector("img").src = "byui-logo_blue.webp";
    }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);