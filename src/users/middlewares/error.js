const errorHandler = (log = console.log) => (error, req, res, next) =>{
    log(error)

    res.status(500).send({message: error.message})
}

module.exports = errorHandler