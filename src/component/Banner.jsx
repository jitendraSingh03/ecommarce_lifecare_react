import React from 'react';
import { useHistory } from 'react-router-dom';
import '../component/Banner.css';
import {Button} from '@material-ui/core';
import { auth,provider } from './firebase';
import { useStateValue } from '../component/StateProvider';

const Banner =()=>{
    const [{user},dispatch]=useStateValue()
    const history = useHistory();
    const searchproduct = (search) => {
        
        history.push('search/:'+search)
    }

    const login=()=>{
        auth.signInWithPopup(provider)
        .then(result =>{
            console.log('login',result)
            dispatch({
                type:'SET_USER',
                user:result.user,
            })
        })
        .catch((err) =>{
            alert(err.message);
        })
    }
    return(
        <>
        <div className="banner">
            <div className="banner__info">
                <h1>Check your special offer</h1>
                <h5>We 100% value of your money and satisfaction.</h5>
                     <Button variant='outlined' onClick={login}>Explone Now</Button>
            </div>
        </div>
        <div className="container-fluid mt-4 mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='product__search'>
                            {/* <Button variant='outlined' onClick={('') => { searchproduct('all') }}>All</Button> */}
                            <Button variant='outlined' onClick={() => { searchproduct('metabolism') }}>Fat Metabolism</Button>
                            <Button variant='outlined' onClick={() => { searchproduct('skincare') }}>Skin care</Button>
                            {/* <Button variant='outlined' onClick={('') => { searchproduct('oil') }}>Oils</Button> */}
                            <Button variant='outlined' onClick={() => { searchproduct('powerBooster') }}>Immunity Enhancer</Button>
                            <Button variant='outlined' onClick={() => { searchproduct('products') }}>Male Health</Button>
                            {/* <Button variant='outlined' onClick={('') => { searchproduct('femalehealth') }}>female Health</Button> */}
                            <Button variant='outlined' onClick={() => { searchproduct('digestion') }}>Digestion</Button>
                            <Button variant='outlined' onClick={() => { searchproduct('weightloss') }}>Weight loss</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;