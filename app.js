// ? Utilisation du module simple
// ! 1) Importer le module
// On peut lui donner le nom qu'on veut
// const ecrire = require("./Modules/SimpleModule/log");
const log = require("./Modules/SimpleModule/log");

// Si notre module.exports exportait plusieurs choses
// ex -> module.exports = { log, pouet }
// alors, lors de l'import on doit le noter comme suit et respecter les noms
// const {log, pouet} = require("./Modules/SimpleModule/log");

log.info('C\'est bientôt l\'heure de manger');
log.error('Je n\'ai pas prévu de repas', 'Frigo Vide');
log.warning('Le Burger King est fermé aujourd\'hui');

// Utilisation d'un function module
const print = require('./Modules/FunctionModules/print');
print("Pouet pouet");

// Utilisation d'un class module
const Person = require('./Modules/ClassModules/person');

const person1 = new Person('Aude', 'Beurive', new Date(1989, 9, 16));
person1.presentation();

const person2 = new Person('Aurélien', 'Strimelle', new Date(1989, 10, 1));
person2.presentation();

// Avec les class
const Chien = require('./Modules/ClassModules/chien');

const chien1 = new Chien('Rantanplan', 'Croisé');
chien1.direBonjour();



