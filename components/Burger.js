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