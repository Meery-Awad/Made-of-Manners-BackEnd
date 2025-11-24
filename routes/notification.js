const express = require("express");
const { notificationAlert , contactMessageAlert, markNotificationsAsRead } = require("../controllers/notificationController");

const router = express.Router();

router.post("/", notificationAlert);
router.post('/contactusAlert', contactMessageAlert)
router.post('/mark-read', markNotificationsAsRead)

module.exports = router;
