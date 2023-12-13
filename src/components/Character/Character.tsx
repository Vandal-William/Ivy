import './styles.scss';
import { eyesBlinking } from '../../selectors/characterAnimations/eyesBlinking';
import { useEffect } from 'react';
import Personnage from '../../assets/images/Personnage.svg';

interface CharacterProps {
    isOpenMenu: boolean;
    isClickable: boolean;
    setIsOpenMenu:React.Dispatch<React.SetStateAction<boolean>>;
  
}

function Character ({isClickable, setIsOpenMenu, isOpenMenu}: CharacterProps) {

    useEffect(() => {
        eyesBlinking();

    }, [])

    const handleClick = () => {
       if(isClickable) {
        setIsOpenMenu(!isOpenMenu)
       }
    }

    return (
        <>
            <div className="character" >
                <img  style={isClickable ? {cursor:'pointer'} : {}} onClick={handleClick} src={Personnage} alt="image de l'assistant" />
            </div>
         
        </>
    );
  }
  
  export default Character;