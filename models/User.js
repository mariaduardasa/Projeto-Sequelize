const {Datatypes} = require('sequelize')
const db = require('../db/conn')

const User = db.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: Datatypes.BOOLEAN,
    },
})

module.exports = User