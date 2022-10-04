import styles from '../styles/Layout.module.css'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main>
                <Header />
                {children}
            </main>
        </div>
    )
};

export default Layout;
