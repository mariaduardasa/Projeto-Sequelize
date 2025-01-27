const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './db/app.db'
});

//try {
  //  sequelize.authenticate();
    //console.log('Conectamos com sucesso ao Sequelize');
//} catch (err) {
 //   console.log('Não conectou', err);
//}

module.exports = sequelize;
