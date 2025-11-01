'use client'
import React from 'react'
import Styles from './filter.module.css'

const filtersList = [
  { id: 1, displayText: 'RECOMMENDED', queryParam: 'recommended' },
  { id: 2, displayText: 'NEWEST FIRST', queryParam: 'newest' },
  { id: 3, displayText: 'POPULAR', queryParam: 'popular' },
  { id: 4, displayText: 'PRICE: HIGH TO LOW', queryParam: 'price-desc' },
  { id: 5, displayText: 'PRICE: LOW TO HIGH', queryParam: 'price-asc' },
]

const Filter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value)
  }

  return (
    <div className={Styles.filterContainer}>
      <h2 className={Styles.title}>FILTER</h2>
      <select onChange={handleChange} defaultValue="" className={Styles.select}>
        {filtersList.map((filter) => (
          <option key={filter.id} value={filter.queryParam}>
            {filter.displayText}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
