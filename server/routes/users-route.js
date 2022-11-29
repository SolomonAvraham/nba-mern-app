const router = require("express").Router();
const { getUser, createUser } = require("../controllers/users-ctr");

router.get("/", getUser);
router.post("/createUser", createUser);

module.exports = router;
