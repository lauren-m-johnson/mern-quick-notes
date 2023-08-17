import React, { useState } from 'react';
import { fetchNotes } from '../../utilities/notes-service'; 

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  // Fetch notes and update the state when the component mounts
  async function fetchAndSetNotes() {
    try {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

// Fetch notes immediately when the component renders
  fetchAndSetNotes(); 

  return (
    <div>
      <h2>My Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map(note => (
            <li key={note._id}>
              <p>{note.text}</p>
              <p>Created: {new Date(note.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}