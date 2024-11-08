const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ATN0YXXwR609dGCfl2V51mzTeW3xCIqo26V74TFAekAGAmIkFkODDPJhdq_VddJxf3lJerO1BzgIxmf5",
  client_secret: "ENccsOTd0x4l4htaNmckrhtCxFY1UtlxSWEZL6x9RovZSIxHf7_QqrOHOczt4QT06guGYmaKO3rJd43P",
});

module.exports = paypal;