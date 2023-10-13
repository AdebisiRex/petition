const mongoose = require("mongoose");

const visitorSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const visitorModel = mongoose.model("visitor", visitorSchema);

module.exports = visitorModel;
