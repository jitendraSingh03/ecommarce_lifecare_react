import React from 'react';
import Card from './Card'

const Service = () => {

    return (
        <>
            <div className="my-5">
                {/* <h1 className="text-center">Blog</h1> */}
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-2">    
                            
                           <Card title='Health is wealtht' desc='' img_src='https://source.unsplash.com/300x200?health' btnName='Read more' />
                           <Card title='Store Immunity' desc='' img_src='https://source.unsplash.com/300x200?vagetable' btnName='Read more' />
                           <Card title='Covid-19 protection' desc='' img_src='https://source.unsplash.com/300x200?covid' btnName='Read more' />
                           <Card title='Ayurveda' desc='' img_src='https://source.unsplash.com/300x200?fruit' btnName='Read more' />
                           <Card title='Organic product' desc='' img_src='https://source.unsplash.com/300x200?organic' btnName='Read more' />
                           <Card title='other' desc='' img_src='https://source.unsplash.com/300x200?other' btnName='Read more' />
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;