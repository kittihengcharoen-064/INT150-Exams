/**
 * @jest-environment jsdom
 */

const fetchUsers = require('./script.js')

// Setup: mock global fetch
global.fetch = jest.fn()

describe('fetchUsers', () => {
  beforeEach(() => {
    // Clear mocks and set up DOM
    document.body.innerHTML = `<ul id="userList"></ul>`
    fetch.mockClear()
  })

  it('should fetch users and add them to the DOM', async () => {
    const mockUsers = [
      { name: 'Leanne Graham' },
      { name: 'Ervin Howell' },
      { name: 'Clementine Bauch' },
      { name: 'Patricia Lebsack' },
      { name: 'Chelsey Dietrich' },
      { name: 'Mrs. Dennis Schulist' },
      { name: 'Kurtis Weissnat' },
      { name: 'Nicholas Runolfsdottir V' },
      { name: 'Glenna Reichert' },
      { name: 'Clementina DuBuque' }
    ]

    // // Mock fetch and its chained response
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockUsers)
    })
    // Call function
    await fetchUsers()
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    )

    const listItems = document.querySelectorAll('#userList li')
    expect(listItems.length).toBe(10)
    expect(listItems[0].textContent).toBe('Leanne Graham')
    expect(listItems[1].textContent).toBe('Ervin Howell')
    expect(listItems[2].textContent).toBe('Clementine Bauch')
    expect(listItems[3].textContent).toBe('Patricia Lebsack')
    expect(listItems[4].textContent).toBe('Chelsey Dietrich')
    expect(listItems[5].textContent).toBe('Mrs. Dennis Schulist')
    expect(listItems[6].textContent).toBe('Kurtis Weissnat')
    expect(listItems[7].textContent).toBe('Nicholas Runolfsdottir V')
    expect(listItems[8].textContent).toBe('Glenna Reichert')
    expect(listItems[9].textContent).toBe('Clementina DuBuque')
  })
  it('should log an error if fetch fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    fetch.mockRejectedValue(new Error('Network failure'))
    await fetchUsers()
    expect(consoleSpy).toHaveBeenCalledWith('Fetch error:', expect.any(Error))
    consoleSpy.mockRestore()
  })
})
