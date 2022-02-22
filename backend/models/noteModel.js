const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', noteSchema);
