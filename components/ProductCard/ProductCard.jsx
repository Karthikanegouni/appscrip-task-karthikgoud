import React from 'react'
import styles from './productcard.module.css'
import { Heart } from 'lucide-react'

const ProductCard = ({ product }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      <div className={styles.infoRow}>
        <div className={styles.details}>
          <h3 className={styles.title}>
            {product.title.length > 25
              ? product.title.slice(0, 25) + '...'
              : product.title}
          </h3>
          <p className={styles.signInText}>
            <a href="#">Sign in</a> or Create an account to see pricing
          </p>
        </div>

        <button className={styles.wishlistBtn}>
          <Heart size={20} />
        </button>
      </div>
    </li>
  )
}

export default ProductCard
