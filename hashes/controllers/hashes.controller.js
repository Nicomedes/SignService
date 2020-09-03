const crypto = require('crypto');
const bodyParser = require("body-parser");
const fs = require('fs');
const privatekey = fs.readFileSync('/Users/nicomedes/OneDrive - Tis Tech Angola/Localização (AO)/2_ANÁLISE_DESENHO/DESENHO/SignService/hashes/controllers/ChavePrivada.pem');

exports.generate = (req, res) => {

    var message = req.body.data

    var signer = crypto.createSign('sha1');

    signer.update(message);

    //console.log(message);

    signer.end();

    var signature = signer.sign(privatekey, 'base64');


    res.status(201).send(signature);

}