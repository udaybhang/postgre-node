const User = require('../models/User');
exports.postSignup = async (req, res, next) => {
    //getting user data from request body
    const {id, name, age} = req.body;
    try {
        const user = new User({id, name, age});
        const result = await user.createUser();
        res.send(user);
    } catch (error) {
        next(error);
    }
};