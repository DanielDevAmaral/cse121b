// Step 1
const templesElement = document.getElementById("temples");

// Step 2
let templeList = [];

// Step 3
const displayTemples = (temples) => {
 // templesElement.innerHTML = ""; // Clear the previous content

  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = (await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"));
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
}

// Call the getTemples function to fetch and display temple data
getTemples();

// Step 5
const reset = () => {
  templesElement.innerHTML = ""; // Clear all the temple cards
};

// Step 6
const sortBy = (temples) => {
  reset(); // Clear the displayed list of temples
  const filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicatedDate) > new Date(1950, "January", 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

// Step 7
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
