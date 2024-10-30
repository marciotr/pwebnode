var sql = require ('mssql');

var connSQLServer = function(){
    const sqlConfig = {
        user: 'BD2412031',
        password: 'KTmtrs2004',
        database: 'BD', //Na FATEC, utilizar o database BD ou LP8
        server: 'apolo',//Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER. Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
        options:{
            encrypt: false,
            trustServerCertificades: true
        }
    }  
    return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autor carregou o modulo de conexão');
    return connSQLServer;
}