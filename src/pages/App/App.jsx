import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotePage from '../NotePage/NotePage';
import NoteList from '../NoteList/NoteList';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/notes/new" element={<NotePage />} />
            </Routes>
            <NoteList />
          </>
          :
          <AuthPage setUser={setUser} />
      }
      <NotePage />
    </main>
  );
}
