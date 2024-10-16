// const menuButton = document.getElementById('menu');

// function toggleMenu() {
//     const navLinks = document.querySelector('nav a');
//     navLinks.classList.toggle('hide');
//     }

// function handleResize() {
//     const navLinks = document.querySelectorAll('nav a');
//     if (window.innerWidth > 1000) {
//         navLinks.classList.remove('hide');
//     } else {
//         navLinks.classList.add('hide');
//     }
// }

// // menuButton.addEventListener("click", toggleMenu);

// // const menuButton = document.getElementById('menu');

// // function toggleMenu() {
// //     const navLinks = document.querySelectorAll('nav a');
// //     for (const nav of navLinks) {
// //         nav.style.display = nav.style.display === 'none' ? 'inline' : 'none';
// //     }
// // }

// menuButton.addEventListener("click", toggleMenu);



function toggleMenu() {
    // This will select EVERY NAV A element, NOT JUST ONE
    const menuItems = document.querySelectorAll("nav a");
    menuItems.forEach(item => {
        item.classList.toggle("hide");
    });
}


// If you hide the nav bar, then increase the size of the page, it might stay hidden! This function handles that.
function handleResize() {
    const menuItems = document.querySelectorAll("nav a");
    // If the window is bigger than 1000 px, then remove the hide class from the nav links.
    if (window.innerWidth > 1000) {
        menuItems.forEach(item => item.classList.remove("hide"));
    // Otherwise, keep them there
    } else {
        menuItems.forEach(item => item.classList.add("hide"));
    }
}
// Run the function immediately when the page loads
handleResize();

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-button">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "_"
    let imageSource = clickedElement.src;
    let parts = imageSource.split("_");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let fullImage = parts[0] + "_full.jpeg";
    let altText = clickedElement.alt;

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImage, altText))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener("click", closeViewer);
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", event => {
    if (event.target.tagName === "IMG") {
        viewHandler(event);
    }
})

function closeViewer() {
    let viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}


// When the menu button is clicked, call the toggleMenu() function.
const menuButton = document.getElementById("menubutton");
menuButton.addEventListener("click", toggleMenu);

// When the window is resized, call the handleResize() function.
window.addEventListener("resize", handleResize);

