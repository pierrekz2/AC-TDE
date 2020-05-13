const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {

    async store(req, res) {
        const {name, email, password, birthday} = req.body;

        let user = await User.findOne({email});

        if(!user) {
            user = await User.create({name, email, password, birthday})
        }

        //const user = await User.create({name, email, password, birthday})

        return res.json(user)
    },

    async login(req, res){
        const {email, password } = req.params;

        const user =  await User.findOne({email: email});

        if (!user) {
            return res.status(400).json({ error: "User not found" });
          }
      
          if (!(await user.compareHash(password))) {
            return res.status(400).json({ error: "Invalid password" });
          }

        const token = jwt.sign({_id: user._id}, process.env.JWT_KEY,{
            expiresIn: 300
        });

        return res.send({auth : true, token : token})

    }
};