var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  _clientId: { type: 'Number', required: true },
  boundingBox:{type:"Array",default:[],required:false}
});

module.exports = mongoose.model('client', clientSchema);
