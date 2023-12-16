import { Link, useNavigate } from 'react-router-dom';
import { SyntheticEvent} from 'react';
import axios from 'axios';


interface ConnexionProps {
  addErrorMessage: (message: string) => void;
  clearErrors: () => void;
  connectionAttempt: number;
  setConnectionAttempt: React.Dispatch<React.SetStateAction<number>>;
  isButtonDisabled : boolean; 
  setIsButtonDisabled : React.Dispatch<React.SetStateAction<boolean>>;
}

function Connexion({
   addErrorMessage, 
   clearErrors, 
   connectionAttempt, 
   setConnectionAttempt,
   isButtonDisabled,
  setIsButtonDisabled
  }: ConnexionProps) {

  const navigate = useNavigate();


  const handleSubmit = async (e: SyntheticEvent) => {

    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('mail') as string;
    const password = formData.get('password') as string;

    const response = await axios.post('http://localhost:3002/connect', {
      mail: email,
      password: password
    }, {
      withCredentials: true 
    });

    const user = response.data;

    if (user !== "nom d'utilisateur ou mot de passe incorrect") {
      sessionStorage.setItem('username', user.name);
      sessionStorage.setItem('IsConnected', "true");
      sessionStorage.setItem('userId', `${user.id}`);
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
        <input className='form-input' type="email" name="mail" id="email" />
        <label className='form-label' htmlFor="password">Mot de passe</label>
        <input className='form-input' type="password" name="password" id="password" />
        <button className='form-submit' style={isButtonDisabled ? {background: '#eaeaea', color: 'grey', cursor: 'default'} : {}} disabled={isButtonDisabled}>Me connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
