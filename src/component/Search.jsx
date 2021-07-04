import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import db from './firebase';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Product from './Product';
const Search=()=>{

    const {value}  = useParams();
    const [searchproduct, setsearchproduct] = useState([]);
    useEffect(()=>{
        while(searchproduct.length>0){
            searchproduct.pop();
        }
        db.collection(value.slice(1,value.length)).onSnapshot(
            (snapshot) => setsearchproduct(snapshot.docs.map(doc => doc.data()))
        )
    },[]);
    return(
        <div className='products'>

        <div className="container-fluid mb-5">
                <div className="row">
                    <NavLink to='/' style={{color:'black',textDecoration:'none',display:'flex',margin:'5px'}}>Return<HomeIcon/></NavLink>
                    <div className="col-10 mx-auto">
                        <div className="row gy-2">

                            {searchproduct.map(({ img, title, desc, price, star }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;