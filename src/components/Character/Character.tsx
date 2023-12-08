import './styles.scss';
import { eyesBlinking } from '../../selectors/characterAnimations/eyesBlinking';


function Character () {

    eyesBlinking();

    return (
        <>
            <div className="character">
            <div className="character-body"></div>
                <div className="dress"></div>
            <div className="hand"></div>
                <div className="head">
                    <div className="neck"></div>
                    <div className="ear"></div>
                    <div className="ear"></div>
                    <div className="hair-back"></div>
                    <div className="face">
                        <div className="mouth"></div>
                        <div className="nose"></div>
                        <div className="eye"></div>
                        <div className="eye"></div>
                    </div>
                    <div className="hair-side"></div>
                    <div className="hair-side"></div>
                    <div className="bangs"></div>
                    <div className="mesh"></div>
                    <div className="mesh2"></div> 
                </div>
            </div>
         
        </>
    );
  }
  
  export default Character;