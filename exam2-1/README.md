[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/LP_mhLPx)
# Toggle Password Visibility

## Description

Toggles the visibility of password field using a checkbox. When checking the box shows password in plain text. Each checkbox has a 'checked' property that tells whether it's checked. The event type to use on the checkbox is 'change'.

## Requirement

1. Function Structure
   Create a main function called displayPassword() that returns two functions:

   - setup() → adds the event listener to #togglePassword.
   - changeDisplayMode() -> change the password input type.

2. Page includes:

```
<input type="password" id="password">
<label><input type="checkbox" id="togglePassword"> Show Password</label>
```

3. When the checkbox is checked:
   Change password input to type="text"

4. When unchecked:
   Revert to type="password"

[Watch demo video](https://github.com/1-2568-INT151-Exam2/togglePassword/blob/main/demo/demo-togglepsw.mp4)
