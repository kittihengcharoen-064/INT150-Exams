/**
 * @jest-environment jsdom
 */

const { init } = require('./script.js')

// Mock fetch
global.fetch = jest.fn()

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0))

describe('getUser', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="loadUser">Load User</button>
      <div id="showUser"></div>
    `
    fetch.mockReset()
  })

  it('should fetch post, then user, and display user name', async () => {
    const mockPost = { userId: 1 }
    const mockUser = { name: 'Leanne Graham' }

    fetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockPost) }) // 1st fetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockUser) }) // 2nd fetch

    init()
    document.getElementById('loadUser').click()
    await flushPromises()

    expect(fetch).toHaveBeenNthCalledWith(
      1,
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      'https://jsonplaceholder.typicode.com/users/1'
    )

    /** Check output */
    const showUser = document.getElementById('showUser')
    expect(showUser.textContent).toBe('Leanne Graham')
  })

  it('should handle fetch error and log to console', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    fetch.mockRejectedValue(new Error('Network error'))

    init()
    document.getElementById('loadUser').click()
    await flushPromises()

    expect(consoleSpy).toHaveBeenCalledWith('Error:', expect.any(Error))
    consoleSpy.mockRestore()
  })
})

// /**
//  * @jest-environment jsdom
//  */

// const { init } = require('./script.js')

// // Mock the global fetch API
// global.fetch = jest.fn()

// // Flush helper
// const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0))

// describe('getUser', () => {
//   beforeEach(() => {
//     document.body.innerHTML = `
//       <button id="loadUser">Load User</button>
//       <div id="showUser"></div>
//     `
//     fetch.mockReset()
//   })

//   it('should fetch post, then user, and display user name', async () => {
//     const mockPost = { userId: 1 }
//     const mockUser = { name: 'Leanne Graham' }

//     fetch
//       .mockResolvedValueOnce({ json: () => Promise.resolve(mockPost) })
//       .mockResolvedValueOnce({ json: () => Promise.resolve(mockUser) })

//     init()
//     document.getElementById('loadUser').click()
//     await flushPromises() // Let all .then chains resolve
//     const showUser = document.getElementById('showUser')
//     expect(showUser.textContent).toBe('Leanne Graham')
//   })

//   it('should handle fetch error and log to console', async () => {
//     const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
//     fetch.mockRejectedValue(new Error('Network error'))
//     init()
//     document.getElementById('loadUser').click()
//     await flushPromises()
//     expect(consoleSpy).toHaveBeenCalledWith('Error:', expect.any(Error))
//     consoleSpy.mockRestore()
//   })
// })
