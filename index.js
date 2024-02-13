const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const membreR = require('./src/membres/membreR');
app.use(bodyParser.json());
app.use(express.json());
app.use('/api',membreR);
app.get('/',(req,res) => {
    res.send('express is runinig')
})
const uri="mongodb+srv://maaouiyoussef:vWbieQ3m6PC1Ah2p@cluster0.lmxdrql.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri)
.then(() => console.log('Connexion à MongoDB réussie !')) // connect se fait avec succès
.catch(() => console.log('Connexion à MongoDB échouée !')); // echec
app.listen(4000,()=>{
    console.log('serveur is runing');
})
