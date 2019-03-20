var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  _clientId: { type: 'Integer', required: true },
  beginDate: { type: 'Date',default: Date.now, required: true },
  deadLine: { type: 'Date',default:Date.now, required: true },
  lastUpdate: { type: 'String', required: true },
  monitor: { type: 'Boolean', default: true, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
