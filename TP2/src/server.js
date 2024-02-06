import {getData} from "./api.js";
const url = "https://gateway.marvel.com/v1/public/characters?ts=1706630869986&apikey=123c3070fc8d871508e17821c417bb54&hash=ca135b4474aa3856942016d1fbf4e956"
console.log("Je suis marvel")

let test = getData(url);
await console.log(test)