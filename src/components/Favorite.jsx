import React, { useEffect ,useState } from 'react'
import { fetchArticle } from '../service'
import "../Styles/Favorite.css"


function Favorite() {

  const [article, setarticle] = useState(null);

  useEffect(() => {
    const getArticle = async() =>{
      try{
        const response = await fetchArticle();
        setarticle(response);
      }catch(e){
        console.log(e);
      }
    }

    getArticle();
  }, [])

  const discription = (URL)=>{
    window.open(URL,'_blank');
  }
  

  return (
    <div className='article'>
      {article && article.totalResults !== 0 ?
       article.articles.map((item)=>(
        <div onClick={()=> discription(item.url)} className="articleflexItem" >
              <h4>{item.title}</h4>
              <div>
                <img src={item.urlToImage} alt="" />
              </div>
              <p className='articlep'>{item.description}</p>
              <p className='articlep'>{item.content}</p>
            </div>
       )) : <p>Sorry,Something is wrong...</p>
      }
    </div>
  )
}

export default Favorite