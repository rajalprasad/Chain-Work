import './jobtable.css';
import { getFirestore, collection, onSnapshot,query, where       
} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function JobTable() {

    const [jobTableData, setJobTableData] = useState([]);

    function getData() {
        const db = getFirestore()
        const colRef = collection(db, 'Jobs')
        const q = query(colRef, where("completed", "==", false))
        const jobs = [];
        onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            jobs.push({...doc.data(), id: doc.id});
            });
            setJobTableData(jobs);
        });
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Job ID</th>
                        <th>Job Description</th>
                        <th>Pay in ETH</th>
                    </tr>
                    {jobTableData.map((data) => {
                        return (
                            <tr key={data.id}>
                            <td> 
                                <Link to="/JobSubmission" state={data}>
                                    {data.id}
                                </Link>
                            </td>
                            <td>{data.Job_Description}</td>
                            <td>{data.Pay_in_Eth}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}