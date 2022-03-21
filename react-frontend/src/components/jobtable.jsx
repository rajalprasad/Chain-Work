import './jobtable.css';
import { getFirestore, collection, onSnapshot,query, where       
} from 'firebase/firestore';
import { ethers, providers } from 'ethers';
import React, { useState, useEffect } from 'react';
import chainworkJSON from '../utils/ChainWork.json';

const chainworkAddress = "0xAd3094FEad350EACa7F8B925b28aa27C7518be5C";

const { ethereum } = window;
    let provider;
    
    if(ethereum) {
        ethereum.request({ method: 'eth_requestAccounts'});
        provider = new ethers.providers.Web3Provider(ethereum);
    } else {
        console.log("MetaMask is not installed.");
    }

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
                            <td>{data.id}</td>
                            <td>{data.Job_Description}</td>
                            <td>{data.Pay_in_Eth}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <button>test</button>
            {}
        </>
    )
}