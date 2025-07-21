import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  plan: {
    type: String,
    enum: ['Free', 'Silver', 'Gold', 'VIP'],
    default: 'Free',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
