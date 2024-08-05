const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PhoneNumber = require('./models/PhoneNumber');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://yaroslavdev:1234567890@law-cluster.3b1nhz2.mongodb.net/?retryWrites=true&w=majority&appName=law-cluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});

app.post('/add-phone-number', async (req, res) => {
    try {
        const phoneNumber = new PhoneNumber(req.body);
        await phoneNumber.save();
        res.status(201).send(phoneNumber);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});