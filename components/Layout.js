import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Burger from './Burger'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Burger />
      <div className={styles.top}> 
      <div className={styles.header}> <h1>NIKOLAS - PETROS ANDROBIK</h1> </div>
      </div>
      <main className={styles.items_container}>
        <div className={styles.navbar_container}>
          <Navbar />
        </div>
        <div className={styles.carousel_container}>
          {children}
        </div>
      </main>
      <div className={styles.bottom}>
      <footer className={styles.footer}>
        <h5>|| © all rights reserved </h5>
      </footer>
      <footer className={styles.footerright}>
        <h5> &lt;3 </h5>
      </footer>
      
      </div>

    </div>
  )
};

export default Layout;
