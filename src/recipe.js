import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ title, image, calories, ingredients }) => {
    return (
        <div className={style.result}>
            <img className={style.image} src={image} alt=""></img>
            <h1 className="title" >Name: {title}</h1>
            <h1 className="calories" >Calories: {calories}</h1>
            <h1>Ingredients are listed Below</h1>
            <ul className="ingridents" >
                {ingredients.map((ingri, index) => {
                    return (
                        <li key={index} className={style.ingrident}>{index} : {ingri.text}</li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Recipe