const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    hash.update(inputs.sort().join(' '));

    //how to represent result
    return hash.digest('hex');
};

module.exports = cryptoHash;