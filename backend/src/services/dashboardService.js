const { readJson } = require("../utils/fileHelper");

const FILE_NAME = "tickets.json"

async function getDashboardSummary() {
    const tickets = await readJson(FILE_NAME);

    const summary = {
        total: tickets.length,
        pending: tickets.filter(ticket => ticket.status === "Pending").length,
        inProgress: tickets.filter(ticket => ticket.status === "In Progress").length,
        resolved: tickets.filter(ticket => ticket.status === "Resolved").length,
        closed: tickets.filter(ticket => ticket.status === "Closed").length,
        critical: tickets.filter(ticket => ticket.status === "Critical").length,
    }

    return summary;
}

module.exports = {
    getDashboardSummary,
}