import './styles.scss'
import { Link } from 'react-router-dom';

function Connexion() {

  return (
    <div className="connexion">
      <Link className='cancel-link' to='/Ivy'><span className='close'>X</span></Link>
      <h1 className='connexion-title'>Connexion</h1>

    </div>
  );
}

export default Connexion;
