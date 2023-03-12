const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const checkboxInput = document.querySelectorAll('.checkbox-input');

let modalBody = document.querySelector(".modal-body");


const form = document.querySelector("form");
const closeModalBtn = document.querySelector(".close");

const messageConfirmation = document.querySelector(".message-confirmation");

console.log(messageConfirmation);


const btnMenu = document.querySelector(".icon");


const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const tournamentQuantity = document.querySelector("#quantity");
const tournamentCity = document.querySelectorAll("input[type='radio']");
const termsOfUse = document.querySelector("#checkbox1");

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;

const errorFirst = document.getElementById("error-first");
const errorLast = document.getElementById("error-last");
const errorEmail = document.getElementById("error-email");
const errorBirthdate = document.getElementById("error-birthdate");
const errorQuantity = document.getElementById("error-quantity");
const errorCity = document.getElementById("error-city");
const errorTerms = document.getElementById("error-terms");

// errorFirst.innerText = "hello";

// console.log(termsOfUse.value);


// Les champs nom et prénom doivent avoir au minimum 2 caractères et ne doivent pas être vide
// Créer une fonction qui vérifie la longueur des champs nom et prénom et vérifie que la longeur n'est pas 0 ou null
// Elle doit vérifier que le champ email est valide
// Elle doit vérifier que le champ du nombre de concours saisi est bien un nombre
// Vérifie qu'une ville est saisie
// Enfin, elle vérifie que les conditions générales est cochée

// Le formulaire doit conserver les données saisies lorsque la validation n'est pas valide

// console.log(termsOfUse.value);


function formSubmit(e) {

  let numberOfError = [];

  firstNameVerification(e, numberOfError);

  lastNameVerification(e, numberOfError);

  emailVerification(e, numberOfError);

  birthDateChecked(e, numberOfError);

  tournamentQuantityChecked(e, numberOfError);

  cityTournamentChecked(e, numberOfError);
  
  termsCondition(e, numberOfError);

  submitConfirmation(e, numberOfError);

}


function firstNameVerification(element, error) {
  if (firstName.value.trim().length >= 2 && firstName.value.trim() != "") {

    firstName.style.border = "2px solid #279e7a";
    errorFirst.innerText = "";

  } else {

    element.preventDefault();
    error.push('Erreur dans le prénom');
    firstName.style.border = "2px solid #FF4E60";
    errorFirst.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

  }
}

function lastNameVerification(element, error) {
  if (lastName.value.trim().length >= 2 && lastName.value.trim() != "") {

    lastName.style.border = "2px solid #279e7a";
    errorLast.innerText = "";

  } else {

    element.preventDefault();
    error.push('Erreur dans le nom');
    lastName.style.border = "2px solid #FF4E60";
    errorLast.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

  }
}

function emailVerification(element, error) {
  if (email.value.match(regexEmail)) {

    email.style.border = "2px solid #279e7a";
    errorEmail.innerText = "";

  } else {

    element.preventDefault();
    error.push("Erreur dans l'email");
    email.style.border = "2px solid #FF4E60";
    errorEmail.innerText = "Veuillez entrer une adresse email valide.";

  }
}

function birthDateChecked(element, error) {
  if (birthDate.value !== "") {

    birthDate.style.border = "2px solid #279e7a";
    errorBirthdate.innerText = "";

  } else {

    element.preventDefault();
    error.push("Erreur de date de naissance");
    birthDate.style.border = "2px solid #FF4E60";
    errorBirthdate.innerText = "Veuillez entrer une date de naissance valide.";

  }
}

function tournamentQuantityChecked(element, error) {
  if (tournamentQuantity.value != "" && tournamentQuantity.value >= 0) {

    tournamentQuantity.style.border = "2px solid #279e7a";
    errorQuantity.innerText = "";

  } else {

    element.preventDefault();
    error.push("Erreur nombre participation");
    tournamentQuantity.style.border = "2px solid #FF4E60";
    errorQuantity.innerText = "Veuillez saisir un nombre valide";

  }
}

function cityTournamentChecked(element, error) {
  for (let index = 0; index < tournamentCity.length; index++) {
    const cityTournament = tournamentCity[index];
    
    if (cityTournament.checked) {

      errorCity.innerText = "";
      return cityTournament.value;

    } else {

      element.preventDefault();
      error.push("Erreur dans la sélection de la ville");
      errorCity.innerText = "Veuillez sélectionner une ville.";

    }
  }
}

function termsCondition(element, error) {
  if (termsOfUse.checked) {

    errorTerms.innerText = "";

  } else {

    element.preventDefault();
    error.push("Erreur acceptation des conditions d'utilisation");
    errorTerms.innerText = "Veuillez accepter les conditions d'utilisation.";

  }
}


function submitConfirmation(element, errorList) {
  // Vérifier que le tableau des erreurs est égale à 0
  // Si c'est le cas, créer un nouvel element dans la modale "modal-body" avec le message
  // indiquant que le formulaire a bien été envoyé

  console.log(errorList.length);

  if (errorList.length == 0) {
    
    element.preventDefault();

    // Mettre un display none au form
    // Créer un nouveau paragraphe contenant le message de confirmation d'inscription
    
    // Au clique sur la croix, mettre un display none au message de confirmation et un display block au form pour le faire réaparaitre
    // Rajouter un bouton "fermer" pour fermer la modale

    form.style.display = "none";

    messageConfirmation.style.display = "block";

    console.log("Il n'y a pas d'erreur dans le formulaire");

  } else {

    console.log("Il y a des erreurs dans le formulaire");

  }

  console.log("Formulaire envoyé");

  // S'il reste des erreurs dans le tableau des erreurs,
  // Ne pas envoyer le formulaire
}


// Form submit
form.addEventListener("submit", formSubmit);



// A refaire

function editNav() {
  let topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

btnMenu.addEventListener("click", editNav);


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// button for close the modal
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";

  console.log(form.style.display);

  if (form.style.display == "none") {

    form.style.display = "block";
    
    messageConfirmation.style.display = "none";

  } else if (form.style.display == "") {

    form.style.display = "";

  } else {

    form.style.display = "none";

  }
}