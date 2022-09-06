import React from 'react';
import ProductCard from './ProductCard';
import './Main.css'
import GetDataOfUser from './GetDataOfUser';

const ProductInfo = [
  {
    name: "Product 1",
    price: "$100",
    img: '../../images/1.png',
    desp: "A simple product to buy"
  },
  {
    name: "Product 2",
    price: "$100",
    img: ".../images/1.png",
    desp: "A simple product to buy"
  },
  {
    name: "Product 3",
    price: "$100",
    img: ".../images/1.png",
    desp: "A simple product to buy"
  }
]

const Main = () => {
  return (
    <div>
      <div className='product-title'><h2>Products</h2></div>
      <div className='Products-section'>
        {ProductInfo.map(e => (
          <ProductCard path={e.img} title={e.name} price={e.price} description={e.desp} />
        ))}
      </div>
      <div>
        <GetDataOfUser/>
      </div>
    </div>
  )
}

export default Main