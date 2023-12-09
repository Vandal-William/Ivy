import './styles.scss'
import { SyntheticEvent} from 'react';

interface ResettingProps {

    setConnectionAttempt: React.Dispatch<React.SetStateAction<number>>;
    setIsButtonDisabled : React.Dispatch<React.SetStateAction<boolean>>; 
  }

function ResettingMessage({setConnectionAttempt, setIsButtonDisabled}: ResettingProps) {

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }

    const handleClick = (e: SyntheticEvent) => {

        const response = e.target as HTMLFormElement;
        if (response.value === "true"){
            setConnectionAttempt(0);
            setIsButtonDisabled(false);
        }else{
            setConnectionAttempt(0);
            setIsButtonDisabled(false);
        }
    }


return (
    <div className="Resetting">
    
    <p className="Resetting-messages">

        Vous avez tenté de vous connecter 3 fois sans succès.
    <br />

        Voulez-vous réinitialiser votre mot de passe ?
    </p>
    <form className='form' onSubmit={handleSubmit}>
        <button className='form-submit' onClick={handleClick} value="true">Oui</button>
        <button className='form-submit' onClick={handleClick} value="false">Nom merci</button>
    </form>
    </div>
);
}
  
export default ResettingMessage;