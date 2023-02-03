

import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
import {fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts} from '../../assets/fake-data/products'
import './menu-pack.css'

const MenuPack = () => {

    const [filter, setFilter] = useState('RICE-MENU')
    const [products, setProducts] = useState(fastFoodProducts)

    useEffect(()=>{
        if(filter==='RICE_MENU'){
            setProducts(riceMenuProducts)
        }
        if(filter==='FAST_FOOD'){
            setProducts(fastFoodProducts)
        }
        if(filter==='PIZZA'){
            setProducts(pizzaProducts)
        }
        if(filter==='DESSERTS'){
            setProducts(dessertProducts)
        }
        if(filter==='COFFEE'){
            setProducts(coffeeProducts)
        }
    },[filter])

  return <section>
    <Container>
        <Row>
            <Col lg='12' className='text-center mb-5'><h3 className='menu__title'>Our Menu Pack</h3></Col>
            <Col lg='12' className='text-center mb-5'> 
            <button className={`filter-btn ${filter === 'FAST_FOOD' ? 'active__btn' : ''}`} onClick={()=> setFilter('FAST_FOOD')}>Fast Food</button>
            <button className={`filter-btn ${filter === 'RICE_MENU' ? 'active__btn' : ''}`} onClick={()=> setFilter('RICE_MENU')}>Rice Menu</button>
            <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={()=> setFilter('PIZZA')}>Pizza</button>
            <button className={`filter-btn ${filter === 'DESSERTS' ? 'active__btn' : ''}`} onClick={()=> setFilter('DESSERTS')}>Desserts</button>
            <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={()=> setFilter('COFFEE')}>Coffee</button>
            </Col>

            {
                products.map((item)=>(
                    <Col lg='3' md='4' sm='6' sx='6'  key={item.id} className='mb-4'> <ProductCard item={item}/> </Col>
                    
                ))
            }
        </Row>
    </Container>
  </section>
}

export default MenuPack
