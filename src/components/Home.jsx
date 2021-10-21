import React from 'react'
import { Intro } from './Layout/Intro';
import Products from './products/products'
import dataList from './../data/db';

const Home = () => {

    const { prodcts } = dataList

    return (
        <>
            <Intro />
            <Products products={prodcts} />
        </>
    )
}

export default Home
