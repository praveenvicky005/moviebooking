const db = require('../models');
const User = db.user;


exports.signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    // generate access token and set isLoggedIn to true
    user.isLoggedIn = true;
    user.accessToken = generateAccessToken(user._id);
    user.save();
    res.status(200).json({ message: 'Logged in successfully', accessToken: user.accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.isLoggedIn = false;
    user.accessToken = '';
    await user.save();
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function generateAccessToken(userId) {
  // generate access token
  const payload = { userId };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  return accessToken;
}

// const Coupon = require('../models/coupon.model');
// const Booking = require('../models/booking.model');

// // Function to generate a random coupon code
// function generateCouponCode() {
//   const length = 8;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let couponCode = '';
//   for (let i = 0; i < length; i++) {
//     couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return couponCode;
// }

// Route handler for /getCouponCode
// exports.getCouponCode = async function(req, res) {
//   try {
//     // Find a random coupon from the database
//     const coupon = await Coupon.findOneRandom();
//     if (!coupon) {
//       return res.status(404).json({ error: 'No coupons found' });
//     }

//     // Return the coupon code
//     return res.status(200).json({ couponCode: coupon.code });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Route handler for /bookShow
// exports.bookShow = async function(req, res) {
//   try {
//     // Get the user ID from the request
//     const userId = req.userId;

//     // Find the user in the database
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Get the show ID, number of tickets, and coupon code from the request body
//     const { showId, tickets, couponCode } = req.body;

//     // Calculate the total amount
//     let totalAmount = tickets.length * 100;
//     if (couponCode) {
//       // Find the coupon in the database
//       const coupon = await Coupon.findOne({ code: couponCode });
//       if (!coupon) {
//         return res.status(404).json({ error: 'Coupon not found' });
//       }

//       // Apply the discount
//       totalAmount -= coupon.discountValue;
//     }

//     // Create a new booking object
//     const booking = new Booking({
//       user: user._id,
//       show: showId,
//       tickets,
//       totalAmount
//     });

//     // Save the booking object to the database
//     await booking.save();

//     // Return the booking details
//     return res.status(200).json({
//       referenceNumber: booking._id,
//       showId: booking.show,
//       tickets: booking.tickets,
//       totalAmount: booking.totalAmount
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// }
