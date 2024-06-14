const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users', 
            key: 'id'       
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true 
    }
}, {
    
    tableName: 'questions',
    timestamps: true 
});


module.exports = Question;
