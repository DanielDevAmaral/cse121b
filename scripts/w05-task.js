
const templesElement = document.getElementById("temples");
let templeList = [];

const displayTemples = (temples) => {


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

const getTemples = async () => {
    const response = (await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"));
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
}


getTemples();


const reset = () => {
  templesElement.innerHTML = ""; 
};


const sortBy = (temples) => {
  reset(); 
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


document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
