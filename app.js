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



