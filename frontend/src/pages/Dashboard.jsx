import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NotesForm from '../components/NotesForm';
import NoteItem from '../components/NoteItem';
import { getNotes, reset } from '../features/notes/notesSlice';
import Spinner from '../components/Spinner';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  );
  useEffect(() => {
    if (isError) console.log(message);
    //redirect user if it's not logged in
    if (user === null) {
      navigate('/login');
    }
    //get the notes
    dispatch(getNotes());

    //reset on unMount
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="heading">
        <h2>Welcome {user && user.name}</h2>
        <p>Notes Dashboard</p>
      </section>

      <NotesForm />

      <section className="content">
        {notes.length > 0 ? (
          <div className="goals">
            {notes.map((singleNote) => {
              return <NoteItem key={singleNote._id} singleNote={singleNote} />;
            })}
          </div>
        ) : (
          <h3> There are no notes </h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
