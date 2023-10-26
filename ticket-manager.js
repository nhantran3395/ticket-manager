const EventEmitter = require("node:events");

const { TicketOutOfStockError } = require("./errors");

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    if (this.supply > 0) {
      this.supply--;
      this.emit("buy", email, price, Date.now());
      return;
    }

    this.emit("error", new TicketOutOfStockError());
  }
}

module.exports = TicketManager;
