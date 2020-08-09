//Not my code

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/', (req, res, next) => {
    res.send('API Status: I\'m awesom')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'nathanrth15@gmail.com',
        from: 'nathanrth15@gmail.com',
        subject: 'Website Contact',
        text: req.body.message +"\n \n \n" + req.body.name + "\n" + req.body.email,
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3020, '0.0.0.0');