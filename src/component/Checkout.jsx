import React from 'react';
import '../component/Checkout.css'
import CartItem from './CartItem';
import { useStateValue } from '../component/StateProvider';
import { Button } from '@material-ui/core';
const Checkout = () => {
    const [{ basket }] = useStateValue();
    let len=0;
    let sum=0;
    while(len<basket.length){
        sum=sum+parseInt(basket[len].price);
        len++;
    }
    return (
        <div className='checkout'>
            <div className="container-fluid mb-5">
                <div className="checkout__amount">
                        <h1>Shopping cart</h1>
                        {basket.length === 0 && <h1>Empty Cart</h1>}
             
                        <div className="shoping_cartInfo">
                            {basket.map((item)=>(
                                <small>{item.title}:{item.price}</small>
                            
                            ))}<br></br>
                            <strong>Totol Amount:<small> Rs.</small> {sum}</strong>
                            <hr />
                            <Button variant='outlined'>Purchase</Button>    
                        </div>
                </div>
                <div className="row cartItem">
                {basket.map((item) => (
                    <CartItem id={item.id} title={item.title} desc={item.desc} price={item.price} star={item.star} img={item.img} />
                ))}
                </div>

            </div>
        </div>
        // /* <div className="col-10 mx-auto">
        //         //         <div className="row gy-2 card">  

        //         //         </div>
        //         //     </div> */
    )
}
export default Checkout;
