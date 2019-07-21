var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  _clientId: { type: 'Number', required: true },
  employeeId:{ type: "Number",required:true },
  timestamp: { type: 'Date', required: true },
  location:{
    lat: { type: 'Number', required: true },
    lng: { type: 'Number', required: true }
  }
});

module.exports = mongoose.model('location', locationSchema);
