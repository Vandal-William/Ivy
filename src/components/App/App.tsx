import Character from '../Character/Character';
import NavBar from '../NavBar/Navbar';
import {Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Connexion from '../Connexion/Connexion';
import { moveCharacterToInitialPosition } from '../../selectors/characterAnimations/moveCharacter';
import VisitorMessage from '../Message/VisitorMessage';
import SignUp from '../signUp/SignUp'
import Introduce from '../Introduce/Introduce';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { moveLeftCharacter } from '../../selectors/characterAnimations/moveCharacter';
import ResettingMessage from '../ResettingMessage/ResettingMessage';

interface ErrorMessage {
  message: string;

}

function App() {

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage[]>([]);
  const [connectionAttempt, setConnectionAttempt] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const location = useLocation();

  const addErrorMessage = (message: string) => {
    const isDuplicate = error.some((err) => err.message === message);

    if (!isDuplicate) {
      setError([...error, { message }]);
    }
  };

  const clearErrors = () => {
    setError([]);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      moveCharacterToInitialPosition();
    }else{
      if (location.pathname !== '/introduce') {
        moveLeftCharacter();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <div className="scene">
        <Character />
        {error.length > 0 ? <ErrorMessage error={error} /> : ""}
        {connectionAttempt === 3 ? <ResettingMessage  
          setConnectionAttempt={setConnectionAttempt} 
          setIsButtonDisabled={setIsButtonDisabled}
          /> : ""}
        <Routes>
          {isConnected ? "" : <Route path='/' element={<VisitorMessage />}/>}
          <Route path='/connexion' element={
            <Connexion 
              setIsConnected={setIsConnected} 
              addErrorMessage={addErrorMessage} 
              clearErrors={clearErrors}
              connectionAttempt={connectionAttempt}
              setConnectionAttempt={setConnectionAttempt}
              isButtonDisabled = {isButtonDisabled}
              setIsButtonDisabled = {setIsButtonDisabled}
            />
            }
          />
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/introduce' element={<Introduce />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
