import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function TechnologyWatch() {

  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3002/fetch-rss');
        const xmlData = response.data;

        // Analyse du XML manuellement pour extraire les données
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        const items = xmlDoc.querySelectorAll('item');
        const parsedArticles = Array.from(items).map((item: Element) => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
        }));

        setArticles(parsedArticles);
      } catch (error) {
        console.error('Erreur lors de la récupération du flux RSS :', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="base-container">
        <Link className='cancel-link' to='/'><span className='close'>X</span></Link>
        <h1 className='title'>Liste des Articles</h1>
      <div className="collection" style={{padding: "10px"}} >
      
        {articles.map((article, index) => (
          <div className="collection-item" key={index}>
            <span className="collection-tag" style={{padding: "10px"}} >Javascript</span>
            <h4 className="collection-title" style={{padding: "10px"}} >{article.title}</h4>
            <a href={article.link} style={{padding: "10px"}} >Voir plus</a>
          </div>
        ))}
       
      </div>
    </div>
  );
}

export default TechnologyWatch;

