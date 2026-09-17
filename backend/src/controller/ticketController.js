const ticketService = require("../services/ticketService");

async function getTickets(req, res, next) {
  try {
    const tickets = await ticketService.getTickets(req.query);
    res.json({
      success: true,
      count: tickets.length,
      data: tickets
    })
  } catch (error) {
    next(error)
  }
}

async function getTicket(req, res, next) {
  try {
    const ticket = await ticketService.getTicketById(req.params.id);
    if(!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found."
      })
    }
  } catch (error) {
    next(error);
  }
}

async function createTicket(req, res, next) {
  try {
    // service logic
    return res.json({
      success: true,
      message: "Created ticket successfully",
      // also sending posted data with incremented id
    })
  } catch(error) {
    next(error);
  }
}

module.exports = {
  getTickets,
  getTicket,
  createTicket
}