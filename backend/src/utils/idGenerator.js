function generateTicketId(tickets) {
    if(tickets.length === 0) {
        return "TKT-1001";
    }
    const numbers = tickets.map(ticket => {
        const number = parseInt(ticket.id.replace("TXT-", ""), 10);
        return isNaN(number) ? 1000 : number
    });

    const highestNumber = Math.max(...numbers);
    return `TXT-${highestNumber + 1}`;
}

module.exports = generateTicketId;