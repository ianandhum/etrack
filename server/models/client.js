var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  _clientId: { type: 'String', required: true },
  boundingBox:{type:"Array",default:[],required:false}
});

module.exports = mongoose.model('Client', clientSchema);
