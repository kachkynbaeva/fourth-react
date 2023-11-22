import React from 'react';


const MealCard = ({meal}) =>{
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h4>{meal?.strMeal}</h4>
            <p>{meal?.Category}</p>
        </div>
    );
};

export default MealCard;