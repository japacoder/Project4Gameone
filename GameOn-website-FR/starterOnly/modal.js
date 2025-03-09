// permet de rendre la navigation responsive c'est-à-dire adapte l'affichage du menu aux appareils mobiles
function editNav() {
  var x = document.getElementById("myTopnav"); // Récupère l'élément avec l'id myTopnav et le stocke dans la variable x
  if (x.className === "topnav") { // Vérifie si la classe de l'élément avec l'id myTopnav est égale à topnav
    x.className += " responsive"; // Ajoute la classe responsive à l'élément avec l'id myTopnav
  } else {
    x.className = "topnav"; // Sinon, affecte la classe topnav à l'élément avec l'id myTopnav
  }
}

// DOM Elements : sélectionne et stocke dans des constantes les éléments du DOM nécessaires à la gestion d'une fenêtre modale :
//  arrière-plan (.bground), boutons d'ouverture (.modal-btn), champs du formulaire (.formData) bouton de fermeture (.close).
const modalbg = document.querySelector(".bground"); // arrière-plan
const modalBtn = document.querySelectorAll(".modal-btn"); // boutons d'ouverture
const formData = document.querySelectorAll(".formData"); // champs du formulaire
const modalClose = document.querySelector(".close");   // fermeture de la croix

// écoute les clics sur les boutons modaux
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lance le formulaire modal launch modal 
function launchModal() {
  launchModal 
  modalbg.style.display = "block"; 
}
//  Ferme le formulaire modal lorsqu'on clique sur la croix
function closeModal() {
  modalbg.style.display = "none"; 

}
// écoute les clics sur la croix pour fermer le formulaire modal
modalClose.addEventListener('click', closeModal)  // écoute les clics sur la croix pour fermer le formulaire modal

