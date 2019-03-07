const express = require('express');
const usersOriginal = require('../data/users');
const { check, validationResult } = require('express-validator/check');

module.exports = app => {
  let usersCopy = [ ...usersOriginal ];
  let userCount = usersCopy.length;

  const router = express.Router();
  router.delete('/food', (req, res) => {
    console.log(req.query);
    try {
      let deletedFoods = []
      usersCopy.forEach((item, i) => {
        if (item.first_name === req.query.first_name && item.last_name === req.query.last_name) {
          item.favorite_food = null
          deletedFoods.push(item)
        }
      })
      res.send({
        success: true,
        items: deletedFoods
      })
    } catch (err) {
      res.status(422).send(err.toString())
    }
  });
  router.get('/foods', (req, res) => {
    res.send(usersCopy);
  });
  router.post('/food', [
    check('hero_name').exists(),
    check('first_name').exists(),
    check('last_name').exists()
  ],(req, res) => {
    try {
      validationResult(req).throw();
      userCount += 1;
      usersCopy.push({
        id: userCount,
        ...req.body
      })
      res.json({
        success: userCount
      })
    } catch (err) {
      res.status(422).send(err.toString());
    }
  });

  app.use('/users', router);
}