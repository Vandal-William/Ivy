import signOut from '../../assets/images/signout.svg';
import collection from '../../assets/images/collection.svg'
import './styles.scss';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({setIsOpenMenu}: MenuProps) {

    const navigate = useNavigate()

    const handleDisconnect = () => {
        sessionStorage.setItem('username', '');
        sessionStorage.setItem('IsConnected', "false");
        setIsOpenMenu(false)
    
    }

    const handleCollections = () => {
        navigate('/collections');
    }
  return (
    <div className="menu">
     <ul className="menu-ul">
        <li className="menu-li" aria-label='collections' title='Mes Collections' onClick={handleCollections}><img src={collection} alt="icon collection" /></li>
        <li className="menu-li" aria-label='Se déconnecter' title='Se déconnecter' onClick={handleDisconnect}><img src={signOut} alt="icon déconnection" /></li>
     </ul>
    </div>
  );
}

export default Menu;