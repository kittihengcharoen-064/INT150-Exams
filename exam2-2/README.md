[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/WyCTjmhT)
# Character Counter

## Description

Updates a live character count when the user types. Turns red when over 100 characters.

## Requirement

1. Function Structure

- Create a main function called charCounter() that returns two functions:

  - setup() → adds the event listener to #messageBox.
  - charCounting() → updates the count and text color.

2. There is

```
<textarea id="messageBox"></textarea>
<p>Characters: <span id="charCount">0</span></p>
```

3. As the user types, charCount should update to show the number of characters typed.
4. If the message exceeds 100 characters, the text color of the counter should turn red.

### Write JavaScript that:

- Listens for input events on the textarea.
- Updates the character count.
- Changes text color to red if the count > 100.

[Watch demo video](https://github.com/1-2568-INT151-Exam2/charCounter/blob/main/demo/demo-countchar.mp4)
