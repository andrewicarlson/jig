/**
 * Usage: Include the following in a AWS Lambda when you have more than one Environment Variable to decrypt using KMS.
 *
 * All that needs to be done is adding a function name to line 19 for when all Promises have resolved, and an error function call on line 32.
 */
const AWS = require('aws-sdk');

const encrypted = {
    KEY1: process.env['YOUR'],
    KEY2: process.env['KEYS'],
    KEY3: process.env['HERE'],
};
const decrypted = {};

const decryptKeys = function(encrypted) {
    const kmsPromises = Object.keys(encrypted).reduce(buildKMSPromises.bind(this, encrypted), []);

    return Promise.all(kmsPromises).then(
        // Add a function name here to call after all KMS key promises have been resolved.
    );
};

const buildKMSPromises = function(encrypted, acc, curr) {
    const kms = new AWS.KMS();
    acc.push(kms.decrypt({ CiphertextBlob: new Buffer(encrypted[curr], 'base64') }, kmsDecryptionResponse.bind(curr)).promise());

    return acc;
};

const kmsDecryptionResponse = function(err, data) {
    if (err) {
        // Handle key decryption errors here.
        return;
    }

    decrypted[this] = data.Plaintext.toString('ascii');
};