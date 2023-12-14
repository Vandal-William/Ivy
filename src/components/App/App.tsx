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
import MailConfirm from '../MailConfirm/MailConfirm';
import userData from '../../Data/data.json';
import Menu from '../Menu/Menu';
import Collections from '../Collections/Collections';
import Documents from '../Collections/Documents';
import OneDocument from '../Collections/OneDocument';
import TechnologyWatch from '../TechnologyWatch/TechnologyWatch';

interface ErrorMessage {
  message: string;

}

function App() {
  const isInSession = sessionStorage.getItem('IsConnected');
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
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
      if(isInSession === 'true'){
        setIsOpenMenu(true)
      }
    }else{
      setIsOpenMenu(false)
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

        {isOpenMenu ? <Menu setIsOpenMenu={setIsOpenMenu} /> : ""}

        <Routes>

         { isInSession === 'true' ?  "" : <Route path='/' element={<VisitorMessage />}/>}

          <Route path='/connexion' element={
            <Connexion 
            addErrorMessage={addErrorMessage} 
            clearErrors={clearErrors}
            connectionAttempt={connectionAttempt}
            setConnectionAttempt={setConnectionAttempt}
            isButtonDisabled = {isButtonDisabled}
            setIsButtonDisabled = {setIsButtonDisabled}
            data={userData.users}
            
            />
          }
          />
          <Route path='/Watch' element={<TechnologyWatch />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/introduce' element={<Introduce />}/>
          <Route path='/reset-query' element={<MailConfirm />}/>
          <Route path='/document/:id' element={<OneDocument data={userData.documents} collection={userData.collections}/>}/>
          <Route path='/collections/:id' element={<Documents data={userData.documents} collection={userData.collections}/>}/>
          <Route path='/collections' element={isInSession === 'true' ?  <Collections data={userData.collections}/> :  
          <Connexion 
            addErrorMessage={addErrorMessage} 
            clearErrors={clearErrors}
            connectionAttempt={connectionAttempt}
            setConnectionAttempt={setConnectionAttempt}
            isButtonDisabled = {isButtonDisabled}
            setIsButtonDisabled = {setIsButtonDisabled}
            data={userData.users}
            />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
