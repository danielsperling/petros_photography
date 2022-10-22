import navBar from '../styles/Navbar.module.css'
import Link from 'next/link'


const Navbar = (props) => {
  return (
    <div className={navBar.menu} >
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <br></br>

        <li>
          <Link href="/albums/vogue">
            <a>ES iST OK/Mensch - Vogue Germany</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/medusa">
            <a>Medusa - HUnger Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/vice">
            <a>German Bodybuilding - Vice</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/dress_to_kill">
            <a>Dress to Kill - OffTheRails Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/vice_strip">
            <a>Stripperwars - Vice</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/lookbook">
            <a>YNRY - Lookboock</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/matilda">
            <a>Matilda Little Jewellery Campaing</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/eagle_noir">
            <a>Eagle Noir - Numero Berlin</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/pandaland">
            <a>Pandaland - Nasty Magazine</a>
          </Link>

        </li>
        <li>
          <Link href="/albums/edge">
            <a>The Edge - Contributor Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/dscene">
            <a>I Dance Alone - Dscene Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/cake">
            <a>Tia M- Cake Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/aperitif">
            <a>Volee - Aperitif Naturel</a>
          </Link>
        </li>

        <br></br>
        <br></br>
        <li>
          <Link href="/">
            <a>contact/order</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/androbik/" rel="noopener noreferrer">
            <a target="_blank">IG @adrobik</a>
          </Link>
        </li>
      </ul>
    </div>


  )
};

export default Navbar;



<div className={navBar.menu}>

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

</div> 
