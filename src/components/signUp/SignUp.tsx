import { Link } from 'react-router-dom';

function SignUp() {

  return (
    <div className="base-container">
      <Link className='cancel-link' to='/Ivy/'><span className='close'>X</span></Link>
      <h1 className='title'>Inscription</h1>
      <form className='form'>
        <label className='form-label' htmlFor="email">Adresse mail</label>
        <input className='form-input' type="email" name="email" id="email" />
        <label className='form-label' htmlFor="password">Mot de passe</label>
        <input className='form-input' type="password" name="password" id="password" />
        <label className='form-label' htmlFor="confirm-password">Retapez votre mot de passe</label>
        <input className='form-input' type="confirm-password" name="confirm-password" id="confirm-password" />
        <button className='form-submit'>M'inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;