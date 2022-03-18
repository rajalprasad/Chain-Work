import './homepage.css';
import { Container, Nav, Navbar, Table } from 'react-bootstrap';

export function HomePage() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Chain-Work</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='/Jobs'>Jobs</Nav.Link>
                    <Nav.Link href='/Admin'>Admin</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
        <Table striped borded hover variant='dark'>
            <thead>
                <tr>
                    <th>Job ID</th>
                    <th>Description</th>
                    <th>Pay</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Build UI</td>
                    <td>1 Eth</td>
                </tr>
            </tbody>
        </Table>
        
        </>
    )
}