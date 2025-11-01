import React from 'react'
import Styles from './shop.module.css'
import ProductList from '@/components/ProductList/ProductList'

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  } catch (error) {
    console.log(error.message)
  }
}

const Shop = async () => {
  const products = await getProducts()
  return (
    <div>
      <div className={Styles.descriptionContainer}>
        <h2 className={Styles.title}>DISCOVER OUR PRODUCTS</h2>
        <p className={Styles.description}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <ProductList initialProducts={products} />
    </div>
  )
}

export default Shop
