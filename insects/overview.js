import insects from "./insects.mjs";

const mainElement = document.querySelector("main");
const heroElement = document.querySelector(".hero-message");

const insectID = 12;

function CreateHero(insects) {
    const insect = insects[insectID];
    const newHero = document.createElement("h1")
    newHero.classList.add("hero-title")

    document.getElementById("hero").style.backgroundImage = `url(${insect.heroImage})`;
    newHero.innerHTML = `
    ${insect.name}
    `
    heroElement.appendChild(newHero);
}

function CreateMain(insects) {
    const insect = insects[insectID];
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

CreateHero(insects);
CreateMain(insects);
