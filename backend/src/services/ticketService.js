const {readJson, writeJson} = require("../utils/fileHelper");

const generateTicketId = require("../utils/idGenerator");

const FILE_NAME = "tickets.json";

async function getTickets(filters={}) {
  let tickets = await readJson(FILE_NAME);

  const {
    search,
    status,
    priority,
    category,
    limit
  } = filters;

  if(status) {
    tickets = tickets.filter(ticket => ticket.status === status);
  }

  tickets.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

  if(limit) {
    tickets = tickets.slice(0, Number(limit))
  }

  return tickets;
}

async function getTicketById(id) {
  const tickets = await readJson(FILE_NAME);
  return tickets.find(ticket => ticket.id === id);
}

module.exports = {
  getTickets,
  getTicketById,
}