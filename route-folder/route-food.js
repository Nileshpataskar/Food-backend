const { addComment, fetchComments } = require('../controller/comments')

const route_food=require('express').Router()

route_food.post('/addcomment',addComment)

route_food.get('/fetchcomments',fetchComments)

module.exports ={route_food}