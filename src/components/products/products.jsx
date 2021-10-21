import React from 'react'
import ProductItems from './productsItem';
import './Style.scss';

const Products = ({products}) => {


    return ( 
        <div className="products">
            <div className="container">
                <div className="products-title">دوره های آموزشی</div>
                <div className="products-box">
                   {
                       products.map(data => (
                        <ProductItems key={data.id} id={data.id} img={data.img} data={data} title={data.title} price={data.price}/>
                       ))
                   }
                </div>
            </div>
        </div>
     );
}
 
export default Products;