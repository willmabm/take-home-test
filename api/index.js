const { default: axios } = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

app.use(cors())

app.get('/commits', async (req, res) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ${toke}'
    }
  }
  await axios.get('https://api.github.com/repos/willmabm/take-home-test/commits', config)
    .then(response => {
      res.json(response.data)
    })
    .catch((error) => {
      console.log(`request error ]: ${error}`)
      throw error
    })
})

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = { app, server }
