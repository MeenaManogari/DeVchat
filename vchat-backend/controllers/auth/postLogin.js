const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;

    //Check whether registered user
    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      //send token
      const token = jwt.sign(
        {
          userId: user._id,
          mail,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      //response to client
      return res.status(200).json({
        mail: user.mail,
        token: token,
        username: user.username,
        _id: user._id,
      });
    }
    return res.status(400).send("Invalid Credentials. please try again");
  } catch (err) {
    return res.status(500).send("Error occured. please try again");
  }
};

module.exports = postLogin;
