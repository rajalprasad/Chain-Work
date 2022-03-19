import './homepage.css';

// import { ethers } from 'ethers';
// import React, { useState, useEffect } from 'react';
// import chainworkJSON from '../utils/ChainWork.json';
import { NavBar } from '../components/navbar';

// const chainworkAddress = "0x8A1CBd93Cc18273011eF432fDAcfa0659E4D3718";


export function HomePage() {

    // const [jobPosts, setJobPosts] = useState("");
    // useEffect(() => {
    //     getAllJobPosts();
    // }, []);

    // const { ethereum } = window;
    // let provider;

    // if(ethereum) {
    //     ethereum.request({ method: 'eth_requestAccounts'});
    //     provider = new ethers.providers.Web3Provider(ethereum);
    // } else {
    //     console.log("MetaMask is not installed.");
    // }

    

    // async function getAllJobPosts() {
    //     const signer = await provider.getSigner();
    //     const contractInsatance = new ethers.Contract(chainworkAddress, chainworkJSON.abi, signer);
    //     const posts = await contractInsatance.jobPosts.length;
    //     console.log(posts);
    //     setJobPosts(posts);
    //     //console.log(jobPosts);
    //     console.log('hello');
    // }

    return (
        <>
            <NavBar />
            <div class="mt-4 p-5 bg-success text-white rounded">
                <h1>Welcome to Chain-Work!</h1>
                <p>A decentralized workplace environment.</p>
                <p>Click on Jobs or Post Job to begin.</p>
            </div>
        </>
        
        
    )
}