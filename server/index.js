const express = require('express')
const cors = require ('cors')
const db = require('./util/database')
const {Jersey, User, CartItem} = require('./util/models')
const seed = require('./util/seed')
const {getAllJerseys} = require('./controllers/jersey')

const server = express()
server.use(express.json())
server.use(cors())

//! Table connections where foreign id's exist
User.hasMany(CartItem); // Puts a user_id in the CartItem table
CartItem.belongsTo(User);

Jersey.hasMany(CartItem); // Puts a Jersey_id in the CartItem table
CartItem.belongsTo(Jersey);

//! endpoints
server.get('/api/allJerseys', getAllJerseys)



db
 .sync()
    // .sync({force: true})
    // .then(() => seed())
server.listen(4020, () => console.log('Server running on 4020'))