# Client App Exercise


Create front-end solution for `localhost:3001/users/food(s)`. The UI shouldnt be hurt to look at and the UX shouldnt be horrible nor complicated.

Feel free to use anything (react, jquery, bootstrap, etc.)

**Minimum requirement:**
  1. As a user, I can see a list of user with its metadata (first_name, last_name, hero_name, favorite_food)
  2. As a user, I can add a new user 

**Bonus:**
  1. As a user, I am able to sort the list items by first + last name
  2. As a user, I can edit/update any of the metadata for any item in the list
  3. Add in some eyecandy for the UI components (ex: https://github.com/daneden/animate.css?files=1) but dont over-kill it!
  4. As a developer, I need to concat the favorite_food by users and display it on the card. 
  ```
    {
      first_name: 'peter',
      last_name: 'parker',
      favorite_foods: [
        {id: 5, food: "pineapple"},
        {id: 16, food: "candy"),
        {id: 17, food: "diet coke"}
      ]
    }

  ```