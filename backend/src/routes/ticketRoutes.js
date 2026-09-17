const express = require("express");
const router = express.Router();

const ticketController = require("../controller/ticketController");

const {
  validateTicket,
  validateStatus
} = require("../middleware/validation");

router.get("/", ticketController.getTickets);

router.get("/:id", ticketController.getTicket);

router.post("/", validateTicket, ticketController.createTicket);

module.exports = router;