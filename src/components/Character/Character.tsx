import './styles.scss';
import { eyesBlinking } from '../../selectors/characterAnimations/eyesBlinking';
import { useEffect } from 'react';

interface CharacterProps {
    viewUserMessage: boolean;
    isConnected: boolean;
    isClickable: boolean;
    setViewUserMessage : React.Dispatch<React.SetStateAction<boolean>>;
}

function Character ({viewUserMessage, setViewUserMessage, isConnected, isClickable}: CharacterProps) {

    useEffect(() => {
        eyesBlinking();

    }, [])

    const handleClick = () => {
       if(isConnected && isClickable) {
        setViewUserMessage(!viewUserMessage);
       }
    }

    return (
        <>
            <div className="character">
            <div className="character-body" style={isClickable ? {cursor:'pointer'} : {}} onClick={handleClick}></div>
                <div className="dress" style={isClickable ? {cursor:'pointer'} : {}} onClick={handleClick}></div>
            <div className="hand" style={isClickable ? {cursor:'pointer'} : {}} onClick={handleClick}></div>
                <div className="head" style={isClickable ? {cursor:'pointer'} : {}} onClick={handleClick}>
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