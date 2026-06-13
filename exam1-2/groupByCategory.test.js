const groupByCategory = require('./groupByCategory')

describe('groupByCategory', () => {
  // 1. Basic valid input
  it('groups multiple products by category', () => {
    const input = [
      { name: 'Shirt', category: 'Clothing' },
      { name: 'Pants', category: 'Clothing' },
      { name: 'Apple', category: 'Food' }
    ]
    const expected = {
      Clothing: ['Shirt', 'Pants'],
      Food: ['Apple']
    }
    expect(groupByCategory(input)).toEqual(expected)
  })
  // 2. multiple items
  it('groups multiple products by category', () => {
    const input = [
      { name: 'Hat', category: 'Accessories' },
      { name: 'Jean', category: 'Clothing' },
      { name: 'Wallet', category: 'Accessories' },
      { name: 'Scarf', category: 'Accessories' },
      { name: 'Tee', category: 'Clothing' },
      { name: 'CK', category: 'Perfume' }
    ]
    const expected = {
      Accessories: ['Hat', 'Wallet', 'Scarf'],
      Clothing: ['Jean', 'Tee'],
      Perfume: ['CK']
    }
    expect(groupByCategory(input)).toEqual(expected)
  })
  // 3. Single item
  it('groups one product', () => {
    const input = [{ name: 'Laptop', category: 'Electronics' }]
    expect(groupByCategory(input)).toEqual({ Electronics: ['Laptop'] })
  })

  // 4. Empty array
  it('returns empty object for empty array', () => {
    expect(groupByCategory([])).toEqual({})
  })

  // 5. Null input
  it('returns empty object for null input', () => {
    expect(groupByCategory(null)).toEqual({})
  })

  // 6. Undefined input
  it('returns empty object for undefined input', () => {
    expect(groupByCategory(undefined)).toEqual({})
  })

  // 7. Not an array
  it('returns empty object for non-array input', () => {
    expect(groupByCategory({ name: 'Invalid' })).toEqual({})
    expect(groupByCategory(42)).toEqual({})
    expect(groupByCategory('text')).toEqual({})
  })
})
