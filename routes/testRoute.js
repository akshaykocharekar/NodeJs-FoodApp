const express = require("express");
const { testUserModalController } = require("../controllers/testControllers");

//router object
const router = express.Router();

//routes GET | POST | DELETE | UPDATE

router.get("/test-user", testUserModalController);

module.exports = router;
