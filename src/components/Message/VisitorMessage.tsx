import { Link } from 'react-router-dom';
import './styles.scss'
import { moveLeftCharacter } from '../../selectors/characterAnimations/moveCharacter';

function VisitorMessage() {

  console.log('Current pathname:', window.location.pathname);
  function handleClick() {
    if (window.location.pathname.includes('/introduce')) {
      console.log('Path includes "introduce"');
      return;
    } else {
      console.log(window.location);
      moveLeftCharacter();
    }
  }

  return (
    <div className="message">
      <p className="message-content">
          Bonjour, Que souhaitez vous faire ?
      </p>
    
      <ul className='message-choice'>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/connexion" >Me connecter</Link ></li>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/signup" >M'inscrire</Link ></li>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/introduce">Qui est tu ?</Link ></li>
      </ul>
    </div>
  );
}

export default VisitorMessage;