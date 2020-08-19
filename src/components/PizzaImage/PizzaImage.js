import React from 'react'

import classes from './PizzaImage.css';
import pizzaImage from '../../assets/pizza.jpg';

export default function PizzaImage( props ) {
    return (
        <div className={classes.pizzaImage}>
            <img src={pizzaImage} alt='pizza'/>
        </div>
    )
}
