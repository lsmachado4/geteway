const express = require('express')
const dataBaseUsers = require('./users/data/dataBaseUsers')

const server = express() 

server.use(express.json())


//https://jsonplaceholder.typicode.com/users


server.listen(3000, '0.0.0.0', () => {
    console.log('Server started')
    
})
.once('error', (error) => {
console.error(error) 
ProcessingInstruction.exit(1)
})