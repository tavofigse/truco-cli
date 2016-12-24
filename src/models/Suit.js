/**
 * This class encapsulate the logic for a single
 * suit of the deck.
 *
 * @returns {Object}
 */
class Suit {
  /**
  *
  * @param {String} categorie - The categories for a deck.
  */
  constructor (categorie) {
    this.categorie = categorie
  }

  getCategorie () {
    return this.categorie
  }

}

export default Suit
