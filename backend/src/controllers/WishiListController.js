const WishList = require('../models/Wishlist');

module.exports = { 

    async index(req, res){
        const {userId, page = 1} = req.query;
        const wish = await WishList.paginate({user: userId},{page,limit : 3});

        return res.json(wish);
    },

    async store(req, res) {
       const {name,description} = req.body;
       const {user_id} = req.headers;

       const wish = await WishList.create({name,description,
        user: user_id})

       return res.json(wish)
    }
};