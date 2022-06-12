import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../features/notes/notesSlice';

const NoteItem = (props) => {
  const { singleNote } = props;
  const dispatch = useDispatch();
  return (
    <div className="note">
      <div>{new Date(singleNote.createdAt).toLocaleString('en-US')}</div>
      <h2>{singleNote.text}</h2>
      <button
        className="close"
        onClick={() => dispatch(deleteNote(singleNote._id))}
      >
        X
      </button>
    </div>
  );
};

export default NoteItem;
