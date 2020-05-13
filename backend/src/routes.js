const express = require('express');
const UserController = require('./controllers/UserController');
const GroupController = require('./controllers/GroupController')
const WishListController = require('./controllers/WishiListController')

const auth = require('./middlewares/auth');

const { validate} = require('./middlewares/validator');
const {GroupValidationRules} = require('./validations/GroupValidation')
const {UserValidationRules} = require('./validations/UserValidation')
const {WishiListValidationRules} = require('./validations/WishiListValidation')


const routes = express.Router();

routes.post('/users', UserValidationRules(), UserController.store);

routes.get('/login', auth, UserController.login);

routes.post('/group',GroupValidationRules(), validate, GroupController.store);
routes.get('/group', GroupController.index);
routes.put('/group', GroupController.update);
routes.delete('/group', GroupController.destroy);
routes.put('/group/add', GroupController.AddToGroup);


routes.post('/wishlist', WishiListValidationRules(), validate, WishListController.store);

module.exports = routes;