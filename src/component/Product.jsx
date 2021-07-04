import React from 'react';
import '../component/Product.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import {useStateValue} from '../component/StateProvider'

const Product = ({ title, desc, price, star, img,id }) => {
    const [{},dispatch]=useStateValue();
    const addToBasket=()=>{
        // console.log(basket);
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                desc:desc,
                img:img,
                star:star
            }
        })
        
        
    }
     return (
        <>
            <div className="col-md-3 col-12 mx-auto">
                <div class="product">
                    <img src={img} alt={title} />
                    <FavoriteBorderIcon className='Heart__icon' />
                    <div className="product__detail">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <h1>{price}<Button variant='outlined' onClick={addToBasket}><ShoppingCartIcon/></Button></h1>

                    </div>
                    <div className="rating">
                        {Array(Math.floor(star)).fill().map((_,i)=>'⭐')}

                        {Array(5-Math.floor(star)).fill().map((_,i)=>  <StarIcon />)}
                    </div>
                </div>
            </div>



            {/* <div className="product col-2 ">
            <img src={img} alt={title} />
            <FavoriteBorderIcon/>
            <div className="product__detail">
                <h3>{title}</h3>
                <p>{desc}</p>
                <h1>{price}</h1>
                <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            </div>
        </div> */}
        </>
    )
}
export default Product;