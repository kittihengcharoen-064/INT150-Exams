/** @jest-environment jsdom */
const displyPassword = require('./script.js')
const fs = require('fs')
const initialHtml = fs.readFileSync('./index.html')

beforeEach(() => {
  window.document.body.innerHTML = initialHtml
})
const { setup } = displyPassword()

test('shows password when checkbox checked', () => {
  setup()
  const input = document.getElementById('password')
  const toggle = document.getElementById('togglePassword')
  toggle.checked = true
  toggle.dispatchEvent(new Event('change'))
  expect(input.type).toBe('text')
})

test('hides password when checkbox unchecked', () => {
  setup()
  const input = document.getElementById('password')
  const toggle = document.getElementById('togglePassword')
  toggle.checked = false
  toggle.dispatchEvent(new Event('change'))
  expect(input.type).toBe('password')
})
