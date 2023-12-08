import { Link } from 'react-router-dom';
import './styles.scss'
import { moveLeftCharacter } from '../../selectors/characterAnimations/moveCharacter';

function VisitorMessage() {


  const handleClick = () => {
    moveLeftCharacter();
  }

  return (
    <div className="message">
      <p className="message-content">
          Bonjour, Que souhaitez vous faire ?
      </p>
    
      <ul className='message-choice'>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/Ivy/connexion" >Me connecter</Link ></li>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/Ivy/signup" >M'inscrire</Link ></li>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/Ivy/introduce">Qui est tu ?</Link ></li>
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/Ivy/resume">Pourquoi m'inscrire ?</Link ></li>
      </ul>
    </div>
  );
}

export default VisitorMessage;