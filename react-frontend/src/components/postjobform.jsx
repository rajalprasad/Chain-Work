import { ethers, providers } from 'ethers';
import React, { useState, useEffect } from 'react';
import chainworkJSON from '../utils/ChainWork.json';
import "./postjobform.css"

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
    
    async function postJob(jobDescription, pay) {
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(chainworkAddress, chainworkJSON.abi, signer);
        await contractInstance.createWork(jobDescription, pay);
        document.getElementById("jobd").value = "";
        document.getElementById("pay").value = "";
    }

    return (
        <>
            <form>
                <label>Job Description</label>
                <input className="jdinput" type="text" id="jobd"></input>
                <label>Pay in ETH</label>
                <input type="number" id="pay"></input>
            </form>
            <button onClick={() => 
                postJob(
                    document.getElementById("jobd").value,
                    document.getElementById("pay").value
                )}>Post
            </button>
        </>
    )
}