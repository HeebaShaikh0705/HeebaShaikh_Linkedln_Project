import mongoose from 'mongoose'

const LikeSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
    enum: ['like', 'unlike']
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  userAgent: {
    type: String,
    required: false
  },
  ip: {
    type: String,
    required: false
  }
})

export default mongoose.models.Like || mongoose.model('Like', LikeSchema)
