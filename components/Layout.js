import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Carousel from './Carousel'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className='header'> <h1>Nikolas - Petros Androbik</h1> </div>
      <main className={styles.main}>
        <Navbar />
        {children}
        <Carousel />
      </main>
    </div>
  )
};

export default Layout;
