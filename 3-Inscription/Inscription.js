/* Brouillons

const monformulaire = event =>{
    event.preventDefault()
    
    console.log('coucou')
}
document.querySelector('#monformulaire').addEventListener('submit',monformulaire)
    // let user = document.querySelector('#monformulaire').addEventListener('submit',monformulaire)
    // console.log(user)
*/

form.addEventListener("submit", function (e) {
    var nom = form.elements.name.value;
    var prenom = form.elements.pname.value;
    var dBirth = form.elements.date-naiss.value;
    var mail = form.elements.mail.value;
    var login = form.elements.login.value;
    var passwd = form.elements.passwd.value;
    
    console.log("Vous avez saisi le nom " + nom + 
    ", le prénom " + prenom + 
    ", et l'e-mail " + mail + 
    ", né.e le "+ dBirth +
    ", le login " + login +
    ", le mot de passe" + passwd);
    
    e.preventDefault();    
});