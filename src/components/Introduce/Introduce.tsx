import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Introduce() {
    const [text, setText] = useState('');

    useEffect(() => {

      const originalText = ` \n\nMoi ? Je suis Ivy, l'assistante des développeurs web. Si vous vous inscrivez sur ce site, je deviendrai votre assistante personnelle.\n\nJe vous aiderai, par exemple, à déboguer votre code, à vous tenir informé des nouveautés concernant vos langages de programmation, ou encore à vous permettre de centraliser de la documentation sur certaines technologies web, et bien plus encore.\n\nMon objectif est de vous assister au mieux dans votre parcours de développement web.`;
  
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
      <div className="message expand">
        <Link className='cancel-link' to='/'><span className='close'>Retour</span></Link>
        <p className="message-content" >
          {text}
        </p>
      </div>
    );
  }
  
  export default Introduce;