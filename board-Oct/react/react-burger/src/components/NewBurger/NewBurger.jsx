import React from 'react'
import { BurgerComponents } from '../../data'
import './NewBurger.css'
import Mayo from '../Mayo/Mayo'
import Lettuce from '../Lettuce/Lettuce'
import Onions from '../Onions/Onions'
import BunLower from '../BunLower/BunLower'
import BunUpper from '../BunUpper/BunUpper'

function NewBurger({ ingredients }) {
    const FinalIngredients = ingredients.map((ingredient) => {
        switch (ingredient) {
            case BurgerComponents.MAYO:
                return <Mayo />
            case BurgerComponents.LETTUCE:
                return <Lettuce />
            case BurgerComponents.ONIONS:
                return <Onions />
        }

    })
    return (
        <div style={{ padding: '15% 30%' }} >
            <BunUpper />
            {FinalIngredients}
            <BunLower />
        </div>
    )
}

export default NewBurger