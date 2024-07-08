const crypto = require('crypto');

const generatePassword = (length) => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

console.log(`Generated password: ${generatePassword(12)}`);
