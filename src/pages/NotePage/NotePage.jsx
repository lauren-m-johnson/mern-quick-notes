import React, { useState } from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';
import * as notesService from '../../utilities/notes-service'; 

export default function NotePage() {
  const [notes, setNotes] = useState([]);

  async function fetchNotes() {
    try {
      const fetchedNotes = await notesService.getNotes(); 
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  return (
    <>
      <h1>Note Page</h1>
      {notes.length === 0 ? (
        <h2>No Notes Yet</h2>
      ) : (
        <NoteList notes={notes} />
      )}
      <NoteForm setNotes={setNotes} fetchNotes={fetchNotes} /> 
    </>
  );
}


