# Test Exercise

### Exercise 1
Implement test for `localhost:3001/users/food(s)`. See ./src/routes/users.js for details.

**Minimum requirement:** create test cases for `GET`, `POST`

**Bonus:** 
  1. finish `DELETE` (see ./src/routes/users lines[10,12]) and implement `DELETE` test

### Exercise 2 
For `GET localhost:3001/users/food`, sort the response.

**Minimum requirement:** sort it by id

**Bonus:** 
  1. implement sort by `first_name` (hint: create optional query `req.query: localhost:3001/users/food?sort=first_name`)
  2. implement sort by `last_name` (hint: create optional query `req.query: localhost:3001/users/food?sort=last_name`)
  3. concat duplicated users order by `favorite_food` to reduce the payload
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


### Exercise 3
Implement test for exercise 2

**Minimum requirement:** cover exercise 2's minimum requirement

**Bonus:** 
  1. create integration test for the following requests `GET -> POST -> GET -> DELETE -> DELETE`

