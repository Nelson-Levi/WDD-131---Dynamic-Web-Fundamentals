import insects from "./insects.mjs";

const imagesElement = document.querySelector(".picture-gallery");

function Shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function DisplayInsects(insects) {
  const shuffledInsects = Shuffle(insects).filter(x => x);
  for (const insect of shuffledInsects) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("img-container");

    newDiv.innerHTML = `
    <a href="overview.html?id=${insect.id}" target="_blank">
        <img src="${insect.homeImage}" alt="${insect.altText}">
        <div class="overlay">${insect.name}</div>
    </a>
        `;
    imagesElement.appendChild(newDiv);

    await sleep(100);
  }
}

DisplayInsects(insects);
