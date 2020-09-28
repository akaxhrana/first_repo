const User = require("../database/models/User");

module.exports = async (req, res) => {
  const currUser = await User.findById(req.session.userId);
  
  if (req.session.userId) {
    
    return res.render("create", { currUser });
  }
};

