// Importing the recipes array from an external module
import recipes from './recipes.mjs';

// Function to generate a random number between 0 and the given limit (exclusive)
// Math.random() generates a random number between 0 and 1, and Math.floor() rounds down to the nearest whole number
function randomNumberGenerator(limit) {
    return Math.floor(Math.random() * limit);
}

// Function to get a random recipe from the recipes array
function GetRandomRecipe(recipes) {
    // Get the length of the recipes array
    const listLength = recipes.length;
    // Generate a random index using the randomNumberGenerator function
    const randomNum = randomNumberGenerator(listLength);
    // Use the random index to select a recipe from the array
    let randomRecipe = recipes[randomNum];
    // Return the selected recipe
    return randomRecipe;
}

// Function to generate an HTML template for a recipe object
function recipeTemplate(recipe) {
    return `
        <div class="recipe-container">
        <img src=${recipe.image} alt="Main recipe image" />
        <div class="recipe-details">
          <div class="all-tags">
            <ul class="tag">
                ${tagsTemplate(recipe)}
            </ul>
          </div>
          <h2 class="recipe-name"><a href="#">${recipe.name}</a></h2>
            ${ratingTemplate(recipe.rating)}
          <p class="description">
            ${recipe.description}
          </p>
        </div>
      </div>
    `;
}

// Function to generate HTML for the tags of a recipe
function tagsTemplate(recipe) {
    let html = ''; // Initialize an empty string to hold the HTML
    // Loop through each tag in the recipe's tags array
    for (let tag of recipe.tags) {
        html += `<li class="tag">${tag}</li>`; // Add each tag as a list item
    }
    return html; // Return the generated HTML
}

// Function to generate HTML for the rating of a recipe
function ratingTemplate(rating) {
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    >`; // Start the rating HTML string
    // Loop 5 times to create the stars (filled or empty)
    for (let step = 0; step < 5; step++) {
        if (step < rating) {
            // Add a filled star if the loop index is less than the rating
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // Add an empty star otherwise
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`; // Close the rating span
    return html; // Return the generated HTML
}

// Function to render an array of recipes into the DOM
function renderRecipes(recipes) {
    const recipeElement = document.querySelector(".main-recipes"); // Select the container for recipes
    let recipeObjects = []; // Initialize an array to hold the HTML for each recipe
    // Loop through each recipe and generate its HTML
    for (let r of recipes) {
        recipeObjects.push(recipeTemplate(r));
    }
    // Join the recipe HTML strings and set them as the innerHTML of the container
    recipeElement.innerHTML = recipeObjects.join("");
}

// Function to filter recipes based on a search query
function queryRecipes(query) {
    // Filter the recipes that match the query in name, description, tags, or ingredients
    let results = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    );
    let sortedResults = results.sort(); // Sort the results alphabetically (optional)
    renderRecipes(sortedResults); // Render the filtered recipes
}

// Event handler for the search button click
function searchHandler() {
    let search = document.getElementById("searchbar").value; // Get the search input value
    let lowercaseString = search.toLowerCase(); // Convert the search string to lowercase
    queryRecipes(lowercaseString); // Pass the search query to the queryRecipes function
}

// Add a click event listener to the submit button
document.getElementById("submit").addEventListener("click", searchHandler);

// Immediately invoked function to initialize the page
(function init() {
    // Get a random recipe from the recipes array
    const recipe = GetRandomRecipe(recipes);
    // Render the random recipe using the renderRecipes function
    renderRecipes([recipe]);
})();
