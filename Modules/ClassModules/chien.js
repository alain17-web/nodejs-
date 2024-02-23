class Chien {
    nom;
    race;
    birthdate;

    constructor(nom, race, birthdate = new Date()) {
        this.nom = nom;
        this.race = race;
        this.birthdate = birthdate;
        console.log(`${this.nom} le ${this.race} vient d'être créé`);
    }

    direBonjour() {
        console.log("Wouf wouf")
    }
}

module.exports = Chien;