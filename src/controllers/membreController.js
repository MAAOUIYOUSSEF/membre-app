const Membre = require('../models/Membre');
exports.createMembre=async (req,res)=>{
    try{
        const membre = new Membre({
            nom :req.body.nom,
            prenom: req.body.prenom,
            age : req.body.age,
            telephone: req.body.telephone,
        });
        const result = await membre.save();
        res.status(201).json({message:'Membre enrejestre'}); 
    }catch(error){
        res.status(400).json({message:'check plz'}); 

    }
}
exports.getALLmembres=async (req,res)=>{
try {
    const membre = await Membre.find();
    res.status(200).json(membre);
}catch (error){
       res.status(400).json(error);

}
}
exports.getMembreById=async(req,res)=>{
    try {
        const membre = await membre.findOne({_id:req.params.id});
        res.status(200).json(membre);
    }catch (error){
            res.status(400).json(error);
    
    }
}
exports.updateMembre=async (req,res)=>{
        try {
            const membre = new membre({
            _id:req.params.id,
            nom :req.body.nom,
            prenom: req.body.prenom,
            age : req.body.age,
            telephone: req.body.telephone,
            });
            const result = await Membre.updateOne({_id:req.params.id},membre);   
            res.status(200).json(membre);
        }catch (error){
           res.status(400).json(error);
    
         }
        }
exports.deleteMembre=async (req,res)=>{
    try{
        const result = await membre.deleteOne({_id:req.params.id},membre);
        res.status(200).json({message:'membre supprime'});
    }catch (error){
        res.status(400).json(error);

     }
    }