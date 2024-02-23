// Le module simple est en fait un objet, qui contiendra des propriétés et/ou des méthodes

const today = new Date();

// JS doc :
/**
 * Formate une date
 * @param {Date} date
 * @returns {string}
 */
const format = (date) => {
    return date.toLocaleDateString('fr-BE', { day : '2-digit', month : 'long', year : 'numeric', hour : '2-digit', minute : '2-digit' });
}

const log = {
    info : (message) => {
        console.log(`[Information] [${format(today)}] : ${message}`);
    },
    error : (message, code) => {
        console.log(`[Erreur - ${code}] [${format(today)}] : ${message}`)
    },
    warning : (message) => {
        console.log(`[Attention !] [${format(today)}] : ${message}`)
    }
}

module.exports = log; 
//Permet de rendre exportable notre module log dans l'application

//module.exports = {}