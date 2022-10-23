import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navBar from '../styles/Navbar.module.css'
import Link from 'next/link'

function OffcanvasExample() {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3" >
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <div className={navBar.menu}>
      <ul data-toggle="collapse" data-target="">
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

        <li>
          <Link href="/albums/matilda">
            <a>Matilda Little Jewellery</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/lookbook">
            <a>YNRY Lookbook</a>
          </Link>
        </li>
        <li>
          <Link href="/albums/aperitif">
            <a>Volée Apéritif Naturell</a>
          </Link>
        </li>
         <li>
          <Link href="/albums/wrangler">
            <a>Wrangler x Soulkissesarts</a>
          </Link>
        </li> 
        <br></br>
        <li>
          <Link href="/">
            <a>GoSees (comming soon)</a>
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
  
            <a href="mailto:niko.androbik@gmail.com" rel="noopener noreferrer"  target="_blank">contact</a>
      
        </li>
        <li>
          <Link href="https://www.instagram.com/androbik/" rel="noopener noreferrer">
            <a target="_blank">instagram</a>
          </Link>
        </li>
        <br></br>
        <li>
          <Link href="/about" >
            <a>about</a>
          </Link>
        </li>
      </ul>
    </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
            

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;