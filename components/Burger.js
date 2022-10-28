import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navBar from '../styles/Navbar.module.css';
import Nav from 'react-bootstrap/Nav';


 function OffcanvasExample() {
   return (
     <>
       {[false, ].map((expand) => (
         <Navbar collapseOnSelect key={expand} expand={expand} className="mb-3">
           <Container fluid>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Navbar.Offcanvas
             id={`offcanvasNavbar-expand-${expand}`}
             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
             placement="end"
             >
            <Offcanvas.Header closeButton>
                
    <Nav className="me-auto">
     <div className={navBar.menu}>
       
           <Nav.Link href="/"> Home </Nav.Link>
         
         <br></br>

         
           <Nav.Link href="/albums/vogue">Es ist ok / Mensch - Vogue Germany </Nav.Link>
           <Nav.Link href="/albums/medusa"> Medusa - Hunger TV </Nav.Link>
           <Nav.Link href="/albums/vice"> Bodybuilding Championship Germany - Vice </Nav.Link>
           <Nav.Link href="/albums/vice_strip">Stripperwars Playgirls Mansion - Vice </Nav.Link>
           <Nav.Link href="/albums/dress_to_kill"> Dress href Kill - Off The Rails Magazine </Nav.Link>
           <Nav.Link href="/albums/eagle_noir"> Eagle noir - Numéro Berlin </Nav.Link>
           <Nav.Link href="/albums/pandaland"> Pandaland - Nasty Magazine </Nav.Link>
           <Nav.Link href="/albums/edge"> The edge - Contributor Magazine </Nav.Link>
           <Nav.Link href="/albums/dscene"> I dance alone - Dscene Magazine </Nav.Link>
           <Nav.Link href="/albums/cake"> Sundowner - Cake Magazine </Nav.Link>
         <br></br>
           <Nav.Link href="/albums/matilda"> Matilda Little Jewellery </Nav.Link>
           <Nav.Link href="/albums/lookbook"> YNRY Lookbook </Nav.Link>
           <Nav.Link href="/albums/aperitif"> Volée Apéritif Naturell </Nav.Link>
           <Nav.Link href="/albums/wrangler"> Wrangler x Soulkissesarts </Nav.Link>
         <br></br>
           <Nav.Link href="/coming_soon"> GoSees (comming soon) </Nav.Link>
         <br></br>
         <br></br>
         <Nav.Link href="mailto:niko.androbik@gmail.com" rel="noopener noreferrer"  target="_blank">contact </Nav.Link>
         <Nav.Link href="https:www.instagram.com/androbik/"> instagram </Nav.Link>
         <br></br>
        <Nav.Link href="/about" > about </Nav.Link>
         
     </div>
     </Nav>
               </Offcanvas.Header>
               <Offcanvas.Body>
            

               </Offcanvas.Body>
             </Navbar.Offcanvas>
             </Navbar.Collapse>
           </Container>
          
         </Navbar>
       ))}
     </>
   );
 }

 export default OffcanvasExample; 