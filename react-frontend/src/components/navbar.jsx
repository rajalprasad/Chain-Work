import { Container, Nav, Navbar } from 'react-bootstrap';

export function NavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Chain-Work</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='/Jobs'>Jobs</Nav.Link>
                    <Nav.Link href='/PostJob'>Post Job</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}