const BASE_URL = '/api/notes'; 

// Function to fetch all notes
export async function getNotes() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}

export async function createNote(noteData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });
  const data = await response.json();
  return data;
}

export async function fetchNotes() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  }