// récupère les valeurs saisies par l'utilisateur pour les stocker dans des variables pour la validation du formulaire  
function validateForm() {
  const name = document.getElementById("last").value;
  const birthdate = document.getElementById("birthdate").value;
  const prenom = document.getElementById("first").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("quantity").value; // code pour récupèrer la valeur du champ de saisie avec l'id quantity et la stocker dans la variable number écrit mercredi 29 janvier 2025 
  const villes = document.querySelector("input[name=location]:checked");

// Variable pour stocker les messages d'erreur
  let errorMessage = "";    
  let displayError = false;
  let errorName = document.getElementById("errorLast");
  errorName.innerHTML='';
  // Vérifie si le champ nom est vide ou si le nom saisi est trop court et si c'est le cas, il affiche un message d'erreur en rouge
  let pErrorNom = document.createElement('p')
  if (name === "" || name.length < 2) { 
   pErrorNom.style.color = "red";
    errorMessage = "Le nom est obligatoire ou il doit être supérieur à 2 caractères.\n";
    errorName.innerHTML='';
    pErrorNom.textContent = errorMessage;
    errorName.appendChild(pErrorNom);
    displayError = true;
  }else{
    errorName.innerHTML = "";
  }
  
  // Vérifie si le champ date de naissance est vide et affiche un message d'erreur en rouge si c'est le cas, sinon il supprime le message d'erreur existant
  if (birthdate == "") { 
  let pErrorBirth = document.createElement('p') // Crée un élément p pour afficher le message d'erreur
  let errorBirth = document.getElementById("errorBirthdate");  // Récupère l'élément avec l'id errorBirthdate et le stocke dans la variable errorBirth
    pErrorBirth.style.color = "red";
    errorBirth.innerHTML='';
    errorMessage = "La date de naissance est obligatoire.\n";
    pErrorBirth.textContent = errorMessage;
    errorBirth.appendChild(pErrorBirth);
    displayError = true;
  }else{
    errorBirth.innerHTML = "";
  }

  // Vérifie si le champ prénom est vide ou si le prénom saisi est trop court et si c'est le cas, il affiche un message d'erreur en rouge
  let pErrorPrenom = document.createElement('p')
  let errorPrename = document.getElementById("errorFirst");
  if (prenom === "" || prenom.length < 2) { 
    pErrorPrenom.style.color = "red";
    errorMessage = "Le prenom est obligatoire.\n";
    errorPrename.innerHTML='';
    pErrorPrenom.textContent = errorMessage;
    errorPrename.appendChild(pErrorPrenom);
    displayError = true;
  }else{
    errorPrename.innerHTML = "";
  }

  // Vérifie si le champ email est vide ou si l'email saisi est invalide et si c'est le cas, il affiche un message d'erreur en rouge
  let pErrorEmail = document.createElement('p')
  let errorMail= document.getElementById("errorEmail");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //  emailRegex : code pour vérifier si l'adresse email est valide par exp s'il manque @ l'emil ne pourra pas être validée. jeudi 20 février 2025
  if (!emailRegex.test(email)) { 
    pErrorEmail.style.color = "red";
    errorMessage = "L'e-mail est obligatoire.\n";
    errorMail.innerHTML='';
    pErrorEmail.textContent = errorMessage;    
    errorMail.appendChild(pErrorEmail);   
    displayError = true;  // Affiche le message d'erreur en rouge si l'email est invalide ou vide  
  }else{
    errorMail.innerHTML = "";  // Efface le message d'erreur si l'email est valide et non vide  
  }
  
// Vérifie si le champ de saisie pour le nombre de tournois est vide et affiche un message d'erreur en rouge si c'est le cas, sinon il supprime le message d'erreur existant
let pErrorNumber = document.createElement('p')
let errorNumber = document.getElementById("errorNumber");
  if (number === "") {
   pErrorNumber.style.color = "red";
    errorMessage = "Le nombre de tournois est obligatoire.\n";
    errorNumber.innerHTML='';
    pErrorNumber.textContent = errorMessage;
    errorNumber.appendChild(pErrorNumber);
    displayError = true; // Affiche le message d'erreur en rouge si le nombre de tournois est vide   
  }else{
    errorNumber.innerHTML =""  // Efface le message d'erreur si le nombre de tournois est saisi    
  }

  // Vérifie si l'utilisateur a sélectionné un tournoi si aucun tournoi n'est sélectionné, il affiche un message d'erreur en rouge, sinon il supprime le message d'erreur existant
  var selectedLocation = document.querySelector('input[name="location"]:checked');
  var errorDiv = document.getElementById('errorLocation');
  console.log(selectedLocation) // Affiche l'élément sélectionné dans la console pour le débogage  

  if (!selectedLocation) {
    errorDiv.textContent = "Veuillez sélectionner un tournoi.";
    errorDiv.style.color = "red"; // Affiche le message d'erreur en rouge
    displayError = true;  // Affiche le message d'erreur
  } else {
    errorDiv.textContent = "";  // Efface le message d'erreur
  }

  // Vérifie si l'utilisateur a accepté les conditions d'utilisation. si les conditions ne sont pas acceptées, il affiche un message d'erreur en rouge,
  //  sinon il supprime le message d'erreur existant
  const conditionG = document.getElementById("checkbox1");
  const errorConditionG = document.getElementById("errorCondition");
  errorConditionG.innerHTML = "";
  if(!conditionG.checked){
  let pErrorConditionG = document.createElement('p')
    pErrorConditionG.textContent = "Veuillez valider les conditions d'utilisation";
    pErrorConditionG.style.color = 'red'  // Affiche le message d'erreur en rouge
    errorConditionG.appendChild(pErrorConditionG) //  Affiche le message d'erreur
    displayError = true; 
  }
// Si aucune erreur n'est détectée, un message de confirmation est affiché
  if(!displayError){
    const bodyModal = document.querySelector(".modal-body");  // Récupère le contenu de la fenêtre modale
    bodyModal.innerHTML = '';  // Efface le contenu de la fenêtre modale
    const message = document.createElement('p');   // Crée un élément p pour afficher le message de confirmation
    message.textContent = "Merci de votre inscription"  // Affiche le message de confirmation
    bodyModal.appendChild(message);  // Ajoute le message de confirmation à la fenêtre modale
  }
}
//  Ecoute les soumissions du formulaire et appelle la fonction validateForm 
// pour valider les données saisies par l'utilisateur
document.addEventListener("DOMContentLoaded", function () {  
  const form = document.getElementById("myForm"); // Récupère le formulaire
  form.addEventListener("submit",(e) => { 
  e.preventDefault(); // Empêche l'envoi du formulaire
  validateForm() // Appelle la fonction validateForm pour valider les données saisies par l'utilisateur

});  

});  
