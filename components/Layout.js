import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Burger from './Burger'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Burger />
      <div className={styles.header}> <h1>NIKOLAS - PETROS ANDROBIK</h1> </div>
      <main className={styles.items_container}>
        <div className={styles.navbar_container}>
          <Navbar />
        </div>
        <div className={styles.carousel_container}>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        <h5>|| © all rights reserved </h5>
      </footer>
    </div>
  )
};

export default Layout;
