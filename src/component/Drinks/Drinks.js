import React, { useEffect, useState } from 'react';
import Drink from '../Drink/Drink';
import './Drinks.css';
const Drinks = (props) => {
    const [drinks, setDrinks] = useState([]);
    useEffect( () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.searchQuery}`)
        .then(res => res.json())
        .then(data => setDrinks(data.drinks))
    },[props.searchQuery])
    return (
        <div>
            <div className='main-c container-lg mt-5 mb-5'>
            {
                drinks.map(drink => 
                <Drink 
                strDrink={drink.strDrink}
                strDrinkThumb={drink.strDrinkThumb}
                strInstructions={drink.strInstructions}
                strAlcoholic={drink.strAlcoholic}
                strCategory={drink.strCategory}
                strGlass={drink.strGlass}
                dateModified={drink.dateModified}
                strIngredient1={drink.strIngredient1}
                strIngredient2={drink.strIngredient2}
                strIngredient3={drink.strIngredient3}
                ></Drink>)
            }
        </div>

        </div>
    );
};

export default Drinks;