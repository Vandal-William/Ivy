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
import Documents from '../Collections/Documents';

interface ErrorMessage {
  message: string;

}

function App() {
  const isInSession = Boolean(sessionStorage.getItem('IsConnected'));
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isClickable, setisClickable] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
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
      if(isConnected || isInSession){
        setisClickable(true);
      
      }
      if(isConnected === false || isInSession === false){
        setisClickable(false);
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

        <Character 
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu} 
          isClickable={isClickable}
        />

        {error.length > 0 ? <ErrorMessage error={error} /> : ""}
        {connectionAttempt === 3 ? <ResettingMessage  
          setConnectionAttempt={setConnectionAttempt} 
          setIsButtonDisabled={setIsButtonDisabled}
          /> : ""}

        {isOpenMenu ? 
          <Menu 
          setIsConnected={setIsConnected} 
          setisClickable={setisClickable} 
          setIsOpenMenu={setIsOpenMenu} 

          /> : ""
        }

        <Routes>

          {isConnected && isInSession ?  <Route path='/' element={<UserMassage />}/> : <Route path='/' element={<VisitorMessage />}/>}

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
          <Route path='/collections/:id' element={<Documents setIsOpenMenu={setIsOpenMenu} setisClickable={setisClickable} data={userData.documents} collection={userData.collections}/>}/>
          <Route path='/collections' element={isConnected || isInSession ?  <Collections setIsOpenMenu={setIsOpenMenu} data={userData.collections} setisClickable={setisClickable} /> :  
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
