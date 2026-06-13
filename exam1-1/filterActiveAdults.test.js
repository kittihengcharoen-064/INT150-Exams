const filterActiveAdults = require('./filterActiveAdults')

describe('filterActiveAdults()', () => {
  test('returns empty array for null, undefined, or non-array', () => {
    expect(filterActiveAdults(null)).toEqual([])
    expect(filterActiveAdults(undefined)).toEqual([])
    expect(filterActiveAdults(123)).toEqual([])
    expect(filterActiveAdults({})).toEqual([])
  })

  test('returns empty array for empty array input', () => {
    expect(filterActiveAdults([])).toEqual([])
  })

  test('filters out inactive users and underage users', () => {
    const input = [
      { name: 'A', age: 25, active: true },
      { name: 'B', age: 17, active: true },
      { name: 'C', age: 20, active: false },
      { name: 'D', age: 18, active: true }
    ]
    const expected = [
      { name: 'A', age: 25, active: true },
      { name: 'D', age: 18, active: true }
    ]
    expect(filterActiveAdults(input)).toEqual(expected)
  })

  test('ignores items with missing or malformed fields', () => {
    const input = [
      { name: 'X', age: '22', active: true }, // age not number
      { name: 'Y', active: true }, // missing age
      { name: 'Z', age: 22 }, // missing active
      { name: 'Valid', age: 22, active: true }
    ]
    expect(filterActiveAdults(input)).toEqual([
      { name: 'Valid', age: 22, active: true }
    ])
  })

  test('returns only active users 18+', () => {
    const input = [
      { name: 'John', age: 21, active: true },
      { name: 'Jane', age: 18, active: true },
      { name: 'Doe', age: 17, active: true },
      { name: 'Alex', age: 25, active: false }
    ]
    const expected = [
      { name: 'John', age: 21, active: true },
      { name: 'Jane', age: 18, active: true }
    ]
    expect(filterActiveAdults(input)).toEqual(expected)
  })

  test('handles mix of valid and invalid users', () => {
    const input = [
      null,
      undefined,
      { name: 'A', age: 20, active: true },
      42,
      'user',
      { name: 'B', age: 17, active: true }
    ]
    expect(filterActiveAdults(input)).toEqual([
      { name: 'A', age: 20, active: true }
    ])
  })
  test('handles mix of valid and invalid users', () => {
    const input = [
      { name: 'A', age: '25', active: true },
      { name: 'B', age: 17 }
    ]
    expect(filterActiveAdults(input)).toEqual([])
  })
})
