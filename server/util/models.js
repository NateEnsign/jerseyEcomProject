// Model for all tables (this creates the tables in the database)

// Import DataTypes from sequelize
const {DataTypes} = require('sequelize')
// Import my database (my file that connects to the database)
const db = require('./database')

//define each table with an object that contains table columns and data types
const Jersey = db.define('jersey', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING({length: 1000}),
    photo: DataTypes.STRING({length: 800})
})

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hashedPass: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

const CartItem = db.define('cartitem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = {Jersey, User, CartItem}