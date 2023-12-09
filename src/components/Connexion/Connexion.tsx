import { Link, useNavigate } from 'react-router-dom';
import { SyntheticEvent} from 'react';
import userData from '../../Data/data.json';

interface ConnexionProps {
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

interface User {
  name: string;
  mail: string;
  password: string;
}

function Connexion({ setIsConnected }: ConnexionProps) {

  const navigate = useNavigate();
  const handleSubmit = (e: SyntheticEvent) => {

    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const foundUser = userData.users.find((user: User) => user.mail === email && user.password === password);

    if (foundUser) {
      setIsConnected(true);
      navigate('/'); 
    } else {
      console.log('Utilisateur non trouvé');
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
        <button className='form-submit'>Me connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
