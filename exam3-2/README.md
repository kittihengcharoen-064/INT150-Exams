[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/uy4cz1vJ)
# Lab 2: Promise Chain

## Objective

Create a function that chains two `fetch()` calls using Promises.

## Requirement

1. First fetch `https://jsonplaceholder.typicode.com/posts/1`, this request returns a JSON object:
   ```
   {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   }
   ```
2. From the returned object, extract the `userId` value
3. Use the extracted userId to fetch user details from: `https://jsonplaceholder.typicode.com/users/`.
   Example user object:

   ```
   {
     "id": 1,
     "name": "Leanne Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
     "name": "Romaguera-Crona",
     "catchPhrase": "Multi-layered client-server neural-net",
     "bs": "harness real-time e-markets"
     }
   }
   ```

4. Display the user name, insert the user's name into: <div id="showUser"></div>

## Example Output

```
<div id="showUser">Leanne Graham</div>
```

5. If any part of the fetch chain fails (e.g., network error, server error), the function will log the error to the browser console like this:

```
  console.error('Error:', error)
```

[Demo Output](./demo/demo.mp4)
