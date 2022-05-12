module.exports = (mongoose) => {
    const User = mongoose.model(
      "User",
      mongoose.Schema({
        userid: Number,
        email: {
          type: String,
          unique: true,
          required: true,
          lowercase: true,
          validate: (value) => {
            return validator.isEmail(value);
          },
        },
        first_name: { type: String, required: true },
        last_name: String,
        username: String,
        contact: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: "user", required: true },
        isLoggedIn: Boolean,
        uuid: String,
        accesstoken: String,
        coupens: [
          {
            id: Number,
            discountValue: Number,
          },
        ],
        bookingRequests: [
          {
            reference_number: Number,
            coupon_code: Number,
            show_id: Number,
            tickets: [
              {
                type: Number,
              },
            ],
          },
        ],
      })
    );
    return User;
  };