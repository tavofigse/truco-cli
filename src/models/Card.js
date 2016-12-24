/**
 * This class encapsulate the logic for a single
 * card of the deck.
 *
 */
class Card {
  /**
  *
  * @param {Number} value - The number of a card.
  * @param {Object} suit - one of the four suits for a card
  */
  constructor (suit, value) {
    this.suit = suit
    this.value = value
  }

  getSuit () {
    return this.suit
  }

  getValue () {
    return this.value
  }

}

export default Card
