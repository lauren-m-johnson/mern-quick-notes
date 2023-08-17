import React, { useState } from 'react';
import { createNote } from '../../utilities/notes-service';

export default function NoteForm({ setNotes }) {
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState('');

  const handleChange = (evt) => {
    setNewNote(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const createdNote = await createNote({ text: newNote }); 
      setNotes((prevNotes) => [...prevNotes, createdNote]); 
      setNewNote('');
    } catch (error) {
      setError('Failed to create note. Please try again.');
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>New Note:</label>
          <textarea
            name="newNote"
            value={newNote}
            onChange={handleChange}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}