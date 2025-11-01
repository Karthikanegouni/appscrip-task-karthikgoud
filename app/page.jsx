import { ShoppingBag, Star, ArrowRight } from 'lucide-react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Welcome to <span>AppScrip Shop</span>
            </h1>
            <p>
              Discover amazing products curated just for you. Shop smart, shop
              fast, shop AppScrip.
            </p>
            <Link href="/shop">
              <button className={styles.ctaButton}>
                Start Shopping <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <Star size={40} />
            <h3>Top Rated Products</h3>
            <p>Only the best items with high customer satisfaction.</p>
          </div>
          <div className={styles.feature}>
            <ShoppingBag size={40} />
            <h3>Exclusive Deals</h3>
            <p>Save more with special offers and seasonal discounts.</p>
          </div>
          <div className={styles.feature}>
            <ArrowRight size={40} />
            <h3>Fast Delivery</h3>
            <p>Get your products delivered right to your doorstep.</p>
          </div>
        </section>
      </main>
    </>
  )
}
