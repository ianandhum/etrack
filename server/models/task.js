var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  _clientId: { type: 'Number', required: true },
  beginDate: { type: 'Date',default: Date.now, required: true },
  employees:{ type: 'Array',required:true },
  deadLine: { type: 'Date',default:Date.now, required: true },
  lastUpdate: { type: 'String', required: true },
  monitoring: { type: 'Boolean', default: true, required: true },
  status: { type:'Boolean', default:false }
});

module.exports = mongoose.model('task', taskSchema);