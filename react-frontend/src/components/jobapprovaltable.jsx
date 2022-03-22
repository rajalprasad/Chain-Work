import { 
    getFirestore, collection, onSnapshot,query, where,
    updateDoc, doc       
} from 'firebase/firestore';
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react';
import chainworkJSON from '../utils/ChainWork.json';
const chainworkAddress = "0x82a2607DEecC3496e6963da4619b1e89c941013E";

export function JobApprovalTable() {

    const { ethereum } = window;
    let provider;
    
    if(ethereum) {
        ethereum.request({ method: 'eth_requestAccounts'});
        provider = new ethers.providers.Web3Provider(ethereum);
    } else {
        console.log("MetaMask is not installed.");
    }

    async function approveWork(jobId, workerAddress, payInEth) {
        try {
            const signer = await provider.getSigner();
            ethers.utils.getAddress(workerAddress);
            await signer.sendTransaction({
                to: workerAddress,
                value: ethers.utils.parseEther(payInEth)
            });
            const contractInstance = new ethers.Contract(chainworkAddress, chainworkJSON.abi, signer);
            await contractInstance.approveWork(jobId, workerAddress);

            let docRef = doc(getFirestore(), 'Jobs', jobId)
            updateDoc(docRef, {
                completed: true
            })
        } catch (error) {
            console.log(error);
        }
    }

    const [jobTableData, setJobTableData] = useState([]);

    function getData() {
        const db = getFirestore()
        const colRef = collection(db, 'Jobs')
        const q = query(colRef, where("Work_Uploaded", "==", true))
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
            <h1>Completed Jobs</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Job ID</th>
                        <th>Job Description</th>
                        <th>Pay in ETH</th>
                        <th>Link to File</th>
                        <th>Aprrove Work</th>
                    </tr>
                    {jobTableData.map((data) => {
                        return (
                            <tr key={data.id}>
                            <td> {data.id}</td>
                            <td>{data.Job_Description}</td>
                            <td>{data.Pay_in_Eth}</td>
                            <td>
                                <a rel="noreferrer" href={data.File_URL} target="_blank">Link</a>
                            </td>
                            <td>
                                <button onClick={() => approveWork(
                                    data.id, data.Worker_Address, data.Pay_in_Eth
                                )}>Approve and Pay</button>
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button>test</button>
       </> 
    )
}