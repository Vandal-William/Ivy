import { Link } from 'react-router-dom';

interface CollectionProps {
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Collections({setIsOpenMenu}: CollectionProps) {

    const handleClick = () => {
        setIsOpenMenu(true)
    }

  return (
    <div className="base-container">
      <Link onClick={handleClick} className='cancel-link' to='/'><span className='close'>X</span></Link>
      <h3 className='title'>Collections</h3>
    </div>
  );
}

export default Collections;