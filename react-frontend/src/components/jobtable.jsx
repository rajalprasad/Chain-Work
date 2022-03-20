import './jobtable.css';

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

    const [jobTable, setJobTable] = useState([]);

    useEffect(() => {
        const loadTable = async () => {
            const signer = await provider.getSigner();
            const contractInstance = new ethers.Contract(chainworkAddress, chainworkJSON.abi, signer);
            let test = contractInstance.getJobPost(0);
            console.log(contractInstance.getJobPost(9));
            console.log(test);
            console.log("hello");
        }
        
        // const tableData = await contractInstance.getJobPost(jobId);
        loadTable();
    }, []);

    async function getJobs(jobId) {
        
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Job ID</th>
                        <th>Job Description</th>
                        <th>Pay in ETH</th>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => console.log(getJobs(1))}>test</button>
        </>
    )
}