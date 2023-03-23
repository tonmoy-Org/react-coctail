import React from 'react';
import './Drink.css';
const Drink = (props) => {
    return (
        <div className='border border-warning '>
            <h3 className='p-3'>{props.strDrink}</h3>
            <img className='img m-2' src={props.strDrinkThumb} alt="" />
            <hr />
            <div className='mt-3 m-3 fw-bolder d-flex justify-content-between'>
                <ul>
                    <li className='text-start'>{props.strAlcoholic}</li>
                    <li className='text-start'>{props.strCategory}</li>
                    <li className='text-start'>{props.strGlass}</li>
                    <li className='text-start'>{props.dateModified}</li>
                    
                </ul>
                <ul>
                    <li className="text-start">{props.strIngredient1}</li>
                    <li className="text-start">{props.strIngredient2}</li>
                    <li className="text-start">{props.strIngredient3}</li>
                </ul>
            </div>
        </div>
    );
};

export default Drink;