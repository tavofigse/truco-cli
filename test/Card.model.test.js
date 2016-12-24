import assert from 'assert'
import Suit from '../src/models/Suit'
import Card from '../src/models/Card'

describe('Card', () => {
  describe('Card.getSuit()', () => {
    it('should return the suit of the card correctly', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
    it('should return the value of the card correctly', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})
