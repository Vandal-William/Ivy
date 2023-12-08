import Character from '../Character/Character';
import NavBar from '../NavBar/Navbar';
import {Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Connexion from '../Connexion/Connexion';
import { moveCharacterToInitialPosition } from '../../selectors/characterAnimations/moveCharacter';
import VisitorMessage from '../Message/VisitorMessage';

function App() {

  const isConnected = false
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Ivy') {
      moveCharacterToInitialPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <div className="scene">
        <Character />
        <Routes>
          {isConnected ? "" : <Route path='/Ivy' element={<VisitorMessage />}/>}
          <Route path='/connexion' element={<Connexion />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
