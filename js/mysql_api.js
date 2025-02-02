import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const port = 3000
const app = express()

app.use(cors())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'group5',
  password: 'MyriadsRumorsMuffing',
  database: 'leaderboard'
})

connection.connect()

// Define an endpoint to run the MySQL query
app.get('/api/highscores', (req, res) => {
  const query = "SELECT userID, score FROM scores WHERE game = 'snake' ORDER BY score DESC LIMIT 5"

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error)
      res.status(500).json({ error: 'Internal Server Error' })
      return
    }

    res.json(results)
    console.log(res.json(results))
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
