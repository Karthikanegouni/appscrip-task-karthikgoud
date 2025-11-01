'use client'
import React, { useState, useCallback } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Filter from '../Filter/Filter'
import styles from './productlist.module.css'

const ProductList = ({ initialProducts, hasSidebar = false }) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)

  const handleFilterChange = useCallback(
    (filterType) => {
      let sorted = [...initialProducts]
      switch (filterType) {
        case 'price-asc':
          sorted.sort((a, b) => a.price - b.price)
          break
        case 'price-desc':
          sorted.sort((a, b) => b.price - a.price)
          break
        case 'popular':
          sorted.sort((a, b) => b.rating.rate - a.rating.rate)
          break
        case 'newest':
          sorted.reverse()
          break
        default:
          sorted = initialProducts
      }
      setFilteredProducts(sorted)
    },
    [initialProducts]
  )

  return (
    <section style={{ marginTop: '1rem' }}>
      <Filter onFilterChange={handleFilterChange} />
      <ul
        className={`${styles.grid} ${
          hasSidebar ? styles.withSidebar : styles.noSidebar
        }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default ProductList
