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
            <a>Es ist ok / Mensch - Vogue Germany</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/medusa">
            <a>Medusa - Hunger TV</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/vice">
            <a>Bodybuilding Championship Germany - Vice</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/vice_strip">
            <a>Stripperwars Playgirls Mansion - Vice</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/dress_to_kill">
            <a>Dress to Kill - Off The Rails Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/eagle_noir">
            <a>Eagle noir - Numéro Berlin</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/pandaland">
            <a>Pandaland - Nasty Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/edge">
            <a>The edge - Contributor Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/dscene">
            <a>I dance alone - Dscene Magazine</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/cake">
            <a> Sundowner - Cake Magazine</a>
          </Link>
        </li>

        <br></br>
        <br></br>

        <li>
          <Link href="/albums/matilda">
            <a>Matilda Little jewellery Campaing</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/lookbook">
            <a>YNRY - Lookboock</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/aperitif">
            <a>Volée - Apéritif Naturell</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/albums/wrangler_soulkissesarts">
            <a>Wrangler x Soulkissesarts</a>
          </Link>
        </li> */}
        <br></br>
        <li>
          <Link href="/">
            <a>GoSees (comming soon)</a>
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
  
            <a href="mailto:niko.androbik@gmail.com" rel="noopener noreferrer"  target="_blank">Contact</a>
      
        </li>
        <li>
          <Link href="https://www.instagram.com/androbik/" rel="noopener noreferrer">
            <a target="_blank">IG @adrobik</a>
          </Link>
        </li>
        <li>
          <Link href="/" >
            <a>about</a>
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

</div>  */}
