import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchCategories } from '../service'
import "../Styles/RecipeList.css"
import { IoFastFoodSharp } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import { fetchData } from '../service'


function RecipeList() {

  const [category, setcategories] = useState();
  const [data, setData] = useState("");
  const [searchTearm, setSearchTearm] = useState("");
  const [query, setquery] = useState("beef");

  const searchrecipe=(searchQuery)=>{
    fetchData(searchQuery).then((response) => {
        setData(response);
        console.log(response);
  });
}

const handleSubmit = e => {
  searchrecipe(searchTearm);
}

const handleKeypress = e => {
  //it triggers by pressing the enter key
if (e.keyCode === 13) {
  handleSubmit();
}
};

const discription = (URL)=>{
  window.open(URL,'_blank');
}

  useEffect(() => {

    const getCategory = async () => {
      try {
        const response = await fetchCategories();
        setcategories(response)
      } catch (e) {
        console.log(e);
        return e;
      }
    };

    getCategory();

  }, []);

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
    })
  }, [query]);
  

  return (
    <div className='recipelist'>
      <div className='search'>
        <input
          onChange={(e) => setSearchTearm(e.target.value)}
          value={searchTearm}
          type='text'
          className='search-box'
          placeholder='Search your recipes'
          onKeyDown={handleKeypress} />
        <button
          className='sreach_button'
          type='submit'
          onClick={handleSubmit}
        ><FcSearch />
        </button>
      </div>
      <div className='parentCategories'>
        <h1>Categories <IoFastFoodSharp /></h1>
        <div className='Categories'>
          <div className='category'>
            {category && category.count !== 0 ?
              category.categories.map((item) => (
                // Check if idCategory is less than 13
                item.idCategory < 13 &&
                <div className='categoryCard' key={item.idCategory}>
                  <div className='image_div'>
                    <img className='image1' src={item.strCategoryThumb} alt=""  onClick={()=> setquery(item.strCategory)}/>
                  </div>
                  <div className='head' onClick={()=> setquery(item.strCategory)}>
                    <p>{item.strCategory}</p>
                  </div>
                </div>
              )) :
              <p>Something is wrong...</p>
            }
          </div>
        </div>
      </div>
      <div className="flexbox">
        {data && data.count !==0 ?
          data.hits.map((item, index) => (
            <div onClick={()=> discription(item.recipe.url)} key={index} className="flexItem" >
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p className='p'>{item.recipe.label}</p>
            </div>
          ))
          :<p className="error">Something went wrong...</p>
        }
      </div>
    </div>
  )
}

export default RecipeList
