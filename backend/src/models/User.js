const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthday: Date

});

UserSchema.methods.compareHash = function(hash) {
      return bcrypt.compare(hash, this.password);
    }

module.exports = mongoose.model('User', UserSchema);