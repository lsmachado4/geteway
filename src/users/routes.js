const {Router} = require('express')
const dataBaseUsers = require('./data/dataBaseUsers')
const asyncErrorHandler = require('./users/middlewares/asyncErrorHandler') 

const router = Router()

const getListUsers = async (req, res) => {
    await dataBaseUsers.get()
    res.status(200).send({users})
    

}
router.get('/', asyncErrorHandler(getListUsers))


