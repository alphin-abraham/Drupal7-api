// install faker module
const Faker = require('faker');


function userLogger(userContext, events, done) {

}


function responseLogger(requestParams, response, context, ee, next) {
  console.log(response.body);
}


function requestLogger(requestParams, response, context, ee, next) {
  console.log(requestParams);
}

function generateuserData(userContext, events, done) {

  const name = Faker.internet.userName().toLowerCase();
  const email = Faker.internet.exampleEmail();
  const password = 123456;

  userContext.vars.name = name;
  userContext.vars.email = email;
  userContext.vars.password = password;

  return done();
}

module.exports = {
    responseLogger: responseLogger,
    requestLogger: requestLogger,
    generateuserData:generateuserData,
}
