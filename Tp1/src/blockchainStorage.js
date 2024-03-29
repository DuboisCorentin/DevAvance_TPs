import {readFile, writeFile} from 'node:fs/promises'
import {getDate, monSecret} from "./divers.js";
import {NotFoundError} from "./errors.js";
import {createHash} from 'node:crypto'
import uuidv4, { uuid } from 'uuidv4';


/* Chemin de stockage des blocks */
const path = '../data/blockchain.json'

/**
 * Mes définitions
 * @typedef { id: string, nom: string, don: number, date: string,hash: string} Block
 * @property {string} id
 * @property {string} nom
 * @property {number} don
 * @property {string} date
 * @property {string} string
 *
 */

/**
 * Renvoie un tableau json de tous les blocks
 * @return {Promise<any>}
 */
export async function findBlocks() {
    const content = await readFile(path, {encoding: 'utf8'})
    const resultatJSON = JSON.parse(content)
    return resultatJSON
}

/**
 * Trouve un block à partir de son id
 * @param partialBlock
 * @return {Promise<Block[]>}
 */
export async function findBlock(partialBlock) {
}

/**
 * Trouve le dernier block de la chaine
 * @return {Promise<Block|null>}
 */
export async function findLastBlock() {
    // A coder
}

/**
 * Creation d'un block depuis le contenu json
 * @param contenu
 * @return {Promise<Block[]>}
 */
export async function createBlock(contenu) {
    // A coder
    const id = 1
    const nom = contenu.nom
    const don = contenu.don
    const date = getDate()

    const newBlock = {"id":id, "nom":nom,"don":don,"date":date}

    const lalala = findBlocks()
    //await writeFile(path, newBlock, ...lalala)
    console.log("Dans la fonction createBlock")
    console.log()

    return findBlocks()

}

