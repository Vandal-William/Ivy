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
    data: Document[],
    collection: Collection[]
}

function OneDocument({data, collection}: CollectionProps) {

    const { id } = useParams<RouteParams>();

    const userDocument: Document | undefined = data.find(document => document.id.toString() === id);
    const userCollection = collection.find(col => col.id === userDocument.collectionsId) as Collection | undefined;


  return (
  
    <div className="base-container">
      <div className='flex'>
        <Link className='return' to={`/collections/${userCollection ? userCollection.id : "error"}`}><span> {userCollection ? userCollection.name : ""} </span></Link>
        <Link className='cancel-link' to='/'><span className='close'>X</span></Link>
      </div>
      <h3 className='title'>{userDocument ? userDocument.name : "Document"}</h3>

     
      <div className="collection-actions">
          <Link className='collection-actions-add-link' to={`/collections/${userDocument ? userDocument.id : "error"}/add-document`}><span className='collection-actions-add'>+ Modifier le document</span></Link> 
          <Link className='collection-actions-add-link' to={`/collections/${userDocument ? userDocument.id : "error"}/add-document`}><span className='collection-actions-add'>+ Supprimer le document</span></Link> 
      </div>
      <div className="collection">
            <p>{userDocument ? userDocument.content : ""}</p>
      </div>

    </div>
  );
}

export default OneDocument;