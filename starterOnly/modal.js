const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const checkboxInput = document.querySelectorAll('.checkbox-input');

let modalBody = document.querySelector(".modal-body");


const form = document.querySelector("form");
const closeModalBtn = document.querySelector(".close");
const closeBtn = document.querySelector(".btn-close");

const messageConfirmation = document.querySelector(".message-confirmation");

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



// Function when form is submitting, this verify if all is ok.
function formSubmit(e) {

  // An array contain errors messages
  let numberOfError = [];

  // Call function of verification for the First Name enter by user, "e" parameter is the "e" parameter of formSubit, is event object.
  // Same for all others functions
  firstNameVerification(e, numberOfError);

  // Call function of verification for the Last Name enter by user
  lastNameVerification(e, numberOfError);

  // Call function of verification for email
  emailVerification(e, numberOfError);

  // Call function of verification for birth date
  birthDateChecked(e, numberOfError);

  // Call function of verification for quantity of tournament participate
  tournamentQuantityChecked(e, numberOfError);

  // Call function of verification if city is selected
  cityTournamentChecked(e, numberOfError);
  
  // Call function of verification if terms are selected
  termsCondition(e, numberOfError);

  // Call function of confirmation form submitted
  submitConfirmation(e, numberOfError);

}


// Function of verification for First Name, parameters "element" is "e" for event and error is the array of errors
function firstNameVerification(element, error) {
  // Verify if the longer of first name is > than 2 and not empty
  if (firstName.value.trim().length >= 2 && firstName.value.trim() != "") {

    // Change border on green to signal all good, and remove error message
    firstName.style.border = "2px solid #279e7a";
    errorFirst.innerText = "";

    // Stock the value of fist name in sessionStorage
    sessionStorage.setItem("firstName", firstName.value.trim());

  } else {

    // When error, stop form submit
    element.preventDefault();
    // Push a error message in error array, add a red border and an error message
    error.push('Erreur dans le prénom');
    firstName.style.border = "2px solid #FF4E60";
    errorFirst.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

  }

}

// Function of verification for Last Name, parameters "element" is "e" for event and error is the array of errors
function lastNameVerification(element, error) {
  // Verify if the longer of last name is > than 2 and not empty
  if (lastName.value.trim().length >= 2 && lastName.value.trim() != "") {

    // Change border on green to signal all good, and remove error message
    lastName.style.border = "2px solid #279e7a";
    errorLast.innerText = "";

    // Stock the value of last name in sessionStorage
    sessionStorage.setItem("lastName", lastName.value.trim());

  } else {

    // When error, stop form submit
    element.preventDefault();
    // Push a error message in error array, add a red border and an error message
    error.push('Erreur dans le nom');
    lastName.style.border = "2px solid #FF4E60";
    errorLast.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

  }
}

// Function of verification for email, parameters "element" is "e" for event and error is the array of errors
function emailVerification(element, error) {
  // Verify if email match with the regex for an valide email
  if (email.value.match(regexEmail)) {

    // Change border on green to signal all good, and remove error message
    email.style.border = "2px solid #279e7a";
    errorEmail.innerText = "";

    // Stock the value of email in sessionStorage
    sessionStorage.setItem("email", email.value);

  } else {

    // When error, stop form submit
    element.preventDefault();
    // Push a error message in error array, add a red border and an error message
    error.push("Erreur dans l'email");
    email.style.border = "2px solid #FF4E60";
    errorEmail.innerText = "Veuillez entrer une adresse email valide.";

  }
}

// Function of verification for bird date, parameters "element" is "e" for event and error is the array of errors
function birthDateChecked(element, error) {

  // Create an variable with date now and another who calculates the date today - birth date for give age of user
  const dateToday = Date.now();
  const birthDateMinimum = dateToday - Date.parse(birthDate.value);

  // Verify if the birth date value is not empty and if birth date value is superior or equal to bird date minimum
  if (birthDate.value !== "" && birthDateMinimum >= 410240376000) {

    // Change border on green to signal all good, and remove error message
    birthDate.style.border = "2px solid #279e7a";
    errorBirthdate.innerText = "";

    // Stock the value of birth date in sessionStorage
    sessionStorage.setItem("birthDate", birthDate.value);

  } else {

    // When error, stop form submit
    element.preventDefault();
    // Push a error message in error array, add a red border and an error message
    error.push("Erreur de date de naissance");
    birthDate.style.border = "2px solid #FF4E60";
    errorBirthdate.innerText = "Veuillez entrer une date de naissance valide.";

  }
}

