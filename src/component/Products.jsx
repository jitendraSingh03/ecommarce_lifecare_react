import React, { useState, useEffect } from 'react';
import '../component/Products.css'
import Product from '../component/Product';
import db from '../component/firebase';
const Products = () => {
  
    const [metablism, setmetablism] = useState([]);
    const [oil, setoil] = useState([]);
    const [digestion, setdigestion] = useState([]);
    const [skincare, setskincare] = useState([]);
    const [weightloss, setweightloss] = useState([]);
    const [powerBooster, setProductsDetail] = useState([]);
    useEffect(() => {
             
            db.collection('powerBooster').onSnapshot(
                (snapshot) => setProductsDetail(snapshot.docs.map(doc => doc.data()))
            )
            db.collection('metabolism').onSnapshot(
                (snapshot) => setmetablism(snapshot.docs.map(doc => doc.data()))
            )
            db.collection('skincare').onSnapshot(
                (snapshot) => setskincare(snapshot.docs.map(doc => doc.data()))
            )
            db.collection('oil').onSnapshot(
                (snapshot) => setoil(snapshot.docs.map(doc => doc.data()))
            )
            db.collection('weightloss').onSnapshot(
                (snapshot) => setweightloss(snapshot.docs.map(doc => doc.data()))
            )
            db.collection('digestion').onSnapshot(
                (snapshot) => setdigestion(snapshot.docs.map(doc => doc.data()))
            )
        
    }, [])

    return (
        <div className='products'>

                 <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-2">

                            {powerBooster.map(({ img, title, desc, price, star,id }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} id={id} />
                            ))}

                            {oil.map(({ img, title, desc, price, star,id }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} id={id} />
                            ))}

                            {digestion.map(({ img, title, desc, price, star ,id }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} id={id} />
                            ))}

                            {metablism.map(({ img, title, desc, price, star ,id }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} id={id} />
                            ))}
                            {skincare.map(({ img, title, desc, price, star ,id }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} id={id} />
                            ))}

                            {weightloss.map(({ img, title, desc, price, star,id }) => (
                                <Product img={img} title={title} desc={desc} price={price} star={star} id={id} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;