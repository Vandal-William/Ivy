import { Link } from 'react-router-dom';
import './styles.scss';

interface Collection {
  id: number,
  name: string,
  description: string,
  tag: string,
  userId: number,
 
}

interface CollectionProps {
    data: Collection[]
}

function Collections({data}: CollectionProps) {

  const storageUserId = sessionStorage.getItem('userId'); 

  const userCollection = data.filter(collections => collections.userId.toString() === storageUserId);

  return (
  
    <div className="base-container">
      <Link className='cancel-link' to='/'><span className='close'>X</span></Link>
      <h3 className='title'>Collections</h3>
      <form className='form'>
        <input style={{width:"78%"}}  className='form-input' type="search" name="search" placeholder='Rechercher une collection'/>
        <button  className='form-submit'>Rechercher</button>
      </form>

     
      <div className="collection-actions">
          <Link className='collection-actions-add-link' to='/collections/add-collection'><span className='collection-actions-add'>+ ajouter une collection</span></Link> 
      </div>
      <div className="collection">
        {userCollection.map((collection) => (
            <Link className='collection-link' to={`/collections/${collection.id}`} key={collection.id}>
              <div className="collection-item">
                <div>
                  <h4 className="collection-title">{collection.name}</h4>
                  <span style={
                    collection.tag === 'App' ? {background:'pink', color:"#000"} : {} ||
                    collection.tag === 'Tech' ? {background:'green', color:"#000"} : {}
                  } className="collection-tag">{collection.tag}</span>
                  
                </div>
                <p className="collection-description">{collection.description}</p>
              </div>
            </Link>
         
        ))}
      </div>

    </div>
  );
}

export default Collections;