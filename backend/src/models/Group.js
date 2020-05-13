const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const GroupSchema = new mongoose.Schema({
    name: String,
    minumumValue: Number,
    maximumValue: Number,
    drawDate: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    users: [ {
        participants: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        } ,
        OccultFriend: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        
        }
    }]

})

GroupSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Group', GroupSchema);