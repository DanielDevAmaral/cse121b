/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Daniel Leite Amaral";
const currentYear = 2023;
let profilePicture = `images/Imagem do WhatsApp de 2023-02-27 à(s) 15.49.24.jpg`



/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.createElement("img");
const localImg = document.querySelector("picture")



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', "Profile image of Daniel Leite Amaral");
localImg.appendChild(imageElement);


/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Hamburguer", "Lasanha", "Pasta"];
foodElement.innerHTML += `<br> ${favoriteFoods}`;
let singleFood = "Banana";
favoriteFoods.push(singleFood);
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br> ${favoriteFoods}`;









