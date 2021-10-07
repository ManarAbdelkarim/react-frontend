
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,

} from "react-router-dom";

function Header({headerStyle}) {
    return (

<Router>
                <div className="row">

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#" className="offset-1">Bootstrap</Navbar.Brand>
                        <Navbar.Toggle className="mx-5" aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="col-md-3 offset-md-7">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '132px' }}
                                navbarScroll
                            >
                                <Nav.Link className="active" href="https://www.stsarabia.com/">Home</Nav.Link>
                                <Nav.Link href="https://www.stsarabia.com/en/about-us/story/">About</Nav.Link>
                                <Nav.Link href="https://www.stsarabia.com/en/contact-us/">Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Router>
     
    )
}


export default Header
