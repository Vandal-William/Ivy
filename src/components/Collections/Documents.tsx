import { Link } from 'react-router-dom';
import './styles.scss';
import { useParams } from 'react-router-dom';

interface Document {
  id: number,
  name:string,
  description: string,
  url: string,
  content: string,
  tag:string,
  userId: number,
  collectionsId: number
 
}

interface Collection {
  id: number,
  name: string,
  description: string,
  tag: string,
  userId: number,
 
}

type RouteParams = | {
  id: string ;
} | Record<string, string | undefined> 

interface CollectionProps {
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setisClickable: React.Dispatch<React.SetStateAction<boolean>>;
    data: Document[]
    collection: Collection[]
}

function Documents({setIsOpenMenu, data, setisClickable, collection}: CollectionProps) {

  const { id } = useParams<RouteParams>();

  const userCollection : Collection | undefined = collection.find(col => col.id.toString() === id);
  const userDocument = data.filter(document => document.collectionsId.toString() === id);
  console.log(userDocument)
  console.log(userCollection)

    const handleClick = () => {
        setIsOpenMenu(true);
        setisClickable(true);
    }

  return (
  
    <div className="base-container">
      <div className='flex'>
        <Link className='return' to='/collections'><span> Collections </span></Link>
        <Link onClick={handleClick} className='cancel-link' to='/'><span className='close'>X</span></Link>
      </div>
      <h3 className='title'>{userCollection ? userCollection.name : "Document"}</h3>
      <form className='form'>
        <input style={{width:"78%"}}  className='form-input' type="search" name="search" placeholder='Rechercher une collection'/>
        <button  className='form-submit'>Rechercher</button>
      </form>

     
      <div className="collection-actions">
          <Link className='collection-actions-add-link' to={`/collections/${userCollection ? userCollection.id : "error"}/add-document`}><span className='collection-actions-add'>+ Ajouter un document</span></Link>
          <Link className='collection-actions-add-link' to={`/collections/${userCollection ? userCollection.id : "error"}/add-document`}><span className='collection-actions-add'>+ Modifier la collection</span></Link> 
          <Link className='collection-actions-add-link' to={`/collections/${userCollection ? userCollection.id : "error"}/add-document`}><span className='collection-actions-add'>+ Supprimer la collection</span></Link> 
      </div>
      <div className="collection">
        {userDocument.map((document) => (
            <Link className='collection-link' to={`/document/${document.id}`} key={document.id}>
              <div className="collection-item">
                <div>
                  <h4 className="collection-title">{document.name}</h4>
                  <span style={
                    document.tag === 'App' ? {background:'pink', color:"#000"} : {} ||
                    document.tag === 'Tech' ? {background:'green', color:"#000"} : {}
                  } className="collection-tag">{document.tag}</span>
                  
                </div>
                <p className="collection-description">{document.description}</p>
              </div>
            </Link>
         
        ))}
      </div>

    </div>
  );
}

export default Documents;