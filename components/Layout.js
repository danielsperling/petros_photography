import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className='header'> <h1>Nikolas - Petros Androbik</h1> </div>
      <main className={styles.items_container}>
        <div className={styles.navbar_container}>
          <Navbar />
        </div>
        <div className={styles.carousel_container} key={picture.id}>
          <div className={styles.carousel} key={picture.id}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
};

export default Layout;
