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
import UserMassage from '../Message/UserMassage';
import Menu from '../Menu/Menu';
import Collections from '../Collections/Collections';

interface ErrorMessage {
  message: string;

}

function App() {

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isClickable, setisClickable] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
  const [viewUserMessage, setViewUserMessage] = useState<boolean>(true);
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
      if(isConnected){
        setisClickable(true);
      }
      if(!isConnected){
        setisClickable(false);
      }
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

        <Character 
          setViewUserMessage={setViewUserMessage} 
          viewUserMessage={viewUserMessage}  
          isConnected={isConnected}
          isClickable={isClickable}
        />

        {error.length > 0 ? <ErrorMessage error={error} /> : ""}
        {connectionAttempt === 3 ? <ResettingMessage  
          setConnectionAttempt={setConnectionAttempt} 
          setIsButtonDisabled={setIsButtonDisabled}
          /> : ""}

        {isConnected && viewUserMessage === false && isOpenMenu ? 
          <Menu 
          setIsConnected={setIsConnected} 
          setisClickable={setisClickable} 
          setIsOpenMenu={setIsOpenMenu} 

          /> : ""
        }

        <Routes>

          {isConnected ?  "" : <Route path='/' element={<VisitorMessage />}/>}

          {viewUserMessage ? <Route path='/' element={<UserMassage />}/> : ""}

          <Route path='/connexion' element={
            <Connexion 
            addErrorMessage={addErrorMessage} 
            clearErrors={clearErrors}
            connectionAttempt={connectionAttempt}
            setConnectionAttempt={setConnectionAttempt}
            isButtonDisabled = {isButtonDisabled}
            setIsButtonDisabled = {setIsButtonDisabled}
            data={userData.users}
            setIsConnected={setIsConnected}
            
            />
          }
          />
          
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/introduce' element={<Introduce />}/>
          <Route path='/reset-query' element={<MailConfirm />}/>
          <Route path='/collections' element={isConnected ?  <Collections setIsOpenMenu={setIsOpenMenu} /> :  
          <Connexion 
            addErrorMessage={addErrorMessage} 
            clearErrors={clearErrors}
            connectionAttempt={connectionAttempt}
            setConnectionAttempt={setConnectionAttempt}
            isButtonDisabled = {isButtonDisabled}
            setIsButtonDisabled = {setIsButtonDisabled}
            data={userData.users}
            setIsConnected={setIsConnected}
            />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
