import Mock from 'mockjs'

var games = require('./Games.json')
Mock.mock('http://localhost:8080/games', games)

var Users = require('./Users.json')
Mock.mock('http://localhost:8080/#/LoginPage', Users)

var newUsers = require('./Users.json')
Mock.mock('http://localhost:8080/#/RegisterPage', newUsers)
