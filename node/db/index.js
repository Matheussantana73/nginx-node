const mysql = require('mysql')


require('dotenv').config();

const config = {
  host: 'db',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
}


const connection = mysql.createConnection(config)

const query = (sql) => {
  return new Promise((resolve, reject) =>{
    connection.query(sql, (err, result) => {
      if(err) reject(err)

      resolve(result)
    })
  })
}

const selectAllPeoples = () => {
  const sql = 'SELECT * FROM people'
  return query(sql)
}

const countPeople = async () => {
  const sql = 'SELECT COUNT(*) FROM people'
  const result = await query(sql)
  
  const count = result[0]['COUNT(*)'] || 0

  return count
}

const createPeople = async () => {

  const count = await countPeople()

  const sql = `INSERT INTO people(name) values('People ${count + 1}')`

  return query(sql)
}

const initializeDB = async () =>{
  const sql = 'CREATE TABLE IF NOT EXISTS people(name VARCHAR(20))'
  return query(sql)
}

module.exports = {
  createPeople, countPeople, selectAllPeoples, initializeDB
}