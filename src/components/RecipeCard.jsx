import React, { useEffect, useState } from 'react';
import "../Styles/RecipeCard.css";
import { fetchRandom } from '../service';
import { IoFastFoodSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";

function RecipeCard() {
    const [randomRecipe, setRandomRecipe] = useState(null);

    useEffect(() => {
        const getRandomRecipe = async () => {
            try {
                const response = await fetchRandom();
                setRandomRecipe(response);
            } catch (error) {
                console.error('Error fetching random recipe:', error);
            }
        };

        getRandomRecipe();
    },[]);

    const youtube = (URL)=>{
        window.open(URL,'_blank');
    }

    const img_url = randomRecipe?.meals[0].strMealThumb;
    const recipe_name = randomRecipe?.meals[0].strMeal;
    const instructions = randomRecipe?.meals[0].strInstructions;

    return (
        <div className='recipe_card'>
            <div className='recipe'>
                <h4>Something Special For You <IoFastFoodSharp /></h4>
                <img src={img_url} alt=''/>
                <p className='recipe_name' onClick={()=> youtube(randomRecipe?.meals[0].strSource)}>{recipe_name}</p>
            </div>
            <div className='discrip'>
                <p className='dis'><h3>Instructions :- </h3>{instructions}</p>
                <div className='buttons'>
                <button className='tutorial' onClick={()=> youtube(randomRecipe?.meals[0].strYoutube)}>Watch Tutorial <FaYoutube /></button>
                <button className='more' onClick={()=> youtube(randomRecipe?.meals[0].strSource)}>Read More <MdOutlineReadMore /></button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
