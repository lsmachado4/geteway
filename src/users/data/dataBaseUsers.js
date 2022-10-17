const axios = require('axios')

const dataBaseUsers = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/users"})


module.exports = dataBaseUsers