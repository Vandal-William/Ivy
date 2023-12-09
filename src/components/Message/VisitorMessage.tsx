import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.scss'
import { moveLeftCharacter } from '../../selectors/characterAnimations/moveCharacter';
import { SyntheticEvent} from 'react';

function VisitorMessage() {

  const [text, setText] = useState('');

  function handleClick(e: SyntheticEvent) {

    const target = e.target as HTMLElement;
    
    if (target.innerText && target.innerText.includes('Qui est tu ?')) {
      return;
    } else {
      moveLeftCharacter();
    }
  }

  useEffect(() => {

    const originalText = `Bonjour, que souhaitez vous faire ?`;

    let counter = 0;
    const interval = setInterval(() => {
      setText(originalText.substring(0, counter));
      counter++;

      if (counter > originalText.length) {
        clearInterval(interval);
      }
    }, 50); // Vitesse de frappe en millisecondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message">
      <p className="message-content">
        {text}
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