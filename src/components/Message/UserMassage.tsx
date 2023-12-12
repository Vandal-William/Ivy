import { useEffect, useState } from 'react';
import './styles.scss'

function UserMassage() {

  const [text, setText] = useState('');

  useEffect(() => {

    const originalText = `Bonjour, ${sessionStorage.getItem('username') ? sessionStorage.getItem('username') : ""} clickez sur moi pour afficher le menu`;

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
    </div>
  );
}

export default UserMassage;