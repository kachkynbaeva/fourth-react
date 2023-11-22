import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";

import axios from "axios";
import MealList from "../Components/MealList";

const SearchPage = () =>{
    const [meals,setMeals] = useState([]);
    const [value,setValue] =useState('');

    // useEffect(() => {
    //     axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    //         .then (({data})=> {
    //             setValue(data.meals)
    // })
    // },[]);

    const handleSearch = () =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
                .then (({data})=> {
                    console.log(data.meals)
                    setMeals(data.meals)
    })}



    return (
        <div>
            <Header/>
            <div className={'container'}>
            <h1>Search page</h1>
            <input type="text" onChange={event => setValue(event.target.value)}  />
            <button onClick={handleSearch}>click</button>
            <MealList meals={meals} />
        </div>
        </div>
    );
};


export default  SearchPage;
