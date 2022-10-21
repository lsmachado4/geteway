const axios = require('axios')
const getUsers = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data)
    } catch (err) {
     console.log(err);
    }
};


module.exports = getUsers()