const mongoose = require('mongoose')
const Users = require('../module/userSchema')
//middi imports
const httpErrorHandler = require('@middy/http-error-handler')
const httpJsonBodyParser = require('@middy/http-json-body-parser')
const { default: middy } = require('@middy/core')

//mongoose connsection function
const connectDb = async () => {
  await mongoose.connect('mongodb://mongodb:/localhost:27017',)
 };

 connectDb()


//authentication function
const authenticationMidleWare = async (request) => {
  console.log(request)
    const authentication = true
    if(!authentication) {
        throw new Error('Unauthorized')
    }
}

const handleLogin = async (event, context, callback) => {
    try {
        await authenticationMidleWare(event);
        const users = await Users.find();

        return {
            statusCode: 200,
            body: JSON.stringify(
              {
                message: 'Function executed successfully!',
                users: users,
              },
              null,
              2
            ),
          };
    } catch (error) {
        throw new Error('Error massage is', error)
    }
}

const finalHandler = middy(handleLogin).use(httpErrorHandler())

module.exports = { finalHandler };