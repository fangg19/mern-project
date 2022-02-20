const asyncHandler = require('express-async-handler');

//@desc   GET all the notes
//@route  GET /api/notes
//@access Private
const getNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get notes' });
});

//@desc   POST a single note
//@route  POST /api/notes
//@access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field.');
  }

  res.status(200).json({ message: 'Set a single note' });
});

//@desc   UPDATE a single note
//@route  PUT /api/note/:id
//@access Private
const updateNote = asyncHandler(async (req, res) => {
  console.log(req.parmas);
  res.status(200).json({ message: `Updated note no. ${req.params.id}` });
});

//@desc   DELETE a single note
//@route  DELETE /api/note/:id
//@access Private
const deleteNote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted note no. ${req.params.id}` });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
