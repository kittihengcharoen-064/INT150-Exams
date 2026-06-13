[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/v-O-EbWy)
# Lab 1: Fetch Users

## Objective

Use `fetch()` to get a list of users from a public API and display them in the DOM.

## Requirement

- Fetch data from `https://jsonplaceholder.typicode.com/users`
- Dynamically display each user's name in an unordered list on the webpage.
- If an error occurs during the fetch process (e.g., network failure, server error, invalid JSON), the script will not update the DOM. Instead, it logs the error to the browser console using:
  console.error('Fetch error:', error)

## Example

Result on the page:

```
  <ul id="userList">
    <li>Leanne Graham</li>
    <li>Ervin Howell</li>
    <li>Clementine Bauch</li>
    ...
  </ul>
```

On load, the page should show:

```
  - Leanne Graham
  - Ervin Howell
  - Clementine Bauch
    ...etc.
```

![Output:](./output/output-fetch-users.png)
