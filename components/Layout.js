import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Burger from './Burger'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Burger />
      <div className={styles.header}> <h1>Nikolas - Petros Androbik</h1> </div>
      <main className={styles.items_container}>
        <div className={styles.navbar_container}>
          <Navbar />
        </div>
        <div className={styles.carousel_container}>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        <h5>NIKOLAS-PETROS PHOTOGRAPHY | all photos © nikolas-petros androbik</h5>
      </footer>
    </div>
  )
};

export default Layout;
