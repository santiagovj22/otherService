const { connectionData, Client} = require('../db');

class categories {
    constructor(){
        this.connectionString = `postgres://${connectionData.user}:${connectionData.password}@${connectionData.host}:${connectionData.port}/${connectionData.database}`
    }

    async connect(query, values) {
        return new Promise((resolve, reject) => {
          try {
            const client = new Client(this.connectionString);
            client.connect();
            client.query(query, values && values.length > 0 && values, function(err, result) {
              client.end();
              if (err) return reject(err);
              resolve(result);
            });
          } catch (err) {

            reject(err);
          }
        });
      }

      async getCategeries(){
          try{

              const query = 'select categoryid from categories c where parentid is null and categoryid != 50689'
              const result = await this.connect(query);
              return result.rows
          } catch(err){
              console.log(err)
          }
      }
      async  parenthCategories(){
          try {
              const query = 'select name, categoryid from categories c2 where parentid in (select categoryid from categories c where parentid is null and categoryid != 50689)'
              const result = await this.connect(query);
              return result.rows
            } catch (err) {
              console.log(err);
          }
      }
} 
module.exports = new categories()