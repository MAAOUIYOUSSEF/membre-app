const mongoose = require('mongoose');
const membreSchema = mongoose.Schema(
    {
    nom: {type:String, required:true},
    prenom: {type:String, required:true},
    age: {type:Number, required:true},
    telephone: {type:Number, required:true},
}
);
module.exports = mongoose.model('membre', membreSchema); 