import { Link } from 'react-router-dom';
import './styles.scss'
import { visitorMessageProps } from '../@types/MessagesProps/visitorMessageProps';
import { moveLeftCharacter } from '../../selectors/characterAnimations/moveLeftCharacter';

function VisitorMessage({isConnected, setConnection}: visitorMessageProps) {


  const handleClick = () => {
    setConnection(true);
    moveLeftCharacter();
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
        <li className='message-choice-li'><Link onClick={handleClick} className='message-choice-link' to="/resume">Pourquoi m'inscrire ?</Link ></li>
      </ul>
    </div>
  );
}

export default VisitorMessage;