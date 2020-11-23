
const path = require('path');

module.exports = {
    dialect: 'sqlite',
    host: 'localhost',
    username: 'root',
    password: 'root',
    storage: path.join(__dirname, '..', 'database', 'database.sqlite'),
    logging: false,
    operatorsAliases: 0,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAT: 'created_at',
        updatedAT: 'updated_at',
    },


};
