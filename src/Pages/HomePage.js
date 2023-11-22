import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";
import {logDOM} from "@testing-library/react";


const HomePage = () => {

    const [meals,setMeals] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then (({data})=> {
                setMeals(data.meals)
            })
    }, []);

    console.log(meals, 'meals')

    return (
        <>
            <Header/>
            <div className={'container'}>
                <h1>Home page</h1>
                <MealList meals={meals} />
            </div>
        </>
    );
};
export default HomePage;