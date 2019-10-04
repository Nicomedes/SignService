
const crypto = require('crypto');
const fs = require('fs');
const privatekey = fs.readFileSync('/usr/app/hashes/controllers/ChavePrivada.pem', 'utf-8').toString();

exports.generate = (req, res) => {
    
    var message = req.query.data;

    var signer = crypto.createSign('sha1');

    signer.update(message);
    signer.end();

    var signature = signer.sign(privatekey);
    
    var signature_base64 = signature.toString('base64');

    res.status(201).send(signature_base64);

}