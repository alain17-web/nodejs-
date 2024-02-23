//Le classModule permet de créer un objet à partir d'une fonction

module.exports = function(firstname, lastname, birthdate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.presentation = () => {
       console.log(`Voici ${this.firstname} ${this.lastname} né(e) le ${this.birthdate}`);
    } 
}