let jwt = require('jsonwebtoken');
const reqResponse = require('./responseHandler');
const errorCodes = require("../constant/errorCodes")

module.exports = {
  checkToken,
  provideToken
}

let key = 'secret'

function provideToken(user){
  var token = jwt.sign({ id: user.id }, key, {
    expiresIn: 86400 // expires in 24 hours
  });
  return token;
}
function checkToken(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    jwt.verify(token, key, {
      ignoreExpiration: true
    }, (err, decoded) => {
      if (err) {
        return reqResponse.errorResponse(res, errorCodes.TOKEN_ERROR.code);
      } else {
        if (key === 'secret') {
          decoded.isAdminUser = false;
        } else {
          decoded.isAdminUser = true;
        }
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return reqResponse.errorResponse(res, errorCodes.TOKEN_MISSING.code);
  }

}
