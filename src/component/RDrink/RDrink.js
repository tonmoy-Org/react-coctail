import React from 'react';
import './RDrink.css'
const RDrink = (props) => {
    return (
        <div className=''>
            <h3 className='p-3'>{props.strDrink}</h3>
            <img className='r-img m-2' src={props.strDrinkThumb} alt="" />
            <hr />
            <div className='mt-3 m-3 fw-bolder d-flex align-items-center justify-content-evenly'>
                <ul>
                    <li className='text-start'>{props.strAlcoholic}</li>
                    <li className='text-start'>{props.strCategory}</li>
                    <li className='text-start'>{props.strGlass}</li>
                    <li className='text-start'>{props.dateModified}</li>
                    <li className="text-start">{props.strIngredient1}</li>
                    <li className="text-start">{props.strIngredient2}</li>
                    <li className="text-start">{props.strIngredient3}</li>
                </ul>
                 <p className='w-25'>{props.strInstructions}</p>
            </div>
            <hr />
        </div>
        
    );
};

export default RDrink;