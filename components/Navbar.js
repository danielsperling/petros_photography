import navBar from '../styles/Navbar.module.css'
import Link from 'next/link'


const Navbar = (props) => {
  return (
    <div className={navBar.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <br></br>

        <li>
          <Link href="/albums/vice">
            <a>German Bodybuilding - Vice</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/medusa">
            <a>Medusa - HUnger Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/dress_to_kill">
            <a>Dress to Kill - OffTheRails Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/numero">
            <a>Eagle Noir - Numero Berlin</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/contributor">
            <a>The Edge - Contributor Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/dscene">
            <a>I Dance Alone - Dscene Magazin</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/lookboock">
            <a>YNRY - Lookboock</a>
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
          <Link href="/lookboock">
            <a>contact/order</a>
          </Link>
        </li>
        <li>
          <Link href="/lookboock">
            <a>IG @adrobik</a>
          </Link>
        </li>

      </ul>
    </div>


  )
};

export default Navbar;



{/* <div className={navBar.menu}>

<h2>Home</h2>
<br />
<h2>German Bodybuilding - Vice</h2>
<h2>Medusa - HUnger Magazine</h2>
<h2>Dress to Kill - OffTheRails Magazine</h2>
<h2>Eagle Noir - Numero Berlin</h2>
<h2>The Edge - Contributor Magazine</h2>
<h2>I Dance Alone - Dscene Magazine</h2>
<h2>YNRY - Lookboock </h2>

<br />

<h2>contact/order</h2>
<h2> IG @adrobik</h2>

</div> */}
