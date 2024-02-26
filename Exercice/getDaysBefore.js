
const today = new Date();
// const today = new Date(2024, 11, 27);
const msInOneDay = 24 * 60 * 60 * 1000;

/**
 * Fonction qui calcule le nombre de jours écoulés entre aujourd'hui et la date reçue en paramètre
 * @param {Date} date
 * @returns number
 */
const getDiff = (date) => {
    const diff = today - date; // renvoie la diff en ms entre les deux dates
    return  Math.ceil(Math.abs(diff) / msInOneDay);
}

/** Fonction qui calcule la prochaine date valide si la date du jour l'a déjà dépassée
 * @param {Date} date
 * @returns Date
 */
const nextDate = (date) => {
    if(today > date) {
        date.setFullYear( date.getFullYear() + 1 ); //On ajoute +1 à l'année
    }
    return date;
}


const getDaysBefore = {
    christmas : () => {    
        const nextChristmas = nextDate(new Date(today.getFullYear(), 11, 25)); 
        console.log(`Il reste encore ${getDiff(nextChristmas)} jours avant Noël `);
    },

    birthday : () => {
        const nexBirthday = nextDate(new Date(today.getFullYear(), 9, 16));
        console.log(`Il reste encore ${getDiff(nexBirthday)} jours avant mon anniversaire `);
    },

    solstice : () => {
        const nextSummerSolstice = nextDate(new Date(today.getFullYear(), 5, 21));
        const nextWinterSolstice = nextDate(new Date(today.getFullYear(), 11, 21));

        if(nextSummerSolstice < nextWinterSolstice) {
            console.log(`Il reste encore ${getDiff(nextSummerSolstice)} jours avant le solstice d'été `);
        }
        else {
            console.log(`Il reste encore ${getDiff(nextWinterSolstice)} jours avant le solstice d'hiver `);
        }
    },

    friday13 : () => {
        const nextFriday13 = new Date(today.getFullYear(), today.getMonth(), 13);
        if(nextFriday13 < today) {
            nextFriday13.setMonth( nextFriday13.getMonth() + 1 );
        }
        //Tant que le jour du 13 de chaque mois n'est pas un vendredi
        while(nextFriday13.getDay() != 5 ){
            nextFriday13.setMonth( nextFriday13.getMonth() + 1 );
        }

        console.log(`Il reste encore ${getDiff(nextFriday13)} jours avant le prochain vendredi 13 `);
    }
}

module.exports = getDaysBefore;