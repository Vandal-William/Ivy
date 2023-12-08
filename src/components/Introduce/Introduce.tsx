import { Link } from 'react-router-dom';
function Introduce() {

  
    return (
        <div className="message expand">
            <Link className='cancel-link' to='/Ivy/'><span className='close'>Retour</span></Link>
            <p className="message-content">
                Moi ? Je suis Ivy
            </p>
        </div>
    );
  }
  
  export default Introduce;