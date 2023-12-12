import { Link } from 'react-router-dom';

function MailConfirm() {

  return (
    <div className="base-container">
      <Link className='cancel-link' to='/'><span className='close'>X</span></Link>
      <h1 className='title'>Réinitialisation</h1>
      <form className='form'>
        <label className='form-label' htmlFor="email">Adresse mail de votre compte</label>
        <input className='form-input' type="email" name="email" id="email" />
        <button className='form-submit'>Recevoir un lien de réinitialisation</button>
      </form>
    </div>
  );
}

export default MailConfirm;