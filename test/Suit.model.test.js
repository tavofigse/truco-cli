import assert from 'assert'
import Suit from '../src/models/Suit'

describe('Suit', () => {
  describe('Suit.getCategorie()', () => {
    it('should return the suit of the card correctly', () => {

      let suitGold = new Suit('oro')
      let suitStick = new Suit('basto')
      let suitCup = new Suit('copa')
      let suitSword = new Suit('espada')

      assert.equal('oro', suitGold.getCategorie())
      assert.equal('basto', suitStick.getCategorie())
      assert.equal('copa', suitCup.getCategorie())
      assert.equal('espada', suitSword.getCategorie())
    })
  })
})
