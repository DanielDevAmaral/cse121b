/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Daniel Amaral",
    photo: "images/foto.jpg",
    favoriteFoods: ["Hamburguer", "Tame", "Popcorn"],
    hobbies: ["video game", "lol", "airsoft"],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
//let newItem = {place: "Noruega", length: "7"}
myProfile.placesLived.push({
    place: "Aracaju, SE",
    length: "10 years"
});
myProfile.placesLived.push({
    place: "Salvador, BA",
    length: "5 years"
});
myProfile.placesLived.push({
    place: "São Paulo, SP",
    length: "2 years"
});
//myProfile.placesLived[0].push({length: "7"})
//myProfile.placesLived[1].push({length: "8"})
//myProfile.placesLived[2].push({length: "8"})


/* DOM Manipulation - Output */

/* Name */

const nameElement = document.getElementById("name");
nameElement.textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach((food) => {
    const listofLis = document.createElement("li");
    listofLis.textContent = food;

    favoriteFoodsList.appendChild(listofLis);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
const dlElement = document.getElementById("places-lived");

// Iterate through the "placesLived" property
myProfile.placesLived.forEach(placeInfo => {
  // Create a <dt> element
  const dtElement = document.createElement("dt");
  dtElement.textContent = placeInfo.place;

  // Create a <dd> element
  const ddElement = document.createElement("dd");
  ddElement.textContent = placeInfo.length;

  // Append the <dt> and <dd> elements to the <dl> element
  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
});


