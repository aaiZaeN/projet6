const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  email: { type : String, required: true },
  password: { type : String, required: true },
  sauce: { type: Chaîne, required: true },
  image: { type: fichier, required: true }    
});

module.exports = mongoose.model('Sauce', sauceSchema);