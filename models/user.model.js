const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: integer,
  email: string,
  first_name: string,
  last_name: string,
  username: string,
  contact: string,
  password: string,
  role: string,
  isLoggedIn: boolean,
  uuid: string,
  accesstoken: string,
  coupens: [
    {
      id: integer,
      discountValue: integer,
    },
  ],
  bookingRequests: [
    {
      reference_number: integer,
      coupon_code: integer,
      show_id: integer,
      tickets: [integer],
    },
  ],
});

module.exports = mongoose.model("Genre", userSchema);
