const modalBg = document.querySelector(".bground");
const btnSignUp = document.querySelectorAll(".btn-signup");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");

// Icon X closing modal and button closing the modal after form submitting
const closeModalBtn = document.querySelector(".close");
const closeBtn = document.querySelector(".btn-close");

// Message of confirmation after form submitting
const messageConfirmation = document.querySelector(".message-confirmation");

// Button for menu on responsive mode
const btnMenu = document.querySelector(".icon");

// Individual inputs form
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const tournamentQuantity = document.querySelector("#quantity");
const tournamentCity = document.querySelectorAll("input[type='radio']");
const termsOfUse = document.querySelector("#checkbox1");

// Regex for form verifications (mail)
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Const to select div for message error
const errorFirstName = document.getElementById("error-first");
const errorLastName = document.getElementById("error-last");
const errorEmail = document.getElementById("error-email");
const errorBirthdate = document.getElementById("error-birthdate");
const errorQuantity = document.getElementById("error-quantity");
const errorCity = document.getElementById("error-city");
const errorTerms = document.getElementById("error-terms");



// Function when form is submitting, this verify if all is ok.
function formSubmit(e) {

  // An array contain errors messages
  let errorsMessagesForm = [];

  // Call function of verification for the First Name enter by user, "e" parameter is the "e" parameter of formSubit, is event object.
  // Same for all others functions
  firstNameVerification(errorsMessagesForm);

  // Call function of verification for the Last Name enter by user
  lastNameVerification(errorsMessagesForm);

  // Call function of verification for email
  emailVerification(errorsMessagesForm);

  // Call function of verification for birth date
  birthDateChecked(errorsMessagesForm);

  // Call function of verification for quantity of tournament participate
  tournamentQuantityChecked(errorsMessagesForm);

  // Call function of verification if city is selected
  cityTournamentChecked(errorsMessagesForm);
  
  // Call function of verification if terms are selected
  termsCondition(errorsMessagesForm);

  // Call function of confirmation form submitted
  submitConfirmation(e, errorsMessagesForm);

}

// Form submit
form.addEventListener("submit", formSubmit);



// Function of verification for First Name, parameters "element" is "e" for event and error is the array of errors
function firstNameVerification(error) {
  // Verify if the longer of first name is > than 2 and not empty
  if (firstName.value.trim().length >= 2) {

    // Change border on green to signal all good, and remove error message
    firstName.classList.remove("error-input");
    firstName.classList.add("correct-input");
    errorFirstName.innerText = "";

    // Stock the value of fist name in sessionStorage
    sessionStorage.setItem("firstName", firstName.value.trim());

  } else {

    // Push a error message in error array, add a red border and an error message
    error.push('Erreur dans le prénom');
    firstName.classList.remove("correct-input");
    firstName.classList.add("error-input");
    errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

  }

}

// Function of verification for Last Name, parameters "element" is "e" for event and error is the array of errors
function lastNameVerification(error) {
  // Verify if the longer of last name is > than 2 and not empty
  if (lastName.value.trim().length >= 2) {

    // Change border on green to signal all good, and remove error message
    lastName.classList.remove("error-input");
    lastName.classList.add("correct-input");
    errorLastName.innerText = "";

    // Stock the value of last name in sessionStorage
    sessionStorage.setItem("lastName", lastName.value.trim());

  } else {

    // Push a error message in error array, add a red border and an error message
    error.push('Erreur dans le nom');
    lastName.classList.remove("correct-input");
    lastName.classList.add("error-input");
    errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

  }
}

// Function of verification for email, parameters "element" is "e" for event and error is the array of errors
function emailVerification(error) {
  // Verify if email match with the regex for an valide email
  if (email.value.match(regexEmail)) {

    // Change border on green to signal all good, and remove error message
    email.classList.remove("error-input");
    email.classList.add("correct-input");
    errorEmail.innerText = "";

    // Stock the value of email in sessionStorage
    sessionStorage.setItem("email", email.value);

  } else {

    // Push a error message in error array, add a red border and an error message
    error.push("Erreur dans l'email");
    email.classList.remove("correct-input");
    email.classList.add("error-input");
    errorEmail.innerText = "Veuillez entrer une adresse email valide.";

  }
}

