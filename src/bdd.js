const mysql = require('mysql');

const bdd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '04709#_Pedro',
    database: 'Atv_Comentario'
})

bdd.connect((err) => {
    if(err) throw err;
    console.log('Conexão realizada com sucesso!');
})

module.exports = bdd;