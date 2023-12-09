import { Link } from 'react-router-dom';

function Connexion() {

  return (
    <div className="base-container">
      <Link className='cancel-link' to='/'><span className='close'>X</span></Link>
      <h1 className='title'>Connexion</h1>
      <form className='form'>
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
