const usersModel = require("../models/users-models");

const getUser = async (req, res) => {
  await usersModel.find({}).then((user, error) => {
    if (error)
      return res.status(400).json({ success: false, message: error.message });
    if (user.length == 0)
      return res.json({ success: false, message: "no data" });
    res.status(200).json({ success: true, user });
  });
};

const createUser = async (req, res) => {
  await usersModel
    .insertMany(req.body.user)
    .then(() => {
      res
        .status(200)
        .json({ success: true, massage: "user added successfully" });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = { getUser, createUser };
