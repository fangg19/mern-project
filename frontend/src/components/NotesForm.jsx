import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';

const NotesForm = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(addNote({ text }));
    setText('');
  };

  const handleChange = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="text">Note</label> */}
          <input
            placeholder="Type your fast note"
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-success" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </section>
  );
};

export default NotesForm;
