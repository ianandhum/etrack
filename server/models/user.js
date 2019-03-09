var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: 'String', required: true },
  designation: { type: 'String', required: true },
  password: { type: 'String', required: true },
  role: { type: 'String', required: true },
  info: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  primaryColor:{type:"String",default:"#f44",required:false}
});

module.exports = mongoose.model('User', userSchema);
