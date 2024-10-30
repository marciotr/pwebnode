//var dbConnection = require('../config/dbConnection');
 
module.exports = function(app){
  app.get('/info/professores', function(req,res){
       async function getProfessores() {
           try {
               
                var connection = app.config.dbConnection;

                const pool = await connection();

               const results = await pool.request().query('SELECT * from PROFESSORES');
 
               res.render('informacao/professores',{profs :  results.recordset});
 
           } catch (err) {
               console.log(err)
           }
       }
 
  getProfessores();
   });
};