const MESSAGE = "There are no more tickets left to purchase";

class TicketOutOfStockError extends Error {
  constructor() {
    super(MESSAGE);
  }
}

module.exports = TicketOutOfStockError;
