const mongoose = require('mongoose');

const rejectReasonSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.ObjectId,
      ref: 'Question',
      required: [true, 'Reject Reason must belong to an Question'],
      unique: [true, 'Qestion is ready reject anwer'],
    },
    reason: {
      type: String,
    },
    type: {
      type: String,
    },
  },
);

const RejectReason = mongoose.model('RejectReason', rejectReasonSchema);
module.exports = RejectReason;
