const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const WishListSchema = new mongoose.Schema({
    name: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

WishListSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('WishList', WishListSchema);