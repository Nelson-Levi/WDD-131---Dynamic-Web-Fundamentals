import insects from "./insects.mjs";

const mainElement = document.querySelector("main");
const heroElement = document.querySelector(".hero-message");

function getQueryParameters() {
    const parameters = new URLSearchParams(window.location.search);
    return {
        id: parameters.get('id'),
    };
}

const queryParameter = getQueryParameters();
const insectID = parseInt(queryParameter.id, 10)

function createHero(insect) {
    const newHero = document.createElement("h1")
    newHero.classList.add("hero-title")

    document.getElementById("hero").style.backgroundImage = `url(${insect.heroImage})`;
    newHero.innerHTML = `
    ${insect.name}
    `
    heroElement.appendChild(newHero);
}

function createMain(insect) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("insect-container");

    newDiv.innerHTML = `
    <div class="insect-card">
    <img src="${insect.iconImage}" alt="${insect.altText}"/>
              <p><span class="title">Name: </span>${insect.name}</p>
          <p>
            <span class="title">Scientific Name: </span>
            <span class="scientific">${insect.scientificName}</span>
          </p>
          <p><span class="title">Family: </span>${insect.family}</p>
          <p><span class="title">Diet: </span>${insect.diet}</p>
          <p><span class="title">Lifespan: </span>${insect.lifespan}</p>
          <p><span class="title">Size: </span>${insect.size}</p>
        </div>
        <section class="insect-text">
          <div class="insect-about">
            <h1>About</h1>
            <p>
                ${insect.about}
            </p>
          </div>
          <div class="insect-life-cycle">
            <h1>Life Cycle</h1>
            <p>
                ${insect.lifeCycle}
            </p>
          </div>
        </section>
    `;
    mainElement.appendChild(newDiv);
}

if (!isNaN(insectID) && insectID >= 0 && insectID < insects.length) {
    const selectedInsect = insects[insectID];
    createHero(selectedInsect);
    createMain(selectedInsect);

} else {
    console.log(insectID)
    console.error("Sorry, you somehow selected an invalid insect!");
}


