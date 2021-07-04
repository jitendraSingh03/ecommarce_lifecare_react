import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { useStateValue } from './StateProvider';

function CartItem({ id, title, desc, price, star, img }) {
    const [{},dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className='Item'>
            <img className="col-md-5 col-6 mt-5 checkout__img mx-auto" src={img} alt="" width='200px' />
            <div className="col-md-6 col-6  checkout__info mx-auto ">
                <h1><strong>Product Name: </strong>{title}</h1>
                <p><strong>Description: </strong>{desc}</p>
                <p><LocalShippingIcon /> Free delivery:We display shipping speeds and charges based on the items in your cart and the delivery address.</p>
                <h3><strong>Rs.</strong>{price}</h3>
                {Array(Math.floor(star)).fill().map((_,i) => ('⭐'))}
                {Array(5 - Math.floor(star)).fill().map((_,i) => <StarIcon />)}


                <Button variant='outlined' onClick={RemoveFromBasket}>Remove</Button>
            </div>
        </div>
        )
            
}

            export default CartItem;
