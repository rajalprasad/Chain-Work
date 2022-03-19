import { Table } from 'react-bootstrap';

export function JobTable() {
    return (
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
    )
}