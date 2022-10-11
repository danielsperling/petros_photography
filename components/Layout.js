import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Carousel from './Carousel'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className='header'> <h1>Nikolas - Petros Androbik</h1> </div>
      <main className={styles.items_container}>
        <div className={styles.navbar_container}>
          <Navbar />
          {children}
        </div>
        <div className={styles.carousel_container}>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
      </main>
    </div>
  )
};

export default Layout;
