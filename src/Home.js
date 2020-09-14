import React from 'react';
import Product from './Product'
import './home.css'
const Home = () => {
    return (
        <div className='home container'>
            <img
               className='home__banner'
                src='img/banner.jpg'
                alt='amazon banner' 
            />
            <div className="home__row">
                <Product
                    id={12321341}
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="img/1.jpg"
                />
                <Product
                    id={49538094}
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="img/2.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={4903850}
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="img/3.jpg"
                />
                <Product
                    id={23445930}
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="img/4.jpg"
                />
                <Product
                    id={3254354345}
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="img/5.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={90829332}
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="img/6.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
