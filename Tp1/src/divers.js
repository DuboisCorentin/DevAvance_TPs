/**
 * @description Definie la variable pour le hash du premier bloc
 * @type {string}
 */
export const monSecret = "";

/**
 * @description Retourne un timestamp au format aaaammjj-hh:mm:ss
 * @return {string}
 */
export function getDate() {
    console.log("ici date")
    var date = new Date(Date.now())
    var year = date.getFullYear().toString()
    var month = (date.getMonth()+1).toString().padStart(2, '0')
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');

    var dateFinale = year + month + day + '-' + hours + ':' + minutes + ':' + seconds
    return dateFinale
}