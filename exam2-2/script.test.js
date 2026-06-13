/** @jest-environment jsdom */
const { text } = require('stream/consumers')
const charCounter = require('./script.js')
const fs = require('fs')
const initialHtml = fs.readFileSync('./index.html')

beforeEach(() => {
  window.document.body.innerHTML = initialHtml
})
const { setup } = charCounter()

test('updates character count', () => {
  setup()
  const textarea = document.getElementById('messageBox')
  const count = document.getElementById('charCount')
  for (let i = 1; i <= 10; i++) {
    textarea.value = textarea.value + 'abcdefghij'
    textarea.dispatchEvent(new Event('input'))
    expect(count.textContent).toBe(10 * i + '')
    expect(count.style.color).toBe('black')
  }
})

test('turns red when over 100 characters', () => {
  setup()
  const textarea = document.getElementById('messageBox')
  const count = document.getElementById('charCount')
  textarea.value = 'a'.repeat(100)
  for (let i = 0; i < 26; i++) {
    textarea.value = textarea.value + String.fromCharCode(65 + i)
    textarea.dispatchEvent(new Event('input'))
    expect(count.textContent).toBe(101 + i + '')
    expect(count.style.color).toBe('red')
  }
  // textarea.value = 'a'.repeat(101)
  // textarea.dispatchEvent(new Event('input'))
  // expect(count.style.color).toBe('red')
})
