const mongoose = require('mongoose');
const Cours = require("./coursModel");

ObjectId = mongoose.Types.ObjectId;

// -- FIND ALL
async function processFindAll () {
  console.log("Process : Cours - FIND ALL");

  return await Cours.find().populate('classe').populate('professeur');
};

// -- CREATE
async function processCreate (req, mdp) {
    console.log("Process : Cours - CREATE :" + req.body.nom);

    newCours = new Cours({nom:req.body.nom, date: req.body.date, heureD:req.body.heureD, heureF:req.body.heureF, salle:req.body.salle, classe:req.body.classe, professeur:req.body.professeur, presents:[], presentsProvisoire:[]});

    return await newCours.save();
};

// -- UPDATE
async function processUpdate (id, body) {
    console.log("Process : Cours - UPDATE id : " + id);
    
    return await Cours.updateOne({_id : new ObjectId(id)}, {$set : body});
};

// -- DELETE
async function processDelete (req) {
    console.log("Process : Cours - DELETE id : " + req.params.id);
    
    return await Cours.find({_id : new ObjectId(req.params.id)}).deleteOne();
};

// -- READ ID
async function processRead (id) {
    console.log("Process : Cours - READ id : " + new ObjectId(id));

    return await Cours.findOne({_id : new ObjectId(id)}).populate('presents');
};

// -- READ ID BY CRITERE
async function processReadByCritere (critere, variable) {
    console.log("Process : Cours - variable : " + variable);

    return await Cours.findOne({[critere] : variable});
};

// -- UPDATE PRESENT
async function processUpdatePresent(id, body) {
    console.log("Process : Cours - UPDATE PRESENT : " + id);
    
    return await Cours.updateOne({_id : new ObjectId(id)}, {$set : body});
};

exports.processFindAll = processFindAll;
exports.processCreate = processCreate;
exports.processUpdate = processUpdate;
exports.processDelete = processDelete;
exports.processRead = processRead;
exports.processReadByCritere = processReadByCritere;
exports.processUpdatePresent = processUpdatePresent;