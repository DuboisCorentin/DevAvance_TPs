//var CryptoJS = require("crypto-js");
const PRIVATE_KEY = "b750dc80c32d90c46bbbfcde3cab222685f4bbad"
const PUBLIC_KEY = "123c3070fc8d871508e17821c417bb54"
const listePersonnages = []
/**
 * Récupère les données de l'endpoint en utilisant les identifiants
 * particuliers developer.marvels.com
 * @param url l'end-point
 * @return {Promise<json>}
 */
export const getData = async (url) => {
    // A Compléter
    const response = await fetch(url);
    const jsonResponse = await response.json()
    var newPersonnage
    for (let i = 0; i < jsonResponse.data.results.length; i++) {
        if (jsonResponse.data.results[i].thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
            var thumbnailUrl = jsonResponse.data.results[i].thumbnail.path + "." +jsonResponse.data.results[i].thumbnail.extension
            newPersonnage = {"nom":jsonResponse.data.results[i].name, "imageURL":thumbnailUrl}
            listePersonnages.push(newPersonnage)
        }
    }
    console.log(listePersonnages)
    return (listePersonnages)

}

/**
 * Calcul la valeur md5 dans l'ordre : timestamp+privateKey+publicKey
 * cf documentation developer.marvels.com
 * @param publicKey
 * @param privateKey
 * @param timestamp
 * @return {Promise<ArrayBuffer>} en hexadecimal
 */
export const getHash = async (publicKey, privateKey, timestamp) => {
    //return CryptoJS.MD5(timestamp+privateKey+publicKey).toString();
    //createHash("test");
}