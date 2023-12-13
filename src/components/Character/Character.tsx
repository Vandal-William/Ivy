import './styles.scss';
import { eyesBlinking } from '../../selectors/characterAnimations/eyesBlinking';
import { useEffect } from 'react';
import Personnage from '../../assets/images/Personnage.svg';


function Character () {

    useEffect(() => {
        eyesBlinking();

    }, [])



    return (
        <>
            <div className="character" >
                <img src={Personnage} alt="image de l'assistant" />
            </div>
         
        </>
    );
  }
  
  export default Character;