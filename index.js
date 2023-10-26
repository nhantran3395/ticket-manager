const TicketManager = require("./ticket-manager");
const EmailService = require("./email-service");
const DatabaseService = require("./database-service");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (error) => {
  console.error(error.toString());
});

ticketManager.buy("nhan@example.com", 20);
ticketManager.buy("jay@example.com", 10);
ticketManager.buy("david@example.com", 30);
ticketManager.buy("jane@example.com", 30);

console.log(
  `We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`,
);

console.log(
  `We have ${ticketManager.listenerCount(
    "error",
  )} listener(s) for the error event`,
);
