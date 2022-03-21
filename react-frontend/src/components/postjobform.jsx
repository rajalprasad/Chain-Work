import "./postjobform.css";
import { ethers } from 'ethers';
import React from 'react';
import chainworkJSON from '../utils/ChainWork.json';
import { addJobToDB } from '../utils/firebase';

const chainworkAddress = "0xAd3094FEad350EACa7F8B925b28aa27C7518be5C";

export default function PostJobForm() {

    const { ethereum } = window;
    let provider;
    
    if(ethereum) {
        ethereum.request({ method: 'eth_requestAccounts'});
        provider = new ethers.providers.Web3Provider(ethereum);
    } else {
        console.log("MetaMask is not installed.");
    }
    
    async function postJob() {

        const jobDescription = document.getElementById("jobd").value;
        const pay = document.getElementById("pay").value;

        // Add to db and get id of entry
        const id = await addJobToDB(jobDescription, pay);

        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(chainworkAddress, chainworkJSON.abi, signer);
        await contractInstance.createWork(id, jobDescription, pay);

        document.getElementById('addjob').reset();
    }

    return (
        <>
            <form id='addjob'>
                <label>Job Description</label>
                <input className="jdinput" type="text" name="jobd" id="jobd"></input>
                <label>Pay in ETH</label>
                <input type="number" name="pay" id="pay"></input>
            </form>
            <button onClick={() => postJob()}>Post</button>
        </>
    )
}