// Function of verification for bird date, parameters "element" is "e" for event and error is the array of errors
function birthDateChecked(error) {

  // Create an variable with date now and another who calculates the date today - birth date for give age of user
  const dateToday = Date.now();
  const birthDateMinimum = dateToday - Date.parse(birthDate.value);

  // Verify if the birth date value is not empty and if birth date value is superior or equal to bird date minimum
  if (birthDate.value !== "" && birthDateMinimum >= 410240376000) {

    // Change border on green to signal all good, and remove error message
    birthDate.classList.remove("error-input");
    birthDate.classList.add("correct-input");
    errorBirthdate.innerText = "";

    // Stock the value of birth date in sessionStorage
    sessionStorage.setItem("birthDate", birthDate.value);

  } else {

    // Push a error message in error array, add a red border and an error message
    error.push("Erreur de date de naissance");
    birthDate.classList.remove("correct-input");
    birthDate.classList.add("error-input");
    errorBirthdate.innerText = "Veuillez entrer une date de naissance valide.";

  }
}

// Function of verification for quantity paricipate tournament
function tournamentQuantityChecked(error) {
  // Verify if the value is not empty and superior or equal to 0
  if (tournamentQuantity.value >= 0 && parseInt(tournamentQuantity.value) == tournamentQuantity.value) {

    // Change border on green to signal all good, and remove error message
    tournamentQuantity.classList.remove("error-input");
    tournamentQuantity.classList.add("correct-input");
    errorQuantity.innerText = "";

    // Stock the value of quantity in sessionStorage
    sessionStorage.setItem("tournamentQuantity", tournamentQuantity.value);

  } else {

    // Push a error message in error array, add a red border and an error message
    error.push("Erreur nombre participation");
    tournamentQuantity.classList.remove("correct-input");
    tournamentQuantity.classList.add("error-input");
    errorQuantity.innerText = "Veuillez saisir un nombre valide";

  }
}

// Function of verification for city paricipate tournament
function cityTournamentChecked(error) {
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

    }
  }

  // Push a error message in error array, add a red border and an error message
  error.push("Erreur dans la sélection de la ville");
  errorCity.innerText = "Veuillez sélectionner une ville.";

}

// Function of verification for terms of conditions
function termsCondition(error) {
  // Verify if terms are checked
  if (termsOfUse.checked) {

    // Remove error message
    errorTerms.innerText = "";

  } else {

    // Push a error message in error array, add a red border and an error message
    error.push("Erreur acceptation des conditions d'utilisation");
    errorTerms.innerText = "Veuillez accepter les conditions d'utilisation.";

  }
}


// Function of confirmation check errors before submit
function submitConfirmation(element, errorList) {

  // Stop page reload
  element.preventDefault();

  // Verify if the array of errors is equal to 0 (no error)
  if (errorList.length === 0) {

    // Hide the form
    form.style.display = "none";

    // Show message of confirmation after submit
    messageConfirmation.style.display = "block";

    // Show btn who close the modal
    closeBtn.style.display = "block";

    // Clear the sessionStorage
    sessionStorage.clear();

    // Restore default form style
    firstName.classList.remove("correct-input");
    lastName.classList.remove("correct-input");
    email.classList.remove("correct-input");
    birthDate.classList.remove("correct-input");
    tournamentQuantity.classList.remove("correct-input");

  }

}





// launch modal event
btnSignUp.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {

  modalBg.style.display = "block";
  form.style.display = "block";

  // Create a sessionStorage for form field, when sessionStorage exist, set field value to session value
  if (sessionStorage.getItem("firstName") !== null) {
    firstName.value = sessionStorage.getItem("firstName");
  } else {
    firstName.value = "";
  }

  if (sessionStorage.getItem("lastName") !== null) {
    lastName.value = sessionStorage.getItem("lastName");
  } else {
    lastName.value = "";
  }

  if (sessionStorage.getItem("email") !== null) {
    email.value = sessionStorage.getItem("email");
  } else {
    email.value = "";
  }

  if (sessionStorage.getItem("birthDate") !== null) {
    birthDate.value = sessionStorage.getItem("birthDate");
  } else {
    birthDate.value = "";
  }

  if (sessionStorage.getItem("tournamentQuantity") !== null) {
    tournamentQuantity.value = sessionStorage.getItem("tournamentQuantity");
  } else {
    tournamentQuantity.value = "";
  }

  if (sessionStorage.getItem("tournamentCity") !== null) {

    const tournamentCityValue = sessionStorage.getItem('tournamentCity');
    const tournamentCityChecked = document.querySelector(`input[value="${tournamentCityValue}"]`);

    tournamentCityChecked.checked = true;

  } else {
    tournamentCity.forEach(city => city.checked = false);
  }

}

// button for close the modal
closeModalBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

// Closing modal function
function closeModal() {

  modalBg.style.display = "none";
  form.style.display = "none";

  messageConfirmation.style.display = "none";
  closeBtn.style.display = "none";

}



// Function for responsive navigation
function editNav() {

  let topNav = document.getElementById("myTopnav");

  if (topNav.className === "topnav") {

    topNav.className += " responsive";

  } else {

    topNav.className = "topnav";

  }

}

btnMenu.addEventListener("click", editNav);