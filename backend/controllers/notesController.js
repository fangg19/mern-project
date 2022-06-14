const asyncHandler = require('express-async-handler');
const Note = require('../models/noteModel');

//@desc   GET all the notes
//@route  GET /api/notes
//@access Private
const getNotes = asyncHandler(async (req, res) => {
  //Get id from auth middleware

  const notes = await Note.find({ user: req.user.id });
  res.status(200).json(notes);
});

//@desc   POST a single note
//@route  POST /api/notes
//@access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field.');
  }
  const note = await Note.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(note);
});

//@desc   UPDATE a single note
//@route  PUT /api/note/:id
//@access Private
const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);
  if (!note) {
    res.status(400);
    throw new Error('Note not found.');
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Check if the logged in user matches the current note user
  if (note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('The user is not authorized');
  }

  const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedNote);
});

//@desc   DELETE a single note
//@route  DELETE /api/note/:id
//@access Private
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);

  if (!note) {
    res.status(400);
    throw new Error('Note not found.');
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Check if the logged in user matches the current note user
  if (note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('The user is not authorized');
  }

  const deletedNote = await Note.findByIdAndDelete(id);
  res.status(200).json(deletedNote);
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
