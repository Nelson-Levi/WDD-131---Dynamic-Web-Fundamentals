// When the page loads, set the current number of participants equal to one. I have to make a variable for this.

let currentParticipants = 1;
document.addEventListener("DOMContentLoaded", () => {
    console.log("Current number of participants:", currentParticipants);

    const addButton = document.getElementById("add");

    addButton.addEventListener("click", () => {
        currentParticipants ++;
        copyParticipantSection(currentParticipants);
        // I have this statement just to debug lol
        console.log("Current number of participants:", currentParticipants);
    });
});


// This function will copy the participant section.
function copyParticipantSection(participantNumber) {
    // Save the current participant section as a constant
    const participantSection = document.querySelector(".participant1");

    // This method will clone it (very cool!)
    const newParticipantSection = participantSection.cloneNode(true);

    // Now we have to update the HTML
    // This changes the name of the class
    newParticipantSection.className = `participant${participantNumber}`;
    newParticipantSection.querySelector("p").textContent = `Participant ${participantNumber}`;

    // Update the id attributes now
    const inputElements = newParticipantSection.querySelectorAll("input");
    inputElements.forEach((input) => {
        input.id = input.id + participantNumber;
        
        // And let's update the for values too
        const label = newParticipantSection.querySelector(`label[for='${input.id}']`);
        if (label) {
            label.setAttribute('for', input.id);
        }
    });

    const participantsContainer = document.querySelector(".participants");
    const addButton = document.getElementById("add");

    // Insert the new section before the Add button.
    participantsContainer.insertBefore(newParticipantSection, addButton);
}


const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    // I'm doing this to debug
    console.log("Form submitted!");
}

function findTotalFees() {
    // get all the fees
    let feeElements = document.querySelectorAll("[id^='fee']");
    // Doing this to debug
    console.log(feeElements)

    // Had to ask chatGPT for this one because I couldn't get it. The [...] is a spread operator. It converts the NodeList that is returned by querySelectorAll into an array. Then we can use reduce().
    feeElements = [...feeElements]; 

    // total is equal to sum + fee
    // sum is the function applied, feeInput is the array that the function applies to
    let total = feeElements.reduce((sum, feeInput) => {
        // convert from string to number
        // || 0 means that in case of an invalid input, it'll be 0 in the addition
        const fee = parseFloat(feeInput.value) || 0;
        return sum + fee
    // I put a 0 here, because that's the initial value that Reduce uses. It'll start counting from 0 because I supplied it.
    }, 0);

    // And return the total 
    return total
}

function submitForm(event) {
    event.preventDefault();

    // Get the adult's name
    const adultName = document.querySelector("#adult_name").value;
    // debugging
    console.log("Adult name:", adultName)

    const numberOfParticipants = currentParticipants;
    const total = findTotalFees();

    // and now we hide the form
    const form = document.querySelector("form");
    form.style.display = "none";

    // and show the summary
    const summary = document.querySelector("#summary");
    summary.style.display = "block";

    // Insert the message
    summary.innerHTML = successTemplate({
        adultName: adultName,
        numberOfParticipants: numberOfParticipants,
        totalFees: total
    });
}

function successTemplate(info) {
    return `<h2>Thank you ${info.adultName} for registering. You have registered ${info.numberOfParticipants} and owe $${info.totalFees.toFixed(2)} in fees.</h2>`
}