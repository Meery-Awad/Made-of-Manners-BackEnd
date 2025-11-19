const express = require("express");
const { postContactUsDetails, getContactUsDetails, deleteContactMessages } = require("../controllers/contactUs");

const router = express.Router();

router.post("/", postContactUsDetails);
router.get("/", getContactUsDetails);
router.post("/delete", deleteContactMessages);

module.exports = router;
