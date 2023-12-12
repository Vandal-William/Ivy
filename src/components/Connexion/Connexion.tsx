import { Link, useNavigate } from 'react-router-dom';
import { SyntheticEvent} from 'react';

interface User {
  name: string;
  mail: string;
  password: string;
}

interface ConnexionProps {
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  addErrorMessage: (message: string) => void;
  clearErrors: () => void;
  connectionAttempt: number;
  setConnectionAttempt: React.Dispatch<React.SetStateAction<number>>;
  isButtonDisabled : boolean; 
  setIsButtonDisabled : React.Dispatch<React.SetStateAction<boolean>>;
  data: User[]
}

function Connexion({
  setIsConnected,
   addErrorMessage, 
   clearErrors, 
   connectionAttempt, 
   setConnectionAttempt,
   isButtonDisabled,
  setIsButtonDisabled,
  data
  }: ConnexionProps) {

  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {

    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    const foundUser = data.find((user: User) => user.mail === email && user.password === password);
    
    if (foundUser) {
      sessionStorage.setItem('username', foundUser.name);
      sessionStorage.setItem('IsConnected', "true");
      setIsConnected(true)
      navigate('/'); 
      clearErrors();

    } else {

      addErrorMessage('Vos Identifiants sont incorrects.');
      setConnectionAttempt(connectionAttempt + 1);

      if (connectionAttempt === 2){
        clearErrors()
        setIsButtonDisabled(true);
      }

    }
  }

  return (
    <div className="base-container">
      <Link className='cancel-link' to='/'><span className='close'>X</span></Link>
      <h1 className='title'>Connexion</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='form-label' htmlFor="email">Adresse mail</label>
        <input className='form-input' type="email" name="email" id="email" />
        <label className='form-label' htmlFor="password">Mot de passe</label>
        <input className='form-input' type="password" name="password" id="password" />
        <button className='form-submit' style={isButtonDisabled ? {background: '#eaeaea', color: 'grey', cursor: 'default'} : {}} disabled={isButtonDisabled}>Me connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
