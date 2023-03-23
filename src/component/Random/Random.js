import React, { useEffect, useState } from 'react';
import RDrink from '../RDrink/RDrink';


const Random = () => {
    const [rDrinks, setRDrinks] = useState([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => setRDrinks(data.drinks))
    }, [])
    return (

        <div className='main-c mt-2 container'>
            {
                console.log(rDrinks)
            }
            {
                rDrinks.map(drink =>
                    <RDrink
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
                    ></RDrink>)
            }
           
        </div>
    );
};

export default Random;
