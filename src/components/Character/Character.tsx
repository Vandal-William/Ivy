import './styles.scss';
import Personnage from '../../assets/images/Personnage.svg';


function Character () {

    return (
        <>
            <div className="character" >
                <img src={Personnage} alt="image de l'assistant" />
            </div>
         
        </>
    );
  }
  
  export default Character;