// Function of verification for quantity paricipate tournament
function tournamentQuantityChecked(element, error) {
  // Verify if the value is not empty and superior or equal to 0
  if (tournamentQuantity.value != "" && tournamentQuantity.value >= 0) {

    // Change border on green to signal all good, and remove error message
    tournamentQuantity.style.border = "2px solid #279e7a";
    errorQuantity.innerText = "";

    // Stock the value of quantity in sessionStorage
    sessionStorage.setItem("tournamentQuantity", tournamentQuantity.value);

  } else {

    // When error, stop form submit
    element.preventDefault();
    // Push a error message in error array, add a red border and an error message
    error.push("Erreur nombre participation");
    tournamentQuantity.style.border = "2px solid #FF4E60";
    errorQuantity.innerText = "Veuillez saisir un nombre valide";

  }
}

// Function of verification for city paricipate tournament
function cityTournamentChecked(element, error) {
  // Use for 
  for (let index = 0; index < tournamentCity.length; index++) {
    const cityTournament = tournamentCity[index];
    
    if (cityTournament.checked) {

      // Remove error message
      errorCity.innerText = "";

      // Stock the value of city in sessionStorage
      sessionStorage.setItem("tournamentCity", cityTournament.value);

      // Return the value of cityTournament
      return cityTournament.value;

    } else {

      // When error, stop form submit
      element.preventDefault();
      // Push a error message in error array, add a red border and an error message
      error.push("Erreur dans la sélection de la ville");
      errorCity.innerText = "Veuillez sélectionner une ville.";

    }
  }
}

// Function of verification for terms of conditions
function termsCondition(element, error) {
  // Verify if terms are checked
  if (termsOfUse.checked) {

    // Remove error message
    errorTerms.innerText = "";

  } else {

    // When error, stop form submit
    element.preventDefault();
    // Push a error message in error array, add a red border and an error message
    error.push("Erreur acceptation des conditions d'utilisation");
    errorTerms.innerText = "Veuillez accepter les conditions d'utilisation.";

  }
}


// Function of confirmation before form submit
function submitConfirmation(element, errorList) {

  // Verify if the array of errors is equal to 0 (no error)
  if (errorList.length == 0) {
    
    // Stop page reload
    element.preventDefault();

    // Hide the form
    form.style.display = "none";

    // Show message of confirmation after submit
    messageConfirmation.style.display = "block";

    // Show btn who close the modal
    closeBtn.style.display = "block";

    console.log("Il n'y a pas d'erreur dans le formulaire");

    // Clear the sessionStorage
    sessionStorage.clear();

  } else {

    console.log("Il y a des erreurs dans le formulaire");

  }

  console.log("Formulaire envoyé");

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


  if (sessionStorage.getItem("firstName")) {
    firstName.value = sessionStorage.getItem("firstName");
  }

  if (sessionStorage.getItem("lastName")) {
    lastName.value = sessionStorage.getItem("lastName");
  }

  if (sessionStorage.getItem("email")) {
    email.value = sessionStorage.getItem("email");
  }

  if (sessionStorage.getItem("birthDate")) {
    birthDate.value = sessionStorage.getItem("birthDate");
  }

  if (sessionStorage.getItem("tournamentQuantity")) {
    tournamentQuantity.value = sessionStorage.getItem("tournamentQuantity");
  }

  if (sessionStorage.getItem("tournamentCity")) {

    const tournamentCityValue = sessionStorage.getItem('tournamentCity');
    const tournamentCityChecked = document.querySelector(`input[value="${tournamentCityValue}"]`);

    tournamentCityChecked.checked = true;

  }

}

// button for close the modal
closeModalBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

function closeModal() {

  modalbg.style.display = "none";

  if (form.style.display == "none") {

    form.style.display = "block";
    
    messageConfirmation.style.display = "none";
    closeBtn.style.display = "none";

  } else if (form.style.display == "") {

    form.style.display = "";

  } else {

    form.style.display = "none";

  